'use client';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Areeba...</div>
        
        {/* Toggle button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navigation menu */}
        <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
