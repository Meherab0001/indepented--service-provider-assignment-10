// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7PDy2ZM_c48Fr9SYaCVQweO2BoSgGMP8",
  authDomain: "assignment-10-dce5b.firebaseapp.com",
  projectId: "assignment-10-dce5b",
  storageBucket: "assignment-10-dce5b.appspot.com",
  messagingSenderId: "134122107123",
  appId: "1:134122107123:web:472e870dabe98dcf434786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth