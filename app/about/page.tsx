// File: app/about/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.text}>
          At Jupiter Marketing Agency, we pride ourselves on being an experienced, reliable, and honest digital marketing company that has produced tangible results for businesses across the United States. Our expertise extends to designing and executing custom digital marketing plans for top lawyers, doctors, dentists, and other service-based businesses, helping them enhance their online presence and achieve their marketing goals.
        </p>
        <p className={styles.text}>
          As a result-driven agency, we don’t just talk—we deliver. Our commitment to excellence and our dedication to our clients’ success have earned us a reputation as a trusted partner for businesses looking to elevate their digital marketing strategies. With a focus on innovative and personalized solutions, we work closely with each of our clients to create and implement marketing plans that align with their unique needs and objectives.
        </p>
        <p className={styles.text}>
          At Jupiter Marketing Agency, we are passionate about helping our clients grow and thrive in the digital world. If you are seeking a digital agency that delivers results and is committed to your success, you’ve come to the right place.
        </p>
        <Link href="/contact" className={styles.button}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}