'use client'
import React, { useEffect, useState } from 'react';
import styles from '../styles/HomeSection.module.css';
import Link from 'next/link';

const HomeSection: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const textToType = "Frontend Developer";
    const typingSpeed = 100;

    useEffect(() => {
        setDisplayedText(''); 
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < textToType.length) {
                setDisplayedText((prev) => prev + textToType.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []); 

    return (
        <section id="home" className={styles.homeContainer}>
            <div className={styles.content}>
                <h1 className={styles.name}>Hi 👋 I am Ravish</h1>  
                <h2 className={styles.title}>{displayedText}</h2> 
                <Link href="#contact">
                    <button className={styles.button}>Hire Me</button>
                </Link>
            </div>
        </section>
    );
};

export default HomeSection;
