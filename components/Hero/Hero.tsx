import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Planet Jupiter background */}
      <Image
        src="/images/jupiter-bm.jpg"
        alt="Giant planet Jupiter"
        fill
        priority
        className={styles.planet}
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Jupiter Marketing</h1>
        <p className={styles.subtitle}>Taking your ideas to new heights</p>
        <Link href="/contact" className={styles.cta}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}