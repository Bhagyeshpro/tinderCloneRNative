// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrMSENBZ_MXgxJQOY07ox7us5DIF5h8SI",
    authDomain: "tinder-clone-b028c.firebaseapp.com",
    projectId: "tinder-clone-b028c",
    storageBucket: "tinder-clone-b028c.appspot.com",
    messagingSenderId: "672969420721",
    appId: "1:672969420721:web:5aac12f5698cf49ce59790",
    measurementId: "G-5GLPQ6J569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore()

export { db, auth }