import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyANVwXomQXT6vog-jmRW8aepH-wmDPdirI",
  authDomain: "scd-data-d686c.firebaseapp.com",
  databaseURL: "https://scd-data-d686c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scd-data-d686c",
  storageBucket: "scd-data-d686c.appspot.com",
  messagingSenderId: "1021130467589",
  appId: "1:1021130467589:web:31cee191f3fc286026af6c",
  measurementId: "G-R9E2CCVB2E"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const database = firebase.database();

  export default database;