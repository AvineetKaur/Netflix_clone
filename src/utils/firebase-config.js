
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ2KDLcGanj8g3RZdBuMGQ88KaAzKShhQ",
  authDomain: "netflix-clone-21d81.firebaseapp.com",
  projectId: "netflix-clone-21d81",
  storageBucket: "netflix-clone-21d81.appspot.com",
  messagingSenderId: "16239673050",
  appId: "1:16239673050:web:8f8e7cec982cc060e6afe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);