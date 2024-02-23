// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUWujJngDvazjYYVAEviX-qaGqm2pavMk",
  authDomain: "vite-project-b81bc.firebaseapp.com",
  projectId: "vite-project-b81bc",
  storageBucket: "vite-project-b81bc.appspot.com",
  messagingSenderId: "564031579695",
  appId: "1:564031579695:web:0a5c5d2fc6e1b1138a48da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db