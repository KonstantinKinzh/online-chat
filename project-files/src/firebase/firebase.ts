import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDIGDJnmaA9oGikLk6xKXrSht4oAJZrSo4",
  authDomain: "online-chat-cb5fd.firebaseapp.com",
  databaseURL: "https://online-chat-cb5fd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-chat-cb5fd",
  storageBucket: "online-chat-cb5fd.appspot.com",
  messagingSenderId: "394679962565",
  appId: "1:394679962565:web:ff2a05a187387813dad9ac"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();