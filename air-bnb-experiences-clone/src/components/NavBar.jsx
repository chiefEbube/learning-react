import React from 'react';
import logo from '../assets/images/airbnb-logo.png'

export default function NavBar() {
    return (
        <nav>
            <img src={logo} alt="" className='nav--logo'/>
        </nav>
    )
}