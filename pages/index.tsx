import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Line from '../components/Line';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
// import Image from 'next/link';
import Learn from '../components/learn';
import Date from '../components/date';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd}`}>
        <div className={`${utilStyles.sectionWidth}`}>
          <p>
            こんにちは、
            <ruby>
              本橋友輝<rt className={`${utilStyles.ruby}`}>もとはしともき</rt>
            </ruby>
            （25歳）です。ウェブ系エンジニアを目指しており、ウェブ開発の基礎、Next.js、TypeScript、コンピュータ・サイエンスその他の独学に1000時間ほどを用いました。ほとんどは公式ドキュメントを読んで学習しました。PWAやFireBaseも気になっています。
          </p>
          <p>
            Next.jsとTypeScriptを用いて、ギタリスト向けのコードを分析するアプリを作成しました。
          </p>
          <Link href="/posts/cordAnalyzer">
            <p className={`${utilStyles.headingLg2} ${utilStyles.inlineBlock}`}>
              <a>🎸Cord Analyzer</a>
            </p>
          </Link>
        </div>
        <br />
        {/* <p>仕事を行う上で、</p>
                <ol>
                    <li>必要なことを見極める</li>
                    <li>成功する方法を選ぶ</li>
                    <li>勤勉さや意欲を示す</li>
                    <li>他の人と協調する</li>
                </ol>
                <p>ことができます。<br />これらを生かして、プロジェクトの成功に貢献できるものと思います。</p> */}
        {/* <Line /> */}
        <Line />
        <Learn />
        <Line />
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.blog} ${utilStyles.sectionWrapper}`}
      >
        <h2 className={`${utilStyles.headingLg} ${utilStyles.headingEnglish}`}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
