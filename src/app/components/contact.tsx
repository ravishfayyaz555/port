import styles from '../styles/Contact.module.css';

const ContactForm = () => {
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.animatedCircle}>
          {[...Array(50)].map((_, i) => (
            <span
              key={i}
              className={styles.blinkSpan} 
              style={{ '--i': i } as React.CSSProperties}
            ></span>
          ))}
        </div>

        <div className={styles.loginBox}>
          <h2 className={styles.heading}>Contact Now!</h2>
          <form>
            <div className={styles.inputBox}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.inputBox}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.inputBox}>
              <textarea placeholder="Your Message" required rows={4}></textarea>
            </div>
            <button type="submit" className={styles.btn}>Contact Me</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
