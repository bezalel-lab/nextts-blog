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
// import firebase from '../firebase/clientApp';
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

    return (
        <Layout home>
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

