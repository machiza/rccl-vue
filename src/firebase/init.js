import firebase from "firebase/app";
// eslint-disable-next-line no-unused-vars
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCXTewguwSD6fbIClORHMhANFNJ0aBWEhU",
  authDomain: "rhinocupchampionsleaguemz.firebaseapp.com",
  databaseURL: "https://rhinocupchampionsleaguemz.firebaseio.com",
  projectId: "rhinocupchampionsleaguemz",
  storageBucket: "rhinocupchampionsleaguemz.appspot.com",
  messagingSenderId: "830543782472"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
