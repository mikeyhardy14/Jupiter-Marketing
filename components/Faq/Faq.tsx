// File: components/Faq/Faq.tsx
"use client"

import React, { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
  {
    question: 'What services does Jupiter Digital Marketing offer?',
    answer:
      'We specialize in web design, SEO, PPC advertising, content marketing, and social media management to help businesses grow online.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most clients begin seeing measurable improvements within 3–6 months, depending on strategy and competition.',
  },
  {
    question: 'What is your pricing structure?',
    answer:
      'We offer flexible packages based on project scope, with both monthly retainers and one-time project options to suit different budgets.',
  },
  // Add more FAQs as needed
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.faqItem} ${openIndex === idx ? styles.open : ''}`}
            onClick={() => toggleItem(idx)}
          >
            <div className={styles.questionBar}>
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon}>{openIndex === idx ? '−' : '+'}</span>
            </div>
            {openIndex === idx && <div className={styles.answer}>{item.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}