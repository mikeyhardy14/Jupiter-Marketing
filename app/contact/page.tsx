/**
 * Contact – Jupiter Marketing
 * Full‑screen gradient, glowing headline, centred contact form.
 */
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact · Jupiter Marketing",
  description: "Start a project with Jupiter Marketing.",
};

export default function ContactPage() {
  return (
    <main className={styles.screen}>
      <h1 className={styles.hero}>Let’s Start A Project</h1>

      <section className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <ContactForm />
      </section>
    </main>
  );
}
