// YouTubeのFirebaseチュートリアルの最後で、ここだけうまくいかなかった。本当はフィードバックした人の情報が表示されるはずだった。
// チュートリアルURL: https://www.youtube.com/watch?v=awd_oYcmrRA&t=888s
 // ちなみに、デプロイしたサイトでサインインとフィードバックの機能を使用したいならば、GitHubの設定画面で（Firebaseの方でも？）、URLの指定をそちらにし直す必要があるだろう。

import React, { ReactElement } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import firebase from '../firebase/clientApp';

interface Props {
    // id is the id of the vote document
    // (which is also the uid of the user, and the name of the user document for that user)
    id: string;
    vote: string;
}

export default function VoterList({ id, vote }: Props): ReactElement {
    const [value, loading, error] = useDocument(
        firebase.firestore().doc(`users/${id}`)
    );

    if (loading) {
        return <h6>Loading...</h6>;
    }

    if (error) {
        return null;
    }

    return (
        <div
            style={{
                maxWidth: '320px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <img
                style={{
                    borderRadius: '50%',
                    maxHeight: '48px',
                    marginTop: '8px',
                    marginRight: '8px',
                }}
                src={value.data().photoURL}
            />
            <div>
                <h4 style={{ marginBottom: 0 }}>{value.data().displayName}</h4>
                <h4 style={{ marginTop: 0 }}>
                    Voted: {vote === 'yes' ? '⭕️' : '❌'}
                </h4>
            </div>
        </div>
    );
}
