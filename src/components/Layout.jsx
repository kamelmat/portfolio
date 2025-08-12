import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
