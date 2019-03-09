import firebase from "firebase";
// import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCBlt56GqPyMseJ3vHm9Y-3-USnZfe0XPQ",
  authDomain: "ninja-chat-72daa.firebaseapp.com",
  databaseURL: "https://ninja-chat-72daa.firebaseio.com",
  projectId: "ninja-chat-72daa",
  storageBucket: "ninja-chat-72daa.appspot.com",
  messagingSenderId: "772237906209"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
