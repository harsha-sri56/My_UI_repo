import firebase from "firebase";
require("firebase/firestore");
  
  var firebaseConfig = {
    apiKey: "AIzaSyBVdck60gfU6S55lv4QH7Vuzs6gtI4xkzA",
    authDomain: "react-blog-4afa0.firebaseapp.com",
    databaseURL: "https://react-blog-4afa0.firebaseio.com",
    projectId: "react-blog-4afa0",
    storageBucket: "react-blog-4afa0.appspot.com",
    messagingSenderId: "849510806348",
    appId: "1:849510806348:web:abf141e426701d023d55e9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db=firebase.firestore();

  export const auth=firebase.auth()
  export const firestore=firebase.firestore
  export default db;
