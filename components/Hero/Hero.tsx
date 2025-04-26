"use client"
import styles from "./Hero.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let stars: { x: number; y: number; size: number; speed: number }[] = [];
    let shootingStars: { x: number; y: number; len: number; speed: number; life: number }[] = [];
    const numStars = 200;
    const maxShooting = 3;

    function initStars() {
      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.05 + 0.02,
      }));
    }

    function addShootingStar() {
      if (shootingStars.length < maxShooting && Math.random() < 0.01) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: 0,
          len: Math.random() * 80 + 100,
          speed: Math.random() * 10 + 6,
          life: 0,
        });
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }
    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw stars
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
      });

      // draw shooting stars
      addShootingStar();
      shootingStars.forEach((shoot, idx) => {
        shoot.x += shoot.speed;
        shoot.y += shoot.speed;
        shoot.life += 1;
        ctx.beginPath();
        ctx.moveTo(shoot.x, shoot.y);
        ctx.lineTo(shoot.x - shoot.len, shoot.y - shoot.len);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();
        if (shoot.life > 30) shootingStars.splice(idx, 1);
      });

      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Jupiter Marketing</h1>
        <p className={styles.subtitle}>Taking your ideas to new heights</p>
        <Link href="/contact" className={styles.cta}>
          GET IN TOUCH
        </Link>
      </div>
    </section>
  );
}