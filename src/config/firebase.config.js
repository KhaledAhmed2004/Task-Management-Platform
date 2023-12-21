import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBF1Uv9c_C49tHtt0Fih6CgxaiTASbZa84",
  authDomain: "task-b43e7.firebaseapp.com",
  projectId: "task-b43e7",
  storageBucket: "task-b43e7.appspot.com",
  messagingSenderId: "185784528044",
  appId: "1:185784528044:web:70faa7d453f03e801a8309",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
