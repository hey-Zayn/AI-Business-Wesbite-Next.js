'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Circles = () => {
    const container = useRef();
    
    useGSAP(() => {
        // Create a timeline with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%", // When top of element hits 80% of viewport
                end: "bottom 20%", // When bottom of element hits 20% of viewport
                toggleActions: "play none none reverse", // Play on enter, reverse on leave
                markers: false // Set to true for debugging
            }
        });

        // Animate images one by one with staggered effects
        tl.fromTo('.circle-img', 
            { 
                opacity: 0, 
                scale: 0.8,
                rotation: -180 
            },
            { 
                opacity: 1, 
                scale: 1,
                rotation: 0,
                duration: 1.2,
                stagger: 0.3, // 0.3 seconds between each image
                ease: "back.out(1.7)"
            }
        );

    }, { scope: container });

    return (
        <div ref={container} className='w-full h-screen flex justify-center items-center relative z-10 bg-transparent animate-spin-slower'>
            <div className='relative w-full h-full'>
                {/* First image */}
                <img
                    src="./images/Circles/Circle3.png"
                    alt="Circle 3"
                    className='circle-img absolute top-[50%] left-[50%]  w-[35%]  opacity-0'
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />

                {/* Second image */}
                <img
                    src="./images/Circles/Circle4.png"
                    alt="Circle 4"
                    className='circle-img absolute top-[50%] left-[50%] w-[50%] opacity-0'
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />

                {/* Third image */}
                <img
                    src="./images/Circles/Circle5.png"
                    alt="Circle 5"
                    className='circle-img absolute top-[50%] left-[50%] w-[70%] opacity-0'
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />

                {/* Small Circle */}
                <img
                    src="./images/Circles/smaller_circle.png"
                    alt="Small Circle"
                    className='circle-img absolute top-[20%] max-sm:top-[40%] left-1/4 max-sm:left-[60%] opacity-0'
                    style={{
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            </div>
        </div>
    )
}

export default Circles