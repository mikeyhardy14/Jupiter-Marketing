import styles from './Process.module.css';
import Link from 'next/link';
import { Compass, LayoutGrid, PlayCircle, BarChart } from 'lucide-react';

const processList = [
  { title: 'Discovery', icon: <Compass size={32} /> },
  { title: 'Strategic Planning', icon: <LayoutGrid size={32} /> },
  { title: 'Execution', icon: <PlayCircle size={32} /> },
  { title: 'Measurement', icon: <BarChart size={32} /> },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <div className={styles.planets}>
        {processList.map(({ title, icon }, idx) => (
          <div
            key={title}
            className={`${styles.card} ${idx % 2 === 1 ? styles.offset : ''}`}
          >
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.cardTitle}>{title}</h3>
          </div>
        ))}
      </div>
      <div className={styles.about}>
        <h2 className={styles.heading}>About Us</h2>
        <p className={styles.text}>
          At Jupiter Marketing Agency, we pride ourselves on being an experienced, reliable, and honest digital marketing company that has produced tangible results for businesses across the United States. Our expertise extends to designing and executing custom digital marketing plans for top lawyers, doctors, dentists, and other service-based businesses, helping them enhance their online presence and achieve their marketing goals.
          <br /><br />
          As a result-driven agency, we don’t just talk—we deliver. Our commitment to excellence and our dedication to our clients’ success have earned us a reputation as a trusted partner for businesses looking to elevate their digital marketing strategies. With a focus on innovative and personalized solutions, we work closely with each of our clients to create and implement marketing plans that align with their unique needs and objectives.
          <br /><br />
          At Jupiter Marketing Agency, we are passionate about helping our clients grow and thrive in the digital world. If you are seeking a digital agency that delivers results and is invested in your success, contact us today to get a free proposal and embark on a transformative journey with us.
        </p>
        <Link href="/contact" className={styles.button}>
          Explore More
        </Link>
      </div>
    </section>
  );
}