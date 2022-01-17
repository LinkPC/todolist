// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD5OrfR8bKL66LadeXf-ad2cec3C9Wqd0",
    authDomain: "todo-list-58145.firebaseapp.com",
    projectId: "todo-list-58145",
    storageBucket: "todo-list-58145.appspot.com",
    messagingSenderId: "948123328583",
    appId: "1:948123328583:web:aabff1182b4b8ee9ec5162"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;