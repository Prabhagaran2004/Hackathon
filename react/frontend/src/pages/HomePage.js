import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to the Agricultural Supply Chain Tracker</h2>
            <p>Navigate through the different sections to manage data and track produce.</p>
            <ul>
                <li><Link to="/manage/farmers">Manage Farmers</Link></li>
                <li><Link to="/manage/inputs">Manage Inputs</Link></li>
                <li><Link to="/manage/batches">Manage Produce Batches</Link></li>
                <li><Link to="/traceability">Track a Batch</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;