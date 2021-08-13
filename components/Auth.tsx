import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase/clientApp';

// Configure firebaseui
const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callback[......]
    signInSuccessUrl: "/",
    // We will display GitHub as auth providers.
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SinInScreen() {
    return (
        <div
            style={{
                maxWidth: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
          <h1>Nextts-blog Login</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default SinInScreen;