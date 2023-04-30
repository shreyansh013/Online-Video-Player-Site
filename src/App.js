import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import VideosPage from './pages/VideosPage';
import UploadPage from './pages/UploadPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/videos'} element={<VideosPage />} />
        <Route path={'/upload'} element={<UploadPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/signup'} element={<SignupPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
