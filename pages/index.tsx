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
                    <Link href="/posts/cordAnalyzer">
                        <p
                            className={`${utilStyles.headingLg2} ${utilStyles.inlineBlock} ${utilStyles.linkCursor}`}
                        >
                            <a>🎸Cord Analyzer</a>
                        </p>
                    </Link>
                </div>
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
