import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import fetch from 'node-fetch';
import base64 from 'js-base64';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory); //GitHub APIを使用するためにコメントアウトしてある。下の一ブロックがそのためのコード。return以降は元からあったもの。●その後、開発時すぐに更新されるよう、再度こちらを使用することにした。●また、function getAllPostIds()の前からasyncを削除している（元の状態に戻した）ので、GitHub APIを使用するときは再度入力すること。

  // const repoUrl = "https://api.github.com/repos/BBC-Radiance/nextts-blog/contents/posts";
  // const response = await fetch(repoUrl)
  // const files = await response.json()
  // const fileNames = files.map(file => file.name)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8'); //GitHub APIを使用するためにコメントアウトしてある。下の一ブロックがそのためのコード。const matterResult...... 以降は元からあったもの。●その後、開発時すぐに更新されるよう、再度こちらを使用することにした。

  // const repoUrl = `https://api.github.com/repos/BBC-Radiance/nextts-blog/contents/posts/${id}.md`;
  // const response = await fetch(repoUrl);
  // const file = await response.json();
  // const fileContents = base64.decode(file.content)

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
