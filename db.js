import { db } from "./firebase.js";
import {
  collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc,
  query, where, orderBy, limit, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const colProjects = collection(db, "projects");
export const colPersonnel = collection(db, "personnel");
export const colPersonnelEvents = collection(db, "personnel_events");
export const colVehicles = collection(db, "vehicles");
export const colVehicleEvents = collection(db, "vehicle_events");

export async function listCol(colRef){
  const snap = await getDocs(colRef);
  return snap.docs.map(d=>({id:d.id, ...d.data()}));
}
export async function getById(colRef, id){
  const snap = await getDoc(doc(colRef, id));
  return snap.exists() ? {id:snap.id, ...snap.data()} : null;
}
export async function addWithTS(colRef, data){
  return addDoc(colRef, {...data, createdAt: serverTimestamp()});
}
export async function updateById(colRef, id, data){
  return updateDoc(doc(colRef, id), data);
}
export async function deleteById(colRef, id){
  return deleteDoc(doc(colRef, id));
}