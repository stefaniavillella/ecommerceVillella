// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQtBlH3yQnfzAQOuhq42Mb0v0j__5dYX0",
  authDomain: "e-commercevillella.firebaseapp.com",
  projectId: "e-commercevillella",
  storageBucket: "e-commercevillella.appspot.com",
  messagingSenderId: "820839476528",
  appId: "1:820839476528:web:a71c86d312eb65b4712cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app)