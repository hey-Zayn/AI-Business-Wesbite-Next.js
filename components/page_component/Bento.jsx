'use client'
import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


const Bento = () => {

    const container = useRef();
    const BentoText = useRef();
    const grid1 = useRef();
    const grid2 = useRef();
    const grid3 = useRef();
    const grid4 = useRef();

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
            ease: "power3.out"
        }
    });

    // Master text animation
    tl.fromTo(BentoText.current,
        {
            y: 60,
            opacity: 0,
            filter: "blur(10px)"
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.4,
            ease: "expo.out",
            clearProps: "filter"
        }
    );

    // Grid items with staggered entrance and directional flow
    const gridItems = [grid1.current, grid2.current, grid3.current, grid4.current];
    const directions = [-100, 60, -80, 50]; // Different directions for each item
    const delays = [0, 0.2, 0.1, 0.3]; // Staggered delays

    gridItems.forEach((item, index) => {
        tl.fromTo(item,
            {
                y: directions[index],
                x: index % 2 === 0 ? -40 : 40, // Alternate x directions
                scale: 0.9,
                opacity: 0,
                rotationY: index % 2 === 0 ? -10 : 10, // Subtle 3D rotation
                transformOrigin: "center center"
            },
            {
                y: 0,
                x: 0,
                scale: 1,
                opacity: 1,
                rotationY: 0,
                duration: 1.0,
                ease: "back.out(1.4)",
                delay: delays[index]
            },
            index === 0 ? "-=0.8" : `-=${0.6 - delays[index]}` // Overlap timing
        );
    });

    // Final polish - subtle scale pulse on all elements
    tl.to([BentoText.current, ...gridItems], {
        scale: 1.02,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
    }, "-=0.5");

}, { scope: container });
    return (
        <div ref={container} className='bg-black w-full h-full px-20 max-sm:px-10 py-[100px] max-sm:py-[50px]'>
            <div className='space-y-12'>
                <h1 ref={BentoText} className='text-center text-4xl max-sm:text-xl'>Harness the power of AI,  making <br className='max-sm:hidden' /> search engine optimization intuitive <br className='max-sm:hidden' /> and effective for all skill levels.</h1>

                <div>
                    {/* Bento Box */}
                    <div className='space-y-2'>

                        <div className='flex max-sm:flex-col gap-2'>
                            {/* Grid 1 */}
                            <div ref={grid1} className='w-[33%] max-sm:w-full h-[380px] max-sm:h-full p-3 space-y-4 text-white border border-white/10 rounded-xl '>
                                <div>
                                    <img src="./images/Visual.png" alt="" className='w-full h-full' />

                                </div>
                                <div className='p-4 space-y-2 '>
                                    <h2 className='text-white text-xl max-sm:text-lg max-sm:font-normal font-semibold'>SEO goal setting</h2>
                                    <p className='text-white/70 text-sm'>Helps you set and achieve SEO goals with guided assistance.</p>
                                </div>
                            </div>

                            {/* Grid 2 */}
                            <div ref={grid2} className='relative w-[77%]  max-sm:w-full h-[380px] p-3 space-y-4 text-white border border-white/10 rounded-xl overflow-hidden '>
                                <div className=' '>
                                    <img src="./images/App.png" alt="" className='absolute top-15 max-sm:left-10 left-20 w-full ' />
                                    <div
                                        className='absolute top-0 left-0 w-full h-full overlay'
                                        style={{
                                            background: `linear-gradient(to bottom, transparent 0%, rgba(147, 51, 234, 0.5) 120%)`
                                        }}
                                    ></div>

                                    <div className='absolute bottom-1 space-y-2 p-4'>
                                        <h2 className='text-white text-xl font-semibold max-sm:text-lg max-sm:font-normal'>User-friendly dashboard</h2>
                                        <p className='text-white/70 text-sm'>Perform complex SEO audits and <br /> optimizations with a single click.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='flex  max-sm:flex-col gap-2'>
                            {/* Grid 1 */}



                            <div ref={grid3} className='relative w-[77%]  max-sm:w-full h-[380px] p-3 space-y-4 text-white border border-white/10 rounded-xl overflow-hidden '>
                                <div className=' '>
                                    <img src="./images/Bento2.png" alt="" className='absolute  top-10 left-20 max-sm:left-10 w-[80%]  ' />
                                    <div
                                        className='absolute top-0 left-0 w-full h-full overlay'
                                        style={{
                                            background: `linear-gradient(to bottom, transparent 0%, rgba(147, 51, 234, 0.5) 120%)`
                                        }}
                                    ></div>

                                    <div className='absolute bottom-1 space-y-2 p-4'>
                                        <h2 className='text-white text-xl font-semibold max-sm:text-lg max-sm:font-normal'>User-friendly dashboard</h2>
                                        <p className='text-white/70 text-sm'>Perform complex SEO audits and <br /> optimizations with a single click.</p>
                                    </div>
                                </div>
                            </div>


                            {/* Grid 2 */}

                            <div ref={grid4} className='w-[33%] max-sm:w-full h-[380px] max-sm:h-full p-3 space-y-4 text-white border border-white/10 rounded-xl '>
                                <div>
                                    <img src="./images/Visual2.png" alt="" className='w-[76%] h-full' />

                                </div>
                                <div className='p-4 space-y-2 '>
                                    <h2 className='text-white text-xl font-semibold max-sm:text-lg max-sm:font-normal'>SEO goal setting</h2>
                                    <p className='text-white/70 text-sm'>Helps you set and achieve SEO goals with guided assistance.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bento