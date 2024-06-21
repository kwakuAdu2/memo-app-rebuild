import React from 'react';
// react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import SignIn from '../pages/auth/SignIn';
import Home from '../pages/Home';

const Navigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>
        </>
    );
};

export default Navigation;
