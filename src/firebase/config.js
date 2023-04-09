import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyDLmnoBvnjOQ-AaJgDw1DnVBiTETbcp8LI",
//   authDomain: "the-net-ninja-sandbox.firebaseapp.com",
//   databaseURL: "https://the-net-ninja-sandbox.firebaseio.com",
//   projectId: "the-net-ninja-sandbox",
//   storageBucket: "the-net-ninja-sandbox.appspot.com",
//   messagingSenderId: "485942827092",
//   appId: "1:485942827092:web:1811d9d8f1f5fabcd5b5c1"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBvbQaa0ajtFR_U-6IH6wgJzNwSLC-LotQ",
  authDomain: "photo-galary-e3640.firebaseapp.com",
  projectId: "photo-galary-e3640",
  storageBucket: "photo-galary-e3640.appspot.com",
  messagingSenderId: "634204106293",
  appId: "1:634204106293:web:f571ae30be4302999c4b7c",
  measurementId: "G-D8HTG5WFPN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
