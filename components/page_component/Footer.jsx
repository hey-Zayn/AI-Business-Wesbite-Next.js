'use client'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const container = useRef()
    const logoRef = useRef()
    const socialRef = useRef()
    const productRef = useRef()
    const companyRef = useRef()
    const resourcesRef = useRef()
    const legalRef = useRef()
    const mobileSocialRef = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                markers: false
            },
            defaults: {
                ease: "power3.out"
            }
        })

        // Logo animation
        tl.fromTo(logoRef.current,
            {
                y: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.0
            }
        )

        // Social icons animation (desktop)
        tl.fromTo(socialRef.current.children,
            {
                y: 30,
                opacity: 0,
                rotationY: -90
            },
            {
                y: 0,
                opacity: 1,
                rotationY: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.5)"
            },
            "-=0.6"
        )

        // Footer columns staggered animation
        const columns = [productRef.current, companyRef.current, resourcesRef.current, legalRef.current]
        
        columns.forEach((column, index) => {
            tl.fromTo(column.children,
                {
                    y: 40,
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20
                },
                {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power2.out"
                },
                index === 0 ? "-=0.4" : "-=0.5"
            )
        })

        // Mobile social icons animation
        tl.fromTo(mobileSocialRef.current.children,
            {
                y: 30,
                opacity: 0,
                scale: 0.5
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "elastic.out(1.2, 0.5)"
            },
            "-=0.3"
        )

        // Add continuous subtle animations
        tl.add(() => {
            // Social icons hover preparation
            gsap.set(".social-icon", {
                transformPerspective: 1000
            })

            // Subtle floating animation for social icons
            gsap.to(".social-icon", {
                y: -2,
                duration: 2,
                stagger: 0.3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                repeatDelay: 1
            })
        })

    }, { scope: container })

    // Hover animations for social icons
    useGSAP(() => {
        const socialIcons = document.querySelectorAll('.social-icon')
        
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    y: -5,
                    scale: 1.2,
                    rotationY: 180,
                    duration: 0.4,
                    ease: "back.out(2)"
                })
            })

            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "elastic.out(1.2, 0.5)"
                })
            })
        })

        // Hover animations for footer links
        const footerLinks = document.querySelectorAll('.footer-link')
        
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    x: 5,
                    color: "rgba(255,255,255,1)",
                    duration: 0.3,
                    ease: "power2.out"
                })
            })

            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    x: 0,
                    color: "rgba(255,255,255,0.5)",
                    duration: 0.4,
                    ease: "power2.out"
                })
            })
        })

    }, { scope: container })

    return (
        <div ref={container} className='w-full h-[400px] max-sm:h-full px-20 max-sm:px-10 py-[20px] bg-black'>
            <div className='h-full w-full flex max-sm:flex-col justify-between items-center max-sm:items-start'>
                {/* Logo and Social Section */}
                <div className='h-full max-sm:py-10 flex flex-col justify-between items-stretch'>
                    <img 
                        ref={logoRef} 
                        src="./images/logos/logokit.png" 
                        alt="Company Logo" 
                        className='opacity-0'
                    />
                    <div ref={socialRef} className='flex gap-6 max-sm:hidden'>
                        <Instagram className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                        <Twitter className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                        <Linkedin className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                    </div>
                </div>

                {/* Footer Links */}
                <div className='flex max-sm:flex-col gap-20 max-sm:gap-10'>
                    {/* Product Column */}
                    <div ref={productRef} className='flex flex-col gap-6'>
                        <h1 className='text-md text-white/70'>Product</h1>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Features</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Integration</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Updates</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>FAQ</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Pricing</h3>
                    </div>

                    {/* Company Column */}
                    <div ref={companyRef} className='flex flex-col gap-6'>
                        <h1 className='text-md text-white/70'>Company</h1>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>About</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Blog</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Careers</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Manifesto</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Press</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Contact</h3>
                    </div>

                    {/* Resources Column */}
                    <div ref={resourcesRef} className='flex flex-col gap-6'>
                        <h1 className='text-md text-white/70'>Resources</h1>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Examples</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Community</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Guides</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Docs</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Press</h3>
                    </div>

                    {/* Legal Column */}
                    <div ref={legalRef} className='flex flex-col gap-6'>
                        <h1 className='text-md text-white/70'>Legal</h1>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Privacy</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Terms</h3>
                        <h3 className='footer-link text-md text-white/50 cursor-pointer'>Security</h3>
                    </div>
                </div>

                {/* Mobile Social Icons */}
                <div ref={mobileSocialRef} className='w-full py-6 hidden max-sm:flex justify-center items-center gap-8'>
                    <Instagram className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                    <Twitter className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                    <Linkedin className='social-icon text-white/80 transition-colors duration-300 hover:text-white' />
                </div>
            </div>
        </div>
    )
}

export default Footer