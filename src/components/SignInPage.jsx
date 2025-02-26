import React from 'react';

export function SignInPage() {
    return (
        <>
            <main>
                <h1>Sign In</h1>

            </main>
        </>
    );
}


// import React from 'react';

// import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
// import { StyledFirebaseAuth } from 'react-firebaseui';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';

// export function SignInPage() {
//     const navigate = useNavigate();
//     const authenticator = getAuth();
//     const [user, error] = useAuthState(authenticator);

//     const firebaseUIConfig = {
//         signInOptions: [
//             { provider: EmailAuthProvider.PROVIDER_ID, 
//                 requiredDisplayName: true }, 
//                 GoogleAuthProvider.PROVIDER_ID,
//         ],
//         signInFlow: 'popup', //don't redirect to authenticate
//         credentialHelper: 'none', //don't show the email account chooser
//         callbacks: { //"lifecycle" callbacks
//             signInSuccessWithAuthResult: () => {
//                 return false; //don't redirect after authentication
//             }
//         }
//     }

//     let status;
//     if(error) {
//         status = "Error:" + {error}
//     }

//     if(user) {
//         status = "Sign in successful!"
//     } else {
//         status = "Please sign in to your account"
//     }

//     return (
//         <main className="sign-in-page">
//             <div className="sign-in-container">
//                 <h2 className="h2-sign-in">Sign In</h2>
//                 <p className="p-sign-in">{status}</p>
//                 <div className="sign-in-form">
//                     <StyledFirebaseAuth
//                         firebaseAuth={authenticator}
//                         uiConfig={firebaseUIConfig}
//                     />
//                 </div>
//             </div>
//         </main>
//     );
// }
