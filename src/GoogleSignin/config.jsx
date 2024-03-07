// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDS_TfyHwa6sw0d3hRWEAq8rwPfzQHWetY",
    authDomain: "disney-a3e5b.firebaseapp.com",
    projectId: "disney-a3e5b",
    storageBucket: "disney-a3e5b.appspot.com",
    messagingSenderId: "350954265774",
    appId: "1:350954265774:web:2efd292768e933befee13f",
    measurementId: "G-L8LMYG4785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }