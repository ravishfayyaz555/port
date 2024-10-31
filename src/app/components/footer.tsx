import styles from '../styles/Footer.module.css'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Areeba Sadiq. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
