'use client';
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Badge_M = () => {
    const Badge_container = useRef();

    useGSAP(() => {
        // Create a timeline with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: Badge_container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                markers: false
            }
        });

        // Add proper animation with "to" or "fromTo" properties
        tl.from('.badge', {
            opacity: 0,
            scale: 0.8,
            y: 50,
            duration: 1,
            ease: "back.out(1.7)"
        });

    }, { scope: Badge_container });

    return (
        <div ref={Badge_container} className='flex justify-center items-center'>
            <div className='badge px-2 py-2 text-purple-500 bg-black rounded-full border border-purple-200/20 cursor-pointer'>
                <span className='bg-[#9855ff] text-black py-1 px-2 rounded-full'>new</span> Latest integrations just arrived
            </div>
        </div>
    )
}

export default Badge_M