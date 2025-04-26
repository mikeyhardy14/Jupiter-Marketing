// app/components/Contact/Contact.tsx
import heroStyles from '../../components/Hero/Hero.module.css';  // for .title & .subtitle :contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1}
import styles from './page.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h1 className={heroStyles.title}>Contact Us</h1>
      <p className={heroStyles.subtitle}>
        Feel free to reach out (We accept texts too!):
      </p>
      <div className={styles.info}>
        <a href="tel:+11234567890" className={styles.link}>
          +1 (540) 431-0934
        </a>
        <a href="mailto:info@jupitermarketing.com" className={styles.link}>
          info@jupitermarketing.com
        </a>
      </div>
    </section>
  );
}
