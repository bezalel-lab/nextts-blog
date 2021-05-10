import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>こんにちは、Tommyです。ウェブ系エンジニアを目指しています。Next.js、TypeScript、Jest、コンピュータ・サイエンスその他の独学に1000時間ほどを用いました。ほとんどは公式ドキュメントを読んで学習しました。FireBaseやKubernetesなどの技術も気になっています。</p>
        <Link href="/posts/cordAnalyzer">
            <a>
                <p className={utilStyles.lightText}>（作成中ポートフォリオのモバイル端末での表示確認用リンク）</p>
                {/*//!NOTE このLinkのブロックはリリース前に削除すること */}
            </a>
        </Link>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}