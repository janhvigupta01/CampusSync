import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "campussync-d9d41.firebaseapp.com",
  projectId: "campussync-d9d41",
  storageBucket: "campussync-d9d41.firebasestorage.app",
  messagingSenderId: "1001183109674",
  appId: "1:1001183109674:web:2436ebe7541e1df1af9953",
  measurementId: "G-9212WPM26N",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };