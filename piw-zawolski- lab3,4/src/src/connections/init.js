import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlvsQmWXXvsFSjoMzqaE4xXFlG5DAGGB8",
    authDomain: "piw-zawolski.firebaseapp.com",
    projectId: "piw-zawolski",
    storageBucket: "piw-zawolski.appspot.com",
    messagingSenderId: "642741331741",
    appId: "1:642741331741:web:b9774a493f3a2c734823f4",
    measurementId: "G-EJ48DC5NPE"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);