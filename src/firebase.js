// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "fire-auth-a165c.firebaseapp.com",
  projectId: "",
  storageBucket: "fire-auth-a165c.appspot.com",
  messagingSenderId: "778634667139",
  appId: "1:778634667139:web:0c35c7718d0369d016a7b6",
  measurementId: "G-0S0NYYSHXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
