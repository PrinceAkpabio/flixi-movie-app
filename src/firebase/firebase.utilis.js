import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
  apiKey: "AIzaSyC_JGdtvhrNd1EtMe8eOtDYNSohpl_DP2A",
  authDomain: "flixi-b4d4a.firebaseapp.com",
  databaseURL: "https://flixi-b4d4a.firebaseio.com",
  projectId: "flixi-b4d4a",
  storageBucket: "flixi-b4d4a.appspot.com",
  messagingSenderId: "420912946030",
  appId: "1:420912946030:web:048b8b2e91412b55363f7f",
  measurementId: "G-1QSX7936YF",
};

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
 if (!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`);

 const snapshot = await userRef.get();

 if (!snapshot.exists) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
   await userRef.set({displayName, email, createdAt, ...additionalData})
  } catch (error) {
   console.log('error creating user', error.message);
  }
 }

 return userRef;
};

firebase.initializeApp(Config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;