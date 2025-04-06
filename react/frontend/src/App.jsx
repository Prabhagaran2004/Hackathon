// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ManageDataPage from './pages/ManageDataPage.js';
import EntityDetailPage from './pages/EntitiyDetailPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/manage/:entityType" element={<ManageDataPage />} />
                        <Route path="/details/:entityType/:id" element={<EntityDetailPage />} />
                        <Route path="/create/:entityType" element={<EntityDetailPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;