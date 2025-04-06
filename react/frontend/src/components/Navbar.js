import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#f8f8f8', padding: '10px 20px', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.5em', textDecoration: 'none', color: '#333' }}>
                AgriTrack
            </Link>
            <div>
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                    <li style={{ marginRight: '15px' }}>
                        <Link to="/manage/farmers" style={{ textDecoration: 'none', color: '#555' }}>Farmers</Link>
                    </li>
                    <li style={{ marginRight: '15px' }}>
                        <Link to="/manage/inputs" style={{ textDecoration: 'none', color: '#555' }}>Inputs</Link>
                    </li>
                    <li style={{ marginRight: '15px' }}>
                        <Link to="/manage/batches" style={{ textDecoration: 'none', color: '#555' }}>Batches</Link>
                    </li>
                    <li>
                        <Link to="/traceability" style={{ textDecoration: 'none', color: '#555' }}>Track Batch</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;