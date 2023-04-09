import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


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
