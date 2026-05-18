"use client"

import { useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function GsapAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      // ── Navigation: slide down ──────────────────────────────────────────
      gsap.from("nav", {
        y: -90,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
      })

      // ── Hero: sequential entrance ────────────────────────────────────────
      const heroTl = gsap.timeline({ delay: 0.25 })

      heroTl
        .from("#home h1", {
          y: 70,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          "#home p",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          "#home .hero-buttons",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          "#home .hero-image",
          {
            x: 80,
            opacity: 0,
            scale: 0.92,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.9"
        )

      // Hero image: subtle continuous float
      if (!reduceMotion) {
        gsap.to("#home .hero-image", {
          y: -14,
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        })
      }

      // ── Services: stagger cards up ───────────────────────────────────────
      gsap.from("#services .service-card", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 78%",
          once: true,
        },
        immediateRender: false,
        y: 90,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      })

      gsap.from("#services h2", {
        scrollTrigger: {
          trigger: "#services",
          start: "top 85%",
          once: true,
        },
        immediateRender: false,
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // ── About: slide from opposite sides ────────────────────────────────
      gsap.from("#about .about-image", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          once: true,
        },
        immediateRender: false,
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from("#about .about-text", {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
          once: true,
        },
        immediateRender: false,
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // ── Projects: stagger up ─────────────────────────────────────────────
      gsap.from("#projects h2", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 85%",
          once: true,
        },
        immediateRender: false,
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from("#projects .project-card", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          once: true,
        },
        immediateRender: false,
        y: 90,
        opacity: 0,
        duration: 0.85,
        stagger: 0.2,
        ease: "power3.out",
      })

      // ── Experience: stagger cards from bottom ────────────────────────────
      gsap.from("#experience .exp-sticky", {
        scrollTrigger: {
          trigger: "#experience",
          start: "top 80%",
          once: true,
        },
        immediateRender: false,
        x: -60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })

      gsap.from("#experience .experience-card", {
        scrollTrigger: {
          trigger: "#experience",
          start: "top 75%",
          once: true,
        },
        immediateRender: false,
        y: 70,
        opacity: 0,
        duration: 0.7,
        stagger: 0.13,
        ease: "power3.out",
      })

      // ── Testimonials: scale + fade ───────────────────────────────────────
      gsap.from(".testimonial-box", {
        scrollTrigger: {
          trigger: ".testimonial-box",
          start: "top 80%",
          once: true,
        },
        immediateRender: false,
        scale: 0.94,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })

      gsap.from(".testimonial-portrait", {
        scrollTrigger: {
          trigger: ".testimonial-box",
          start: "top 80%",
          once: true,
        },
        immediateRender: false,
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      })

      // ── Footer: fade up ──────────────────────────────────────────────────
      gsap.from("#contact .footer-cta", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
          once: true,
        },
        immediateRender: false,
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from("#contact .footer-col", {
        scrollTrigger: {
          trigger: "#contact .footer-col",
          start: "top 90%",
          once: true,
        },
        immediateRender: false,
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      })
    })

    const refreshOnLoad = () => ScrollTrigger.refresh()
    window.addEventListener("load", refreshOnLoad)
    ScrollTrigger.refresh()

    return () => {
      window.removeEventListener("load", refreshOnLoad)
      ctx.revert()
    }
  }, [])

  return null
}
