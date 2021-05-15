import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hq3kEgPZghBkMCjlKfYrr83YG0yDShU",
  authDomain: "our-signal.firebaseapp.com",
  projectId: "our-signal",
  storageBucket: "our-signal.appspot.com",
  messagingSenderId: "684834435684",
  appId: "1:684834435684:web:fb46caf8f55e4ab6e7e571",
  measurementId: "G-Y6R31T2FY5"
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
