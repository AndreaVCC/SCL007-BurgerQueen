import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
      apiKey: "AIzaSyBOjXxBukX90tfyBxBXUZdGNlWYxB9xh_I",
      authDomain: "burgerqueen-2019.firebaseapp.com",
      databaseURL: "https://burgerqueen-2019.firebaseio.com",
      projectId: "burgerqueen-2019",
      storageBucket: "burgerqueen-2019.appspot.com",
      messagingSenderId: "134345568365"
    };

const fire= firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default fire;
