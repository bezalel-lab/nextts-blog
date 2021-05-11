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
                <p>こんにちは、本橋友輝（もとはしともき）です。ウェブ系エンジニアを目指しています。Next.js、TypeScript、Jest、コンピュータ・サイエンスその他の独学に1000時間ほどを用いました。ほとんどは公式ドキュメントを読んで学習しました。DockerやFireBaseなどの技術も気になっています。</p>
                <p>Next.jsとTypeScriptを用いて、ギタリスト向けのコードを分析するアプリを作成しました。</p>
                <Link href="/posts/cordAnalyzer">
                    <a>
                        <p className={utilStyles.headingLg2}>🎸Cord Analyzer</p>
                    </a>
                </Link>
                <br />
                <p>仕事を行う上で、</p>
                <ol>
                    <li>必要なことを見極める</li>
                    <li>成功する方法を探る</li>
                    <li>勤勉さや意欲を示す</li>
                    <li>他の人と協調する</li>
                </ol>
                <p>ことを得意としています。<br />これらを生かして、プロジェクトの成功に貢献できるものと思います。</p>
        <section>
        <h2 className={utilStyles.headingLg}>学んだ技術</h2>
        </section>
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