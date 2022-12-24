import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD33XBUphFo91zi2aHXZwA4-4moipuBJ_o",
    authDomain: "amzn-12.firebaseapp.com",
    projectId: "amzn-12",
    storageBucket: "amzn-12.appspot.com",
    messagingSenderId: "587506428040",
    appId: "1:587506428040:web:cab1f9e912efa64a79d73d",
    measurementId: "G-2YWKF56T5L"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  export default db;