import firebase from 'firebase';
require('@firebase/firestore');
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "strange-team-300918.firebaseapp.com",
  projectId: "strange-team-300918",
  storageBucket: "strange-team-300918.appspot.com",
  messagingSenderId: "540709050580",
  appId: "1:540709050580:web:23d07984731c870d160341"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();