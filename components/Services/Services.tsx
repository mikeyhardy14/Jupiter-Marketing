import styles from "./Services.module.css";
import Image from "next/image";

const serviceList = [
  {
    title: "Web Design",
    body: "Body text for whatever you’d like to add more to the subheading.",
    img: "/images/services-web.jpg",
  },
  {
    title: "Digital Marketing",
    body: "Body text for whatever you’d like to expand on the main point.",
    img: "/images/services-dm.jpg",
  },
  {
    title: "Content Creation",
    body: "Body text for whatever you’d like to share more.",
    img: "/images/services-content.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>

      <div className={styles.cards}>
        {serviceList.map((svc) => (
          <article key={svc.title} className={styles.card}>
            <div className={styles.imgWrap}>
              <Image src={svc.img} alt={svc.title} fill className={styles.img} />
            </div>
            <h3>{svc.title}</h3>
            <p>{svc.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}