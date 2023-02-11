// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA5mF7CkZXWq-SOGM-6z4-zIxKKEWOFyI",
  authDomain: "react-spending-book.firebaseapp.com",
  projectId: "react-spending-book",
  storageBucket: "react-spending-book.appspot.com",
  messagingSenderId: "537933701110",
  appId: "1:537933701110:web:27a2e9b63895fece8471d7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export { firebase };