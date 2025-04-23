import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image src="/images/logo.png" alt="Logo" width={150} height={100} />
          <span>© {new Date().getFullYear()} Jupiter Marketing</span>
        </div>
        <nav className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/#services" className={styles.link}>Services</Link>
          <Link href="/#about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
      </div>
    </footer>
  );
}