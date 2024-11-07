// import {signInWithRedirect, getRedirectResult, GoogleAuthProvider} from "firebase/auth";
// import {auth} from './firebase';
//
// const onGoogleSignIn = async (e) => {
//     e.preventDefault();
//     const provider = new GoogleAuthProvider();
//
//     try {
//         // Trigger the Google Sign-In with redirect
//         await signInWithRedirect(auth, provider);
//
//         // After redirection, get the result of the sign-in
//         const result = await getRedirectResult(auth);
//
//         if (result) {
//             // Google Access Token, can be used to access Google APIs
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // User information
//             const user = result.user;
//             console.log("Signed in user:", user);
//             console.log("Access token:", token);
//         }
//     } catch (error) {
//         // Handle Errors
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData?.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//
//         console.error("Error during Google Sign-In:", errorMessage, errorCode, email, credential);
//     }
// };
// export default onGoogleSignIn;
