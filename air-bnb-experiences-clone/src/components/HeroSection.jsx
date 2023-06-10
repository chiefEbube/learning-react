import React from 'react';
import photoGrid from '../assets/images/photo-grid.png'

export default function HeroSection() {
    return (
        <section className='hero--section'>
            <img src={photoGrid} alt="" className="hero--photo"/>

            <h1 className='hero-header'>
                Online Experiences
            </h1>

            <p className='hero--text'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}