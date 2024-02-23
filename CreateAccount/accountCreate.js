// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-p2TYJ1FPDeMf2_DIJFcLSIPhXFIABpQ",
  authDomain: "users-pidge.firebaseapp.com",
  projectId: "users-pidge",
  storageBucket: "users-pidge.appspot.com",
  messagingSenderId: "704715357861",
  appId: "1:704715357861:web:8ff753332de310ac61d74c",
  measurementId: "G-VP1S34SE9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Function to handle form submission
function handleFormSubmission() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed up successfully
            console.log('User signed up:', userCredential.user);
            // You can redirect or do other actions here
        })
        .catch((error) => {
            // Handle errors
            console.error('Signup error:', error.message);
        });
}

// Add event listener to the signup button
document.getElementById('signup-btn').addEventListener('click', handleFormSubmission);
