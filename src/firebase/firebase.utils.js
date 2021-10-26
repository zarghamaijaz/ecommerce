import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyB6JvSougzqiSR8kd36cfB1XTEGD3zPYyo",
    authDomain: "crown-db-fc444.firebaseapp.com",
    projectId: "crown-db-fc444",
    storageBucket: "crown-db-fc444.appspot.com",
    messagingSenderId: "62602887471",
    appId: "1:62602887471:web:5944d85b5452c83477e1da",
    measurementId: "G-YBDJZRHXS4"
  };

export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot)
  if(!snapshot.exists){
    const {displayName, email}= userAuth;
    const createdAt= new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log("error creating user",error.message)
    }
  }
  return userRef;
}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

  export default firebase;
