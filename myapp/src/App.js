import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // <-- Import the Layout
import SignLanguageHome from './components/SignLanguageHome';
import ProfilePage from './ProfilePage';
import AlphabetPage from './AlphabetPage';

function App() {
  return (
    <div>
      <Routes>
        {/* This is a Layout Route. All child routes
          will be rendered inside the Layout's <Outlet /> 
        */}
        <Route path="/" element={<Layout />}>
          {/* index=true means this is the default child route for "/" */}
          <Route index element={<SignLanguageHome />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path=":letter" element={<AlphabetPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;