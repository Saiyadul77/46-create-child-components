import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to the Rest Countries</h1>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Country">Country</a>
            <a href="/Contact">Contact</a>

        </div>
    );
};

export default Header;