import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { SignInPage } from './SignInPage';
import { ListingPage } from './ListingPage';
import { NavBar } from './Nav';

// Dataset
import aptData from '/data/apartment-data.json';


const App = () => {
  return (
    <>
      <header className="header">
        <nav>
          {/* Render navigation bar for desktop*/}
          <NavBar />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage listings={aptData}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/listing/:id" element={<ListingPage listings={aptData}/>} />
      </Routes>
    </>
    
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import 'leaflet/dist/leaflet.css';
// import { Routes, Route } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { HomePage } from './HomePage';
// import { AboutPage } from './AboutPage';
// import { Search } from './Search';
// import { SignInPage } from './SignInPage';
// import { NavBar } from './Nav';

// // Datasets
// import aptData from './data/apartment-data.json';

// function App() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [collections, setCollections] = useState([]);
//   const authenticator = getAuth();
//   useEffect(() => {
//     onAuthStateChanged(authenticator, function (firebaseUser) {
//       if (firebaseUser) {
//         setCurrentUser(firebaseUser);
//       } else {
//         setCurrentUser(null);
//       }
//     });
//   }, []);

//   const userName = currentUser ? currentUser.displayName || currentUser.email : null;

//   return (
//     <>
//       <header className="header">
//         <nav>
//           {/* Render navigation bar for desktop*/}
//           <NavBar />
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<HomePage listings={aptData}/>} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/search" element={<Search />} /> 
//         <Route path="/sign-in" element={<SignInPage />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

