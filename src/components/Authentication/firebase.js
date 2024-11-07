import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGx1-0AgsVz_2cHEBhWI0VkDDaYtx6rjM",
  authDomain: "blog-19d16.firebaseapp.com",
  projectId: "blog-19d16",
  storageBucket: "blog-19d16.appspot.com",
  messagingSenderId: "593710936514",
  appId: "1:593710936514:web:79f196ebcb50ae14a9665b",
  measurementId: "G-1NVQEMZP39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  {app,auth};

