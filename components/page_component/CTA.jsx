'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const CTA = () => {

    const container = useRef();
    const CTA = useRef();
    const CTAImage = useRef();
    const CTAH1 = useRef();
    const CTAINput = useRef();
    const input = useRef();
    const CTAButton = useRef();
    const CTAtext= useRef();
    

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
        tl.fromTo(CTA.current,
            {
                y: 100,
                scale: 0.8,
                opacity: 0,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2
            }
            )
        tl.fromTo(CTAImage.current,
            {
                y: -500,
                scale: 0.8,
                opacity: 0,
            },
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2
            }
            )
            .fromTo(CTAH1.current,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.0
                },
                "-=0.6" // Overlap with previous animation
            )
             .fromTo(CTAINput.current,
                {
                    // y: 50,
                    opacity: 0,
                },
                {
                    // y: 0,
                    opacity: 1,
                    duration: 1.0
                },
                "-=0.6" // Overlap with previous animation
            )
             .fromTo(CTAtext.current,
                {
                    // y: 50,
                    opacity: 0,
                },
                {
                    // y: 0,
                    opacity: 1,
                    duration: 1.0
                },
                "-=0.6" // Overlap with previous animation
            )
             
           
           
           

    }, { scope: container });
    return (
        <div ref={container} className='w-full h-full bg-black'>
            <div className='p-10 max-sm:p-0'>
                <div
                    ref={CTA}
                    className='relative w-full h-[600px] max-sm:h-full px-20 max-sm:px-10 py-[100px] max-sm:py-15 border border-white/20 rounded-xl overflow-hidden'
                    style={{
                        backgroundImage: `url('./images/CTA.png')`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundColor: 'black'
                    }}
                >
                    <img ref={CTAImage} src="./images/CTA-circle.png" alt="" className=' absolute top-0 max-sm:left-2 max-sm:w-full' />
                    <div className='relative w-full h-full flex flex-col justify-center items-center   text-center z-10 space-y-4'>
                        <h1 ref={CTAH1} className='text-7xl max-sm:text-3xl'>
                            AI-driven SEO <br /> for everyone.
                        </h1>
                        <div className='flex'>
                            <div ref={CTAINput} className='max-sm:flex-col px-1 max-sm:p-2  border border-white/20 max-sm:border-none rounded-xl'>
                                <input ref={input} type="text" className=' px-4 py-4 outline-non max-sm:border max-sm:rounded-xl max-sm:border-white/20 max-sm:px-8 max-sm:py-3 max-sm:mb-2' placeholder='Your email' />
                                <button ref={CTAButton} className='max-sm:w-full bg-white text-black  text-xl max-sm:text-sm px-4 py-2  max-sm:px-2 max-sm:py-2 rounded-xl'>Join me</button>
                            </div>
                        </div>
                        <div ref={CTAtext} className='flex max-sm:flex-col gap-2'>
                            <h1 className='text-sm max-sm:text-xs  text-white/50'>No credit card required</h1>
                            <h1 className='text-sm max-sm:hidden text-white/50'>·</h1>
                            <h1 className='text-sm max-sm:text-xs text-white/50'>7-days free trial</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA