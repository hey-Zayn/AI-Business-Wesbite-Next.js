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
        // Create a master timeline with enhanced settings
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: hero_container.current,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                markers: false
            },
            defaults: {
                ease: "power3.out"
            }
        });

        // Enhanced badge animation with glow effect
        tl.fromTo(hero_badge.current,
            {
                opacity: 0,
                // y: 50,
                scale: 0.6,
                rotationX: -90,
                filter: "blur(10px)"
            },
            {
                opacity: 1,
                // y: 0,
                scale: 1,
                rotationX: 0,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "back.out(2)",
                onComplete: function () {
                    // Add pulsing glow effect after badge appears
                    gsap.to(hero_badge.current, {
                        boxShadow: "0 0 20px rgba(152, 85, 255, 0.6)",
                        duration: 0.8,
                        yoyo: true,
                        repeat: 1,
                        ease: "power2.inOut"
                    });
                }
            }
        )
            // Heading with character-like stagger and glow
            .fromTo(hero_h1.current,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    filter: "blur(100px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.4,
                    ease: "expo.out",
                    onStart: function () {
                        // Add text shadow glow
                        gsap.to(hero_h1.current, {
                            textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                            duration: 1,
                            yoyo: true,
                            repeat: 1,
                            ease: "power2.inOut"
                        });
                    }
                },
                "-=0.5"
            )
            // Paragraph with typewriter effect simulation
            .fromTo(hero_p.current,
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9,
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1.6,
                    ease: "power2.inOut"
                },
                "-=0.8"
            )
            // Button with magnetic hover preparation and bounce
            .fromTo(hero_button.current,
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.5,
                    rotationY: 180,
                    transformOrigin: "center center"
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 1.1,
                    ease: "elastic.out(1.2, 0.5)",
                    onComplete: function () {
                        // Prepare button for hover effects
                        gsap.set(hero_button.current, {
                            transformPerspective: 1000
                        });
                    }
                },
                "-=0.6"
            )
            // Main image with parallax and glow effects
            .fromTo(hero_img.current,
                {
                    opacity: 0,
                    y: 10,
                    scale: 0.7,
                    rotationY: 30,
                    filter: "blur(20px) brightness(1.5)",
                    transformOrigin: "center bottom"
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    filter: "blur(0px) brightness(1)",
                    duration: 1.8,
                    ease: "power4.out",
                    onStart: function () {
                        // Add floating animation to the image container
                        gsap.to(hero_img.current, {
                            y: -10,
                            duration: 2,
                            ease: "power1.inOut",
                            yoyo: true,
                            repeat: -1
                        });
                    }
                },
                "-=0.4"
            )
            // Final flourish - animate all elements together for a polished finish
            .to([hero_badge.current, hero_h1.current, hero_p.current, hero_button.current, hero_img.current], {
                scale: 1.02,
                duration: 0.3,
                stagger: 0.1,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            }, "-=0.5");

        // Add continuous subtle animations
        const continuousTl = gsap.timeline({ repeat: -1, yoyo: true });

        // Subtle badge pulse
        continuousTl.to(hero_badge.current, {
            y: -0,
            duration: 2,
            ease: "sine.inOut"
        })
            .to(hero_h1.current.querySelector('span'), {
                backgroundPosition: "0% -100%",
                duration: 3,
                ease: "none"
            }, 0)
            .to(hero_button.current, {
                rotationY: 2,
                duration: 2,
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

                <div className='w-full text-center space-y-6 mb-10 z-50 relative'>
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