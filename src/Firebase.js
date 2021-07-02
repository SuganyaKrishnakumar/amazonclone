import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4aYBp0wX5eJ6VSzi4gvdCs1dLrOCK4QY",
    authDomain: "first-f31c8.firebaseapp.com",
    projectId: "first-f31c8",
    storageBucket: "first-f31c8.appspot.com",
    messagingSenderId: "818555053495",
    appId: "1:818555053495:web:f4646d1f323bd37a33f432",
    measurementId: "G-JGVVVNPL2P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};