import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA69yEBLo2kQ1HgI5FMHhRka-NoO4X1MDE",
    authDomain: "feisty-flames-358409.firebaseapp.com",
    projectId: "feisty-flames-358409",
    storageBucket: "feisty-flames-358409.appspot.com",
    messagingSenderId: "892116089370",
    appId: "1:892116089370:web:80e81a3b01ad929af96fa3",
    measurementId: "G-D7T13XKKYX"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage()
  export {storage, firebase as default}