import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

export function requireAuth(){
  onAuthStateChanged(auth, (user)=>{
    if(!user){
      window.location.href = "index.html";
    } else {
      const el = document.getElementById("currentUser");
      if(el) el.textContent = user.email || "Yönetici";
    }
  });
}
export function doLogout(){
  signOut(auth).then(()=> window.location.href="index.html");
}
window.logout = doLogout;