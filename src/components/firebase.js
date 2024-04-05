import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB7ZtR_Zvuo0mJKNmCyL8sVv8K3DAuNRKU",
  authDomain: "store-dac8c.firebaseapp.com",
  projectId: "store-dac8c",
  storageBucket: "store-dac8c.appspot.com",
  messagingSenderId: "301709961254",
  appId: "1:301709961254:web:0e3771969d0bd81e7ddee7",
  measurementId: "G-L2CKBM12SL",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
/* =============================== */
export const getProducts = new Promise((resolve, reject) =>
  resolve(collection(db, "products"))
)
  .then((productsCol) => getDocs(productsCol))
  .then((productsSnapshot) => productsSnapshot.docs.map((doc) => doc.data()));
/* =============================== */
export async function setProduct(id, name, desc, price) {
  await setDoc(doc(db, "products", id), {
    id,
    name: name,
    description: desc,
    price,
  });
}
/* ================================ */
export async function deleteProduct(id) {
  await deleteDoc(doc(db, "products", id));
}
