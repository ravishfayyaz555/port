import React from 'react';
import styles from '../styles/HomeSection.module.css';
import Link from 'next/link';


const HomeSection: React.FC = () => {
    return (
        <section id="home" className={styles.homeContainer}>
            <div className={styles.content}>
                <h1 className={styles.name}>Hi 👋I am Areeba</h1>  
                <h2 className={styles.title}>Frontend Developer</h2> 
                <Link href="#contact">
        <button className={styles.button}>Hire Me</button>
      </Link>
            </div>
        </section>
    );
};

export default HomeSection;
