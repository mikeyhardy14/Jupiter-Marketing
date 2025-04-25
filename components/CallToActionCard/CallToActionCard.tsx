// CallToActionCard.tsx
import Link from 'next/link';
import styles from './CallToActionCard.module.css';

export default function CallToActionCard() {
  return (
    <section className={styles.faqSection}>
    <div className={styles.card}>
      <div className={styles.textContainer}>
        <h3 className={styles.header}>Start Growing Your Business Today</h3>
        <p className={styles.subheader}>
          Contact us today to work with a reliable and experienced digital marketing agency.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/contact" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </div>
    </section>
  );
}
