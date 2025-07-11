"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface Particle {
  id: number;
  top: number;
  left: number;
}

const images = ["/prod1.png", "/prod2.png", "/prod3.png"];

export default function PowerBtn() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isOn, setIsOn] = useState(false);
  const [randomImg, setRandomImg] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const generateParticles = () => {
    const container = containerRef.current?.getBoundingClientRect();
    if (!container) return [];

    return Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      top: Math.random() * container.height,
      left: Math.random() * container.width,
    }));
  };

  useEffect(() => {
    // Delay generation to ensure layout is ready
    const timeout = setTimeout(() => {
      setParticles(generateParticles());
    }, 0);

    // Pick random image on first load
    setRandomImg(images[Math.floor(Math.random() * images.length)]);

    return () => clearTimeout(timeout);
  }, []);

  const animateParticles = () => {
    if (isOn) return; // prevent repeated clicks

    setIsOn(true); // Show ВКЛ

    const button = buttonRef.current?.getBoundingClientRect();
    const container = containerRef.current?.getBoundingClientRect();
    if (!button || !container) return;

    const centerX = button.left + button.width / 2;
    const centerY = button.top + button.height / 2;

    const particleElems = document.querySelectorAll(".particle");
    particleElems.forEach((particle, i) => {
      const rect = particle.getBoundingClientRect();
      const dx = centerX - rect.left;
      const dy = centerY - rect.top;

      setTimeout(() => {
        let start: number | null = null;
        const duration = 1000;

        const animate = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);

          const x = dx * progress;
          const y = dy * progress;
          const scale = 1 - progress;
          const opacity = 1 - progress;

          const elem = particle as HTMLDivElement;
          elem.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
          elem.style.opacity = `${opacity}`;

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }, i * 100);
    });

    // Reset after 4 seconds
    setTimeout(() => {
      setIsOn(false);
      setParticles(generateParticles());
    }, 4000);
  };

  return (
    <div
      ref={containerRef}
      className="h-[450px] w-full bg-[linear-gradient(135deg,#0F969C0D,#31708E0D)] shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex items-center justify-center relative overflow-hidden"
    >
      {/* Dust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute w-2 h-2 bg-gray-500 rounded-full pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            transform: "translate(0, 0) scale(1)",
            opacity: 1,
          }}
        />
      ))}

      {/* Card with Button */}
      {/* 
      <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 z-10">
        <div className="bg-gray-200 text-gray-600 text-lg font-medium px-4 py-2 rounded">
          {isOn ? "ВКЛ" : "ВЫКЛ"}
        </div>
        <button
          ref={buttonRef}
          onClick={animateParticles}
          className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg"
        >
          <Power size={20} />
        </button>
      </div>
      */}

      <button
        ref={buttonRef}
        onClick={animateParticles}
        className="text-white p-4 rounded-full bg-white z-10 shadow-lg"
      >
        {randomImg && (
          <Image
            src={randomImg}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-24 h-22 object-contain"
          />
        )}
      </button>
    </div>
  );
}
