import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase

firebase.initializeApp({
      apiKey: "AIzaSyBOjXxBukX90tfyBxBXUZdGNlWYxB9xh_I",
      authDomain: "burgerqueen-2019.firebaseapp.com",
      databaseURL: "https://burgerqueen-2019.firebaseio.com",
      projectId: "burgerqueen-2019",
      storageBucket: "burgerqueen-2019.appspot.com",
      messagingSenderId: "134345568365"
    });

    let db = firebase.firestore();
    //db.settings({timestampsInSnapshots: true}); daba error, ahora viene true por defecto

export default db;
