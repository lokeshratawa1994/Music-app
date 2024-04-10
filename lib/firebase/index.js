// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3ykmKdYsSxPW4KlTt61bTwR7uz34fqNg",
  authDomain: "music-app-8d12b.firebaseapp.com",
  projectId: "music-app-8d12b",
  storageBucket: "music-app-8d12b.appspot.com",
  messagingSenderId: "274791291193",
  appId: "1:274791291193:web:3197259e0b1878b66ef0e8",
  measurementId: "G-E99WJLP8G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)