// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHZTlE_WLe6qfAXu2uWUOx91YfHfarMgk",
  authDomain: "snrvippanel.firebaseapp.com",
  projectId: "snrvippanel",
  storageBucket: "snrvippanel.firebasestorage.app",
  messagingSenderId: "1081915628150",
  appId: "1:1081915628150:web:10b95399cd21687c5ddd57",
  measurementId: "G-Q9KZ9E1CZD"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);