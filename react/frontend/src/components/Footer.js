import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#f8f8f8', padding: '10px 20px', borderTop: '1px solid #ddd', textAlign: 'center', color: '#777', fontSize: '0.9em', position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <p>&copy; {currentYear} AgriTrack - Transparent Agricultural Supply Chain. All rights reserved.</p>
        </footer>
    );
};

export default Footer;