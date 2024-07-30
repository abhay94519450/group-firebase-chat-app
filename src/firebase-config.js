// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNehgrb16DsamnzAn6WSnGikcOFVD7DEI",
  authDomain: "portfoliooi.firebaseapp.com",
  projectId: "portfoliooi",
  storageBucket: "portfoliooi.appspot.com",
  messagingSenderId: "1035366543159",
  appId: "1:1035366543159:web:0038b1fc2d15a1e1e3b4b2",
  measurementId: "G-SZS3RQ6RJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
