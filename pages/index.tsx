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
import firebase from '../firebase/clientApp';
// Import the useAuthStateHook
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Auth from '../components/Auth';
import VoterList from '../components/VoterList';

export default function Home({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}) {
    // Firestore
    const db = firebase.firestore();

    // Destructure user, loading, and error out of the hook.
    const [user, loading, error] = useAuthState(firebase.auth());
    console.log('Loading: ', loading, '|', 'Current user: ', user);

    const [votes, votesLoading, votesError] = useCollection(
        firebase.firestore().collection('votes'),
        {}
    );

    if (!votesLoading && votes) {
        votes.docs.map((doc) => console.log(doc.data()));
    }

    // Create document function.
    const addVoteDocument = async (vote: string) => {
        await db.collection('votes').doc(user.uid).set({
            vote,
        });
    };

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
                            本橋友輝
                            <rt className={`${utilStyles.ruby}`}>
                                もとはしともき
                            </rt>
                        </ruby>
                        （25歳）です。フロントエンドエンジニアを目指しており、ウェブ開発の基礎、Next.js、TypeScript、コンピュータ・サイエンスその他の独学に1000時間ほどを用いました。ほとんどは公式ドキュメントを読んで学習しました。PWAやFireBaseも気になっています。
                    </p>
                    <p>
                        Next.jsとTypeScriptを用いて、ギタリスト向けのコードを分析するアプリを作成しました。
                    </p>
                    <Link href="/posts/cordAnalyzer">
                        <p
                            className={`${utilStyles.headingLg2} ${utilStyles.inlineBlock} ${utilStyles.linkCursor}`}
                        >
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
                <h2
                    className={`${utilStyles.headingLg} ${utilStyles.EnglishHeading}`}
                >
                    <span className={`${utilStyles.EnglishCheck}`}>☑</span>Blog
                </h2>
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
            {loading && <h4>Loading...</h4>}
            {!user && <Auth />}
            {user && (
                <>
                    <div style={{ textAlign: 'center', paddingBottom: 15 }}>
                        <p style={{ fontSize: 22, lineHeight: 0.25 }}>
                            Did you enjoy this portfolio?
                        </p>
                        <button
                            style={{ fontSize: 22, marginRight: 8 }}
                            onClick={() => addVoteDocument('yes')}
                        >
                            ⭕️YES:{' '}
                            {
                                votes?.docs?.filter(
                                    (doc) => doc.data().vote === 'yes'
                                ).length
                            }
                        </button>
                        <button
                            style={{ fontSize: 22 }}
                            onClick={() => addVoteDocument('no')}
                        >
                            ❌NO:{' '}
                            {
                                votes?.docs?.filter(
                                    (doc) => doc.data().vote === 'no'
                                ).length
                            }
                        </button>
                    </div>
                </>
            )}

                            
            {/* メモ：Firebaseのチュートリアルの最後の部分。この部分（フィードバックした人の情報）の表示だけうまくいかなかったため、差し当たりコメントアウトしてある。VoterListコンポーネントと、もしかしたらAuthコンポーネントもエラーに関係しているかも。
            元となるYouTube動画（https://www.youtube.com/watch?v=awd_oYcmrRA&t=888s）のソースコードの該当すると思われるところを貼り付けてもうまくいかなかったので、ひとまず置いておくことに。
            <div style={{ marginTop: '64px' }}>
                <h3>Voters:</h3>
                <div
                    style={{
                        maxHeight: '320px',
                        overflowY: 'auto',
                        width: '240px',
                    }}
                >
                    {votes?.docs?.map((doc) => (
                        <>
                            <VoterList
                                id={doc.id}
                                key={doc.id}
                                vote={doc.data().vote}
                            />
                        </>
                    ))}
                </div>
            </div> */}
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
