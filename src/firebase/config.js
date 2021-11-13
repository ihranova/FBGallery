// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnG5Hoyhy4bYcyyDbHYBw78-QnfXCsySo",
  authDomain: "fbgallery-850fd.firebaseapp.com",
  projectId: "fbgallery-850fd",
  storageBucket: "fbgallery-850fd.appspot.com",
  messagingSenderId: "770161369916",
  appId: "1:770161369916:web:da5ac725d0dff2beb27439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
