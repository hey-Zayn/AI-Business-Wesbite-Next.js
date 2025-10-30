'use client'
import { Bell, BookDashed, ChartNoAxesColumn, File, Goal, LayoutDashboard, Link, List, LucideGitGraph, Mouse, StarsIcon, TableOfContents } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const container = useRef()
    const headingRef = useRef()
    const featuresLeftRef = useRef()
    const featuresCenterRef = useRef()
    const featuresRightRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
                markers: false
            }
        })

        // Headline animation with cool effects
        tl.fromTo(headingRef.current, 
            {
                y: 80,
                opacity: 0,
                filter: "blur(15px)",
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                scale: 1,
                duration: 1.4,
                ease: "expo.out",
                clearProps: "filter"
            }
        )

        // Staggered features animation with cool effects
        const featureColumns = [featuresLeftRef.current, featuresCenterRef.current, featuresRightRef.current]
        
        featureColumns.forEach((column, index) => {
            tl.fromTo(column.children,
                {
                    y: 60,
                    opacity: 0,
                    rotationX: -30,
                    transformOrigin: "center top"
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1.0,
                    stagger: 0.2,
                    ease: "back.out(1.4)",
                    delay: index * 0.3
                },
                index === 0 ? "-=0.8" : "-=0.6"
            )
        })

        // Add continuous subtle animations
        tl.add(() => {
            // Hover effects preparation
            gsap.set(".feature-item", {
                transformPerspective: 1000
            })

            // Subtle floating animation
            gsap.to(".feature-item", {
                y: -3,
                duration: 2,
                stagger: 0.1,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                repeatDelay: 1
            })
        })

    }, { scope: container })

    // Add hover animations for features
    useGSAP(() => {
        const featureItems = document.querySelectorAll('.feature-item')
        
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: -8,
                    scale: 1.02,
                    rotationY: 5,
                    duration: 0.4,
                    ease: "power2.out"
                })
                
                // Icon glow effect
                const icon = item.querySelector('svg')
                gsap.to(icon, {
                    scale: 1.2,
                    rotation: 10,
                    duration: 0.3,
                    ease: "back.out(2)"
                })
            })

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "elastic.out(1.2, 0.5)"
                })
                
                const icon = item.querySelector('svg')
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "power2.out"
                })
            })
        })
    }, { scope: container })

    return (
        <div ref={container} className='w-full h-full bg-black'>
            <div className='w-full px-20 py-[100px] max-sm:px-6 bg-gradient-to-br from-[rgba(147,51,234,0.3)] via-[rgba(147,51,234,0.1)] to-black space-y-15 border-t-2 border-b-2 border-t-gray-800 border-b-gray-800'>
                <div>
                    <h1 ref={headingRef} className='text-6xl max-sm:text-4xl'>Elevate your <br className='max-sm:hidden' /> SEO efforts.</h1>
                </div>
                
                <div className='w-full flex justify-between items-center max-sm:flex-col max-sm:gap-6'>
                    {/* Left Column */}
                    <div ref={featuresLeftRef} className='space-y-10'>
                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><LayoutDashboard size={22} className='transition-colors duration-300' /> <span>User-friendly dashboard</span></h2>
                                <h3 className='flex-wrap text-white/70'>Perform complex SEO audits and optimizations with a single click.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><List size={22} className='transition-colors duration-300' /> <span>Content evaluation</span></h2>
                                <h3 className='flex-wrap text-white/70'>Simple corrections for immediate improvements.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><Link size={22} className='transition-colors duration-300' /> <span>Link Optimization Wizard</span></h2>
                                <h3 className='flex-wrap text-white/70'>Guides you through the process of creating and managing links.</h3>
                            </div>
                        </div>
                    </div>

                    {/* Center Column */}
                    <div ref={featuresCenterRef} className='space-y-10'>
                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><ChartNoAxesColumn size={22} className='transition-colors duration-300' /> <span>Visual reports</span></h2>
                                <h3 className='flex-wrap text-white/70'>Visual insights into your site's performance.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><Goal size={22} className='transition-colors duration-300' /> <span>SEO goal setting</span></h2>
                                <h3 className='flex-wrap text-white/70'>Helps you set and achieve SEO goals with guided assistance.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><Mouse size={22} className='transition-colors duration-300' /> <span>One-click optimization</span></h2>
                                <h3 className='flex-wrap text-white/70'>Perform complex SEO audits and optimizations with a single click.</h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div ref={featuresRightRef} className='space-y-10'>
                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><StarsIcon size={22} className='transition-colors duration-300' /> <span>Smart Keyword Generator</span></h2>
                                <h3 className='flex-wrap text-white/70'>Automatic suggestions and the best keywords to target.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><Bell size={22} className='transition-colors duration-300' /> <span>Automated alerts</span></h2>
                                <h3 className='flex-wrap text-white/70'>Automatic notifications about your SEO health, including quick fixes.</h3>
                            </div>
                        </div>

                        <div className='w-[300px] max-sm:w-full feature-item'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='flex text-lg gap-2'><File size={22} className='transition-colors duration-300' /> <span>Competitor reports</span></h2>
                                <h3 className='flex-wrap text-white/70'>Provides insights into competitor`s keyword strategies and ranking.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features