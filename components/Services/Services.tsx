// Services.tsx
import styles from "./Services.module.css";
import Image from "next/image";

const serviceList = [
  {
    title: "Web Design",
    body: "Crafting responsive, user-centric interfaces that shine.",
    img: "/images/services-web.jpg",
  },
  {
    title: "Digital Marketing",
    body: "Driving growth with data-backed campaigns and stellar creatives.",
    img: "/images/services-dm.jpg",
  },
  {
    title: "Content Creation",
    body: "Telling your story through engaging copy and visuals.",
    img: "/images/services-content.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cards}>
        {serviceList.map((svc) => (
          <article key={svc.title} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                className={styles.img}
                priority
              />
            </div>
            <h3 className={styles.cardTitle}>{svc.title}</h3>
            <p className={styles.cardDesc}>{svc.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
