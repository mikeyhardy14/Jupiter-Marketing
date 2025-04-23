"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const emailRE = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRE = /^\+?[0-9\-()\s]{7,20}$/;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (!emailRE.test(form.get("email") as string)) {
      alert("Please enter a valid e‑mail address.");
      return;
    }
    if (form.get("phone") && !phoneRE.test(form.get("phone") as string)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setStatus("sending");

    const res = await fetch("/api/contact", { method: "POST", body: form });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  /* ---------- JSX ---------- */
  return (
    <div className={styles.card}>
      {/* the “card” wrapper gives us the nice shadow / radius */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>

        <label>
          Surname
          <input name="surname" type="text" required />
        </label>

        <label>
          Email
          <input name="email" type="email" required />
        </label>

        <label className={styles.message}>
          Message
          <textarea name="message" rows={5} required />
        </label>

        <button disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Submit"}
        </button>

        {status === "sent" && <p className={styles.ok}>✓ Message sent!</p>}
        {status === "error" && (
          <p className={styles.error}>Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}
