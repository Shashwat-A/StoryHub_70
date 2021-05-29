import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAHp95Fc8yACULlgdPgP8S7mLfPAmzZQnU",
  authDomain: "storyhub-24c9b.firebaseapp.com",
  projectId: "storyhub-24c9b",
  storageBucket: "storyhub-24c9b.appspot.com",
  messagingSenderId: "964882732584",
  appId: "1:964882732584:web:b9cbb5735d79f188c3c71d",
  measurementId: "G-C9XTDJMBZ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()