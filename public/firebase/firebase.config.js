import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCsfLNNw2Da3bdGqd8CkeJokAy7n05XiU",
  authDomain: "router-newspaper-auth.firebaseapp.com",
  projectId: "router-newspaper-auth",
  storageBucket: "router-newspaper-auth.appspot.com",
  messagingSenderId: "1037937526954",
  appId: "1:1037937526954:web:08d8c4254babb1c85e68d3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
