'use client'
import { Check } from 'lucide-react'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {
    const container = useRef();
    const PrcingH1 = useRef();
    const Prcingp = useRef();
    const card1 = useRef();
    const card2 = useRef();
    const card3 = useRef();



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
        tl.fromTo(PrcingH1.current,
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
        tl.fromTo(Prcingp.current,
            {
                y: 50,
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
            .fromTo(card1.current,
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
            .fromTo(card3.current,
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
            .fromTo(card2.current,
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






    }, { scope: container });



    return (
        <div ref={container} className='w-full bg-black py-[50px] px-20 max-sm:px-10'>
            <div className='space-y-6'>
                <div className='text-center space-y-3 mb-10'>
                    <h1 ref={PrcingH1} className='text-6xl max-sm:text-4xl text-white'>Pricing</h1>
                    <p ref={Prcingp} className='text-white/80 max-sm:text-sm'>Choose the right plan to meet your SEO <br /> needs and start optimizing today.</p>
                </div>
                <div className='flex max-sm:flex-col justify-center items-center gap-4'>
                    <div id='card' ref={card1} className='relative w-[300px] max-sm:w-full h-[500px] px-6 py-6 border border-white/20 rounded-xl backdrop-blur-xl bg-black/20 bg-gradient-to-br from-black-500/10 to-transparent shadow-2xl z-10'>
                        <div className='h-full space-y-4 flex flex-col justify-between items-stretch'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h3 className='text-2xl text-white/90'>Standard</h3>
                                    <h4 className='text-md  text-white/60'>$29/mo</h4>
                                </div>
                                <div className='w-full h-0.5 bg-white/10' />
                                <div className='space-y-3'>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                </div>
                            </div>
                            <div>

                                <button className='w-full px-4 py-1.5 rounded-lg bg-[#191819] text-white border border-white/50 shadow-[inset_0px_0px_10px_rgba(255,255,255,0.4)]'>
                                    Join waitlist
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={card2}
                        id='card'
                        className='relative w-[300px] max-sm:w-full h-[500px] px-6 py-6 border border-white/20 rounded-xl backdrop-blur-xl bg-gradient-to-b from-transparent to-purple-600/50 shadow-2xl shadow-[0px_20px_200px_22px_rgba(108,49,183,0.9)]'
                        style={{
                            backgroundImage: `url('./images/CTA.png')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className='h-full space-y-4 flex flex-col justify-between items-stretch'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h3 className='text-2xl text-white/90'>Pro</h3>
                                    <h4 className='text-md  text-white/60'>$29/mo</h4>
                                </div>
                                <div className='w-full h-0.5 bg-white/10' />
                                <div className='space-y-3'>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                </div>
                            </div>
                            <div>
                                <button className='w-full px-4 py-1.5 rounded-lg bg-purple-600/40 text-white  border border-white/50 shadow-[inset_0px_0px_10px_rgba(255,255,255,0.4)]'>
                                    Join waitlist
                                </button>
                            </div>
                        </div>
                    </div>

                    <div ref={card3} id='card' className='relative w-[300px] max-sm:w-full h-[500px] px-6 py-6 border border-white/20 rounded-xl backdrop-blur-xl bg-black/20 bg-gradient-to-br from-black-500/10 to-transparent shadow-2xl z-10'>
                        <div className='h-full space-y-4 flex flex-col justify-between items-stretch'>
                            <div className='space-y-6'>
                                <div className='space-y-2'>
                                    <h3 className='text-2xl text-white/90'>Business</h3>
                                    <h4 className='text-md  text-white/60'>$29/mo</h4>
                                </div>
                                <div className='w-full h-0.5 bg-white/10' />
                                <div className='space-y-3'>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                    <p className='flex items-center gap-2'> <Check size={20} /> <span>Keyword optimization</span> </p>
                                </div>
                            </div>
                            <div>

                                <button className='w-full px-4 py-1.5 rounded-lg bg-[#191819] text-white border border-white/50 shadow-[inset_0px_0px_10px_rgba(255,255,255,0.4)]'>
                                    Join waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing