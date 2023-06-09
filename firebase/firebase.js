import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD4HN8S_3orkEzehx5FbfchMoziMc_4KkU",
  authDomain: "finalbusinesseeehluul.firebaseapp.com",
  projectId: "finalbusinesseeehluul",
  storageBucket: "finalbusinesseeehluul.appspot.com",
  messagingSenderId: "1061282335658",
  appId: "1:1061282335658:web:173390b3e177dc61b839d3",
  measurementId: "G-1XYS3JWVL5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
