// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "learning-oauthentication.firebaseapp.com",
  projectId: "learning-oauthentication",
  storageBucket: "learning-oauthentication.appspot.com",
  messagingSenderId: "997598711394",
  appId: "1:997598711394:web:6480a06ee844afbd718b3b",
  measurementId: "G-15HNEK36JQ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
