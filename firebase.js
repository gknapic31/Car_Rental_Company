import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYqWdcjpKnGHt9mL8X3evuKp21Q0O2HU4",
    authDomain: "carrentalcompany-3598b.firebaseapp.com",
    projectId: "carrentalcompany-3598b",
    storageBucket: "carrentalcompany-3598b.appspot.com",
    messagingSenderId: "1082690076577",
    appId: "1:1082690076577:web:4c93f483dca0109567d5e0"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}