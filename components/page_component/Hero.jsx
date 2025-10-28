'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Badge_M from '../ui/Badge_M'
import Circles from '../ui/Circles'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const hero_container = useRef();
    const hero_h1 = useRef();
    const hero_p = useRef();
    const hero_button = useRef();
    const hero_img = useRef();
    const hero_badge = useRef();

   useGSAP(() => {
    // Optimized timeline with smoother settings
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: hero_container.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none",
            markers: false
        },
        defaults: {
            ease: "power2.out"
        }
    });

    // Smoother badge animation
    tl.fromTo(hero_badge.current,
        {
            opacity: 0,
            // y: 30,
            scale: 0.9,
            filter: "blur(8px)"
        },
        {
            opacity: 1,
            // y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "back.out(1.5)",
            clearProps: "filter"
        }
    )
    // Smoother heading animation
    .fromTo(hero_h1.current,
        {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out"
        },
        "-=0.3"
    )
    // Smoother paragraph animation
    .fromTo(hero_p.current,
        {
            opacity: 0,
            y: 40,
            scale: 0.98
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power2.out"
        },
        "-=0.5"
    )
    // Smoother button animation
    .fromTo(hero_button.current,
        {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
        },
        "-=0.4"
    )
    // Smoother image animation
    .fromTo(hero_img.current,
        {
            opacity: 0,
            y: 60,
            scale: 0.98
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            onStart: function() {
                
                gsap.to(hero_img.current, {
                    // y: -0,
                    // duration: 3,
                    // ease: "sine.inOut",
                    // yoyo: true,
                    // repeat: -1,
                    // repeatDelay: 0.5
                });
            }
        },
        "-=0.2"
    );

    // Smoother continuous animations
    const continuousTl = gsap.timeline({ 
        repeat: -1, 
        yoyo: true,
        defaults: {
            ease: "sine.inOut"
        }
    });

    // Subtle continuous animations
    continuousTl.to(hero_badge.current, {
        y: -0,
        duration: 3,
        ease: "sine.inOut"
    }, 0)
    .to(hero_h1.current.querySelector('span'), {
        backgroundPosition: "0% -50%",
        duration: 4,
        ease: "none"
    }, 0)
    .to(hero_button.current, {
        rotationY: 1,
        duration: 3,
        ease: "sine.inOut"
    }, 0);

}, { scope: hero_container });


    return (
        <div ref={hero_container} className='bg-black w-full h-full max-sm:h-screen overflow-hidden relative'>
            <div className='px-20 max-sm:px-6 pt-30 space-y-6'>
                <div className='w-full flex justify-center items-center'>
                    <div ref={hero_badge} className='rounded-full'>
                        <Badge_M />
                    </div>
                </div>

                <div className='w-full text-center space-y-6 mb-10 z-50 relative '>
                    <h1 ref={hero_h1} className='text-8xl max-md:text-6xl max-sm:text-4xl leading-22 max-md:leading-14 max-sm:leading-9'>
                        Boost your <br />
                        <span className="bg-gradient-to-b from-white to-purple-600 bg-clip-text text-transparent">
                            rankings with AI.
                        </span>
                    </h1>

                    <p ref={hero_p} className='text-2xl max-md:text-lg max-sm:text-sm text-white/70'>
                        Elevate your sites visibility effortlessly with AI, where <br />
                        smart technology meets user-friendly SEO tools.
                    </p>

                    <button ref={hero_button} className='px-2 py-4 border border-white/20 rounded-xl transition-all duration-500 group hover:border-white/30'>
                        <span className='px-6 py-3 bg-white/80 max-sm:bg-white text-black rounded-lg cursor-pointer group-hover:bg-white transition-all duration-1000'>
                            Start for free
                        </span>
                    </button>
                </div>

                <div className='relative w-full flex justify-center items-center z-10'>
                    <div ref={hero_img} className='max-sm:w-full border border-white/20 bg-[rgba(0,0,0,0.2)] p-2 rounded-2xl shadow-[0px_20px_200px_22px_rgba(108,49,183,0.9)]'>
                        <img src="./images/App.png" alt="App preview" className='w-full' />
                    </div>
                </div>

                {/* Circles */}
                <div className='absolute top-40 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
                    <Circles />
                </div>
            </div>

            <div className='absolute bottom-0 left-0 w-full z-20'>
                <img src="./images/Black_Shade.png" alt="Background shade" className='w-full' />
            </div>
        </div>
    )
}

export default Hero