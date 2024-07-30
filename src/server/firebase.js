import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDGv2PyFPOJk1oeUD5tX0JxIEmi43y5De0",
    authDomain: "scd-data.firebaseapp.com",
    databaseURL: "https://scd-data-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "scd-data",
    storageBucket: "scd-data.appspot.com",
    messagingSenderId: "193982526663",
    appId: "1:193982526663:web:46950399ed2af6e0577ae2",
    measurementId: "G-EE8JQTNW3G"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const database = firebase.database();

  export default database;