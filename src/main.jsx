import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import './index.css'
import App from './components/App.jsx'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3UuRwaaBRdYIK46pT5z-LkPh75F67ATY",
  authDomain: "huskyhabitat-8a5be.firebaseapp.com",
  databaseURL: "https://huskyhabitat-8a5be-default-rtdb.firebaseio.com",
  projectId: "huskyhabitat-8a5be",
  storageBucket: "huskyhabitat-8a5be.firebasestorage.app",
  messagingSenderId: "662657087367",
  appId: "1:662657087367:web:5498679da101b31bc3c522"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)