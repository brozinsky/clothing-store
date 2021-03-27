// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const apiKey = process.env.API_KEY;

const firebaseConfig = {
    apiKey: { apiKey },
    authDomain: "clothing-store-402a8.firebaseapp.com",
    databaseURL: "https://clothing-store-402a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clothing-store-402a8",
    storageBucket: "clothing-store-402a8.appspot.com",
    messagingSenderId: "192230033905",
    appId: "1:192230033905:web:f48508a601f6d1a2691c50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const ref = firebase.firestore().collection("products")
export const imgRef = firebase.firestore().collection("img")