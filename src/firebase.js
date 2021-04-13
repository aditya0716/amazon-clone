import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqPOgMpS6rWErwTeDkyfBuT-UhvdmEDXQ",
  authDomain: "clone-3ecd6.firebaseapp.com",
  projectId: "clone-3ecd6",
  storageBucket: "clone-3ecd6.appspot.com",
  messagingSenderId: "723598088428",
  appId: "1:723598088428:web:86f6465974d498e97f6dc9",
  measurementId: "G-YQESP98ZF8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
