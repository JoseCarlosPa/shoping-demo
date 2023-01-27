import React, {useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt0tDOYEmXkkxYblk5CZIYxHgLwhts4Nk",
  authDomain: "fir-34b28.firebaseapp.com",
  projectId: "fir-34b28",
  storageBucket: "fir-34b28.appspot.com",
  messagingSenderId: "755668804911",
  appId: "1:755668804911:web:911240d6b15e21b30b2dda",
  measurementId: "G-BY1BCVLC4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
