import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3UuRwaaBRdYIK46pT5z-LkPh75F67ATY",
  authDomain: "huskyhabitat-8a5be.firebaseapp.com",
  projectId: "huskyhabitat-8a5be",
  storageBucket: "huskyhabitat-8a5be.firebasestorage.app",
  messagingSenderId: "662657087367",
  appId: "1:662657087367:web:5498679da101b31bc3c522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;