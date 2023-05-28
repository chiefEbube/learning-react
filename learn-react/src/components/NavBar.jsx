import React from 'react';
import logo from '../assets/react-logo.png';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='logoContainer'>
                <img src={logo} alt="image" />
                <h3>ReactFacts</h3>
            </div>

            <h4>React Course - Project 1</h4>
        </div>
    )
}