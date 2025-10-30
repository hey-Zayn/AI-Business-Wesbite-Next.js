'use client'
import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const container = useRef();
    const ClientHeading = useRef();
    const ClientP = useRef();
    const ClientImage = useRef();
    const LiveV1 = useRef();
    const LiveV2 = useRef();
    const LiveH1 = useRef();
    const LiveH2 = useRef();
    const testimonial = useRef();
    const testimonialname = useRef();
    const testimonialp = useRef();

    const clients = [
        {
            clientImage: "./images/Avatar.png",
            clientTestimonial: "”This platform revolutionized our project management. We've reduced delivery times by 35% while improving team collaboration across all departments.”",
            clientName: "Maya Angelou",
            clientPosition: "Digital Marketing Director @ Quantum Solutions"
        },
        {
            clientImage: "./images/Avatar2.png",
            clientTestimonial: "”The AI-driven insights have been transformative. We identified $2.3M in operational efficiencies within the first quarter of implementation.”",
            clientName: "Mei Ling Chen",
            clientPosition: "Chief Technology Officer @ Nexus Innovations"
        },
        {
            clientImage: "./images/Avatar3.png",
            clientTestimonial: "”Exceptional platform with even better support. The dedicated success team helped us customize workflows that increased productivity by 47%.”",
            clientName: "Alex Johnson",
            clientPosition: "Head of Product @ GrowthLabs International"
        },
        {
            clientImage: "./images/Avatar4.png",
            clientTestimonial: "”We achieved 300% ROI in six months. The automation features alone saved us 120+ hours monthly in manual reporting and analysis.”",
            clientName: "Amara Rivera",
            clientPosition: "Director of Operations @ ScaleFast Technologies"
        },
        {
            clientImage: "./images/Avatar5.png",
            clientTestimonial: "”Game-changing analytics that transformed our decision-making process. Customer satisfaction scores increased by 28 points post-implementation.”",
            clientName: "Olivia Bennett",
            clientPosition: "VP of Customer Experience @ Elevate Digital"
        }
    ];

    // Smooth auto-slide function
    const slideToNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(slideToNext, 5000);
        return () => clearInterval(interval);
    }, [clients.length, isAnimating]);

    // Smooth testimonial transition animation
    useGSAP(() => {
        if (isAnimating) {
            const tl = gsap.timeline({
                onComplete: () => setIsAnimating(false)
            });

            // Smooth fade out with subtle scale
            tl.to([ClientImage.current, testimonial.current, testimonialname.current, testimonialp.current], {
                opacity: 0,
                y:10,
                scale: 0.98,
                duration: 0.6,
                ease: "power2.inOut",
                stagger: 0.08
            })
            // Smooth fade in with gentle scale
            .to([ClientImage.current, testimonial.current, testimonialname.current, testimonialp.current], {
                opacity: 1,
                y:0,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
                stagger: 0.1
            }, "-=0.2"); // Small overlap for seamless transition

        }
    }, { dependencies: [currentIndex, isAnimating], scope: container });

    // Scroll-triggered entrance animation (unchanged)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                markers: false
            },
            defaults: {
                ease: "power2.out"
            }
        });

        // Sequential animation with proper chaining
        tl.fromTo(ClientHeading.current,
            {
                y: 50,
                scale: 0.8,
                opacity: 0,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8
            }
        )
            .fromTo(ClientP.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8
                },
                "-=0.4"
            )
            .fromTo(LiveV1.current,
                {
                    y: -100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                },
                "-=0.3"
            )
            .fromTo(LiveH1.current,
                {
                    x: -100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6
                },
                "-=0.3"
            )
            .fromTo(LiveV2.current,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                },
                "-=0.3"
            )
            .fromTo(LiveH2.current,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6
                },
                "-=0.3"
            )
            .fromTo([ClientImage.current, testimonial.current, testimonialname.current, testimonialp.current],
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.0,
                    stagger: 0.1
                },
                "-=0.4"
            );

    }, { scope: container });

    const currentClient = clients[currentIndex];

    return (
        <div ref={container} className='w-full h-full bg-black px-20  max-sm:px-10 pt-[100px] pb-[200px] overflow-hidden'>
            <div className='relative w-full h-full'>
                <img ref={LiveH1} src="./images/LineH.png" alt="" className='absolute top-[42%] max-sm:top-[25%]' />
                <img ref={LiveH2} src="./images/LineH.png" alt="" className='absolute -bottom-4 max-sm:bottom-[35%]' />

                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 ref={ClientHeading} className='text-6xl max-sm:text-4xl'>Our Clients</h1>
                    <p ref={ClientP} className='text-lg text-white/70 text-center'>
                        Hear firsthand how our solutions have <br /> boosted online success for users like you.
                    </p>
                </div>

                <div className='flex justify-center items-center gap-15 mt-20 max-sm:flex-col max-sm:gap-8'>
                    <div className='relative '>
                        <img
                            ref={ClientImage}
                            src={currentClient.clientImage}
                            alt={currentClient.clientName}
                            className='rounded-2xl shadow-[0px_0px_150px_1px_rgba(108,49,183,0.9)] w-64 h-64 object-cover'
                        />
                        <img ref={LiveV1} src="./images/LineV.png" alt="" className='absolute -top-20 -left-4' />
                        <img ref={LiveV2} src="./images/LineV.png" alt="" className='absolute -top-20 -right-4' />
                    </div>

                    <div className='w-[339px] max-sm:w-full space-y-4 max-sm:p-5 '>
                        <h1 ref={testimonial} className='text-xl font-semibold'>
                            {currentClient.clientTestimonial}
                        </h1>
                        <div>
                            <h4 ref={testimonialname} className='text-md font-bold text-white/70'>
                                {currentClient.clientName}
                            </h4>
                            <p ref={testimonialp} className='text-xs text-white/70'>
                                {currentClient.clientPosition}
                            </p>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Clients