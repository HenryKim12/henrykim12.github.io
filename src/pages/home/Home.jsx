import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import Blob from "../../components/Blob";
import MarqueeTicker from "../../components/MarqueeTicker/MarqueeTicker";
import "./Home.css";

const MARQUEE_ITEMS = [
  "SOFTWARE ENGINEER",
  "SYSTEMS PROGRAMMER",
  "TEACHING ASSISTANT",
];

function splitChars(word) {
  return word.split("").map((char, i) => (
    <span key={i} className="hero-char">
      {char}
    </span>
  ));
}

function Home() {
  const navigate = useNavigate();
  const henryRef = useRef(null);
  const kimRef = useRef(null);
  const subRef = useRef(null);
  const scrollRef = useRef(null);
  const blobWrapRef = useRef(null);
  const marqueeRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const henryChars = henryRef.current.querySelectorAll(".hero-char");
    const kimChars = kimRef.current.querySelectorAll(".hero-char");

    gsap.set([henryChars, kimChars], { y: 110, opacity: 0 });
    gsap.set([subRef.current, scrollRef.current, lineRef.current], {
      opacity: 0,
      y: 16,
    });
    gsap.set(blobWrapRef.current, { opacity: 0, scale: 0.9, y: 24 });
    gsap.set(marqueeRef.current, { opacity: 0 });

    const isMobile = window.innerWidth <= 768

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(henryChars, {
      y: 0,
      opacity: 1,
      stagger: 0.038,
      duration: 0.72,
      ease: "power4.out",
    })
      .to(
        kimChars,
        {
          y: 0,
          opacity: 1,
          stagger: 0.038,
          duration: 0.72,
          ease: "power4.out",
        },
        "-=0.5",
      )
      .to(
        lineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        subRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.25",
      )
      .to(
        blobWrapRef.current,
        {
          opacity: isMobile ? 0.18 : 1,
          scale: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
        },
        "-=0.75",
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      )
      .to(
        marqueeRef.current,
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.2",
      );

    const onMove = (e) => {
      if (window.innerWidth <= 768) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      gsap.to(blobWrapRef.current, { x, y, duration: 0.9, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="hero-layout">
        <div className="hero-left">
          <div className="hero-name">
            <div className="hero-word-wrap">
              <h1 className="hero-henry" ref={henryRef}>
                {splitChars("HENRY")}
              </h1>
            </div>
            <div className="hero-word-wrap">
              <h1 className="hero-kim" ref={kimRef}>
                {splitChars("KIM")}
              </h1>
            </div>
          </div>

          <div className="hero-divider" ref={lineRef} />

          <p className="hero-sub" ref={subRef}>
            Software Engineer&emsp;·&emsp;Vancouver, BC
          </p>

          <button
            className="hero-scroll"
            ref={scrollRef}
            onClick={() => navigate("/experience")}
          >
            <span className="scroll-label">explore</span>
            <span className="scroll-arrow">↓</span>
          </button>
        </div>

        <div className="hero-right">
          <div className="blob-wrap" ref={blobWrapRef}>
            <div className="blob-glow" />
            <Canvas
              camera={{ position: [0.0, 0.0, 8.0] }}
              style={{ width: "100%", height: "100%" }}
            >
              <Blob />
            </Canvas>
          </div>
        </div>
      </div>

      <div ref={marqueeRef}>
        <MarqueeTicker items={MARQUEE_ITEMS} />
      </div>
    </div>
  );
}

export default Home;
