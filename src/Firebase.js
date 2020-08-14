import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjfXKw94aLSNdcNpbXvOT96Jm-ajJbfhI",
  authDomain: "twitter-clone-47284.firebaseapp.com",
  databaseURL: "https://twitter-clone-47284.firebaseio.com",
  projectId: "twitter-clone-47284",
  storageBucket: "twitter-clone-47284.appspot.com",
  messagingSenderId: "8405827750",
  appId: "1:8405827750:web:429d69b589604fbaadf467",
  measurementId: "G-H711YT3P4D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
