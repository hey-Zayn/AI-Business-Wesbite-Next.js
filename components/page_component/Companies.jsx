'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const container = useRef();

  const Logos = [
    { id: 1, src: './images/logos/acme1.png', alt: 'Company 1' },
    { id: 2, src: './images/logos/acme2.png', alt: 'Company 2' },
    { id: 3, src: './images/logos/acme3.png', alt: 'Company 3' },
    { id: 4, src: './images/logos/acme4.png', alt: 'Company 4' },
    { id: 5, src: './images/logos/acme3.png', alt: 'Company 5' },
    { id: 6, src: './images/logos/acme4.png', alt: 'Company 6' },
    { id: 7, src: './images/logos/acme1.png', alt: 'Company 7' },
    { id: 8, src: './images/logos/acme2.png', alt: 'Company 8' },
  ];

  useGSAP(() => {
    // Professional timeline with refined settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        markers: false
      },
      defaults: {
        ease: "power3.out"
      }
    });

    // Professional staggered animation for logos
    tl.fromTo('.logo-heading',
      {
        opacity: 0,
        y: 40,
        scale: 0.8,
        rotationY: -30
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: {
          amount: 1.5,
          grid: [2, 4], // 2 rows, 4 columns for better grid staggering
          from: "center" // Start from center and move outward
        },
        ease: "back.out(1.2)"
      }
    );
    
    tl.fromTo('.logo-item',
      {
        opacity: 0,
        y: 40,
        scale: 0.8,
        rotationY: -30
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: {
          amount: 1.5,
          grid: [2, 4], // 2 rows, 4 columns for better grid staggering
          from: "center" // Start from center and move outward
        },
        ease: "back.out(1.2)"
      }
    );

  }, { scope: container });

  return (
    <div ref={container} className='w-full h-full px-20 max-sm:px-10 py-[100px] max-sm:py-[50px] bg-black'>
      <div className='space-y-12'>
        <h1 className='logo-heading text-white/80 text-center text-xl font-medium'>
         Trusted by the world’s most innovative teams
        </h1>
        <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-2 gap-4'>
          {Logos.map(logo => (
            <div
              key={logo.id}
              className='logo-item border border-white/10 flex items-center justify-center py-8 px-8 rounded-xl backdrop-blur-sm opacity-0'
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className='max-w-[120px] max-h-[60px] object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies