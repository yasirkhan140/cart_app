import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76_YzIKEzAECDxXInz8906axrUlVgB1I",
  authDomain: "cart-7f73e.firebaseapp.com",
  databaseURL: "https://cart-7f73e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cart-7f73e",
  storageBucket: "cart-7f73e.appspot.com",
  messagingSenderId: "169364135765",
  appId: "1:169364135765:web:608ba085918f24f1a199dc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

