// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWPVdF1yUGg-dp1VWt-krhJmo7IQeT364",
  authDomain: "project-28-f7687.firebaseapp.com",
  projectId: "project-28-f7687",
  storageBucket: "project-28-f7687.appspot.com",
  messagingSenderId: "977857683703",
  appId: "1:977857683703:web:29c059f5a68e84be9ff3f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth