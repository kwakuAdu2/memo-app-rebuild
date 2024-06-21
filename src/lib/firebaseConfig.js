// SDKs for firebase configuration
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPw3zIsWwYmVCH6OpNPeJg_e9fnmk9kW4",
    authDomain: "gra-school.firebaseapp.com",
    databaseURL: "https://gra-school-default-rtdb.firebaseio.com",
    projectId: "gra-school",
    storageBucket: "gra-school.appspot.com",
    messagingSenderId: "693272566435",
    appId: "1:693272566435:web:278556164252f358ffbd16",
    measurementId: "G-DJJNTE92SV"
  };

  // Initialize firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export { auth }