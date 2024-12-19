"use client";
import styles from '../styles/Contact.module.css';


const ContactSection: React.FC = () => {
 return (
 <div className={styles.contactSection}>
 <div className={styles.container}>
 <h2 className={styles.heading}>Contact Us</h2>
 <p className={styles.description}>
 Have questions or feedback? We'd love to hear from you. Fill out the form below!
 </p>
 <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
 <div className={styles.formGroup}>
 <label htmlFor="name">Name</label>
 <input
 type="text"
 id="name"
 className={styles.input}
 placeholder="Your Name"
 />
 </div>
 <div className={styles.formGroup}>
 <label htmlFor="email">Email</label>
 <input
 type="email"
 id="email"
 className={styles.input}
 placeholder="Your Email"
 />
 </div>
 <div className={styles.formGroup}>
 <label htmlFor="message">Message</label>
 <textarea
 id="message"
 rows={4}
 className={styles.textarea}
 placeholder="Your Message"
 ></textarea>
 </div>
 <button type="submit" className={styles.button}>
 Send Message
 </button>
 </form>
 </div>
 </div>
 );
};

export default ContactSection;
