import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmsuhjt8Ak_Pi6jmjmgqdYa_rpHid8oOc",
  authDomain: "pawmart-23781.firebaseapp.com",
  projectId: "pawmart-23781",
  storageBucket: "pawmart-23781.firebasestorage.app",
  messagingSenderId: "811949691671",
  appId: "1:811949691671:web:7cce3350d9c31c77205d52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
