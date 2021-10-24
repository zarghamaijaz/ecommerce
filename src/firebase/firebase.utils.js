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

}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

  export default firebase;
