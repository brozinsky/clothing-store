// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import React, { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBpmN0_1b8zgk_4WwTEJlC5kgVmOlzYNQU",
    authDomain: "clothing-store-402a8.firebaseapp.com",
    databaseURL: "https://clothing-store-402a8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clothing-store-402a8",
    storageBucket: "clothing-store-402a8.appspot.com",
    messagingSenderId: "192230033905",
    appId: "1:192230033905:web:f48508a601f6d1a2691c50"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true });

// db.collection('jackets').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     console.log(doc)
//   })
// })
export const ref = firebase.firestore().collection("products")


const App = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState([])

    const ref = firebase.firestore().collection("products")


    const getProducts = () => {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setProducts(items);
            setLoading(false);
            console.log(items)
        })
    }

    useEffect(() => {
        getProducts();

    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div >
            {
                products.map(item => {
                    return (
                        <div className="blog-container">
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

