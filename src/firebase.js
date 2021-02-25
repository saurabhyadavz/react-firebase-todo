
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRj65Igi8o1dkZzLIm0KbZPMaf5L6KtX8",
  authDomain: "todo-app-3fdaa.firebaseapp.com",
  projectId: "todo-app-3fdaa",
  storageBucket: "todo-app-3fdaa.appspot.com",
  messagingSenderId: "613502087005",
  appId: "1:613502087005:web:c3818a568f854d1b3442b4",
  measurementId: "G-MYNTQ991SX"

  });

const db = firebaseApp.firestore();

export default db

