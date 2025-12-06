import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Sayfaya giriş kontrolü
export function requireAuth() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // login yoksa index'e at
      window.location.href = "index.html";
      return;
    }

    // login varsa sağ üst maili yaz
    const el =
      document.getElementById("currentUser") ||
      document.getElementById("userEmail");

    if (el) el.textContent = user.email;
  });
}

// Çıkış fonksiyonu
export async function logout() {
  await signOut(auth);
  window.location.href = "index.html";
}

// Menüde onclick="logout()" çalışsın diye global'e koyuyoruz
window.logout = logout;
