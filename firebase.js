// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDKw_tW2ZKLDMvsrsx-Hpq6agQtM5neAcw",
    authDomain: "e-clone-e9223.firebaseapp.com",
    projectId: "e-clone-e9223",
    storageBucket: "e-clone-e9223.appspot.com",
    messagingSenderId: "660040694448",
    appId: "1:660040694448:web:6a737f0ed41c5962eed975",
    measurementId: "G-F7XQWG3C75"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};