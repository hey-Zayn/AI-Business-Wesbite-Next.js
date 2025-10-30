'use client'
import { ChevronDown, Menu, X } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const dropdownRef = useRef(null)
    const mobileMenuRef = useRef(null)
    const timeoutRef = useRef(null)
    const container = useRef(null)

    // Features dropdown data
    const featuresItems = [
        { name: "AI-Powered Analytics", description: "Advanced insights with machine learning" },
        { name: "SEO Optimization", description: "Boost your search rankings" },
        { name: "Performance Monitoring", description: "Real-time performance tracking" },
        { name: "Competitor Analysis", description: "Stay ahead of the competition" }
    ]

    // Company dropdown data
    const companyItems = [
        { name: "About Us", description: "Our story and mission" },
        { name: "Careers", description: "Join our team" },
        { name: "Press Kit", description: "Media resources" },
        { name: "Contact", description: "Get in touch with us" }
    ]

    // Developers dropdown data
    const developersItems = [
        { name: "Documentation", description: "API references and guides" },
        { name: "API Status", description: "Check system status" },
        { name: "SDK Downloads", description: "Tools and libraries" },
        { name: "Community", description: "Developer forums" }
    ]

    // GSAP animations for navbar entrance
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Staggered navbar items animation
        tl.fromTo(".nav-item", 
            {
                y: -30,
                opacity: 0,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.1
            }
        )
        .fromTo(".nav-logo",
            {
                x: -50,
                opacity: 0,
                rotationY: -90
            },
            {
                x: 0,
                opacity: 1,
                rotationY: 0,
                duration: 1.0,
                ease: "power3.inOut"
            },
            "-=0.5"
        )
        .fromTo(".nav-cta",
            {
                x: 50,
                opacity: 0,
                scale: 0.8
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                ease: "power3.inOut"
            },
            "-=0.7"
        )

    }, { scope: container })

    // Dropdown animations
    const animateDropdown = (dropdownElement, isOpening) => {
        if (!dropdownElement) return

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        
        if (isOpening) {
            tl.fromTo(dropdownElement,
                {
                    y: -20,
                    opacity: 0,
                    scale: 0.95
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.4
                }
            )
            .fromTo(dropdownElement.querySelectorAll('div > div'),
                {
                    y: 10,
                    opacity: 0,
                    x: -10
                },
                {
                    y: 0,
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.08
                },
                "-=0.2"
            )
        } else {
            tl.to(dropdownElement,
                {
                    y: -10,
                    opacity: 0,
                    scale: 0.98,
                    duration: 0.3
                }
            )
        }
    }

    // Mobile menu animations
    const animateMobileMenu = (isOpening) => {
        const mobileMenu = mobileMenuRef.current
        if (!mobileMenu) return

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        if (isOpening) {
            tl.fromTo(mobileMenu,
                {
                    y: -50,
                    opacity: 0,
                    scale: 0.95
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.5
                }
            )
            .fromTo(mobileMenu.querySelectorAll('div > *'),
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1
                },
                "-=0.3"
            )
        } else {
            tl.to(mobileMenu,
                {
                    y: -30,
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.4
                }
            )
        }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeActiveDropdown()
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
                closeMobileMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isMobileMenuOpen])

    // Handle dropdown hover with delay
    const handleDropdownEnter = (dropdownName) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setActiveDropdown(dropdownName)
        
        // Animate dropdown opening
        setTimeout(() => {
            const dropdownElement = dropdownRef.current
            if (dropdownElement) {
                animateDropdown(dropdownElement, true)
            }
        }, 10)
    }

    const closeActiveDropdown = () => {
        const dropdownElement = dropdownRef.current
        if (dropdownElement) {
            animateDropdown(dropdownElement, false)
        }
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null)
        }, 300)
    }

    const handleDropdownLeave = () => {
        timeoutRef.current = setTimeout(() => {
            closeActiveDropdown()
        }, 150)
    }

    const handleDropdownEnterWithDelay = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const toggleMobileMenu = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu()
        } else {
            openMobileMenu()
        }
    }

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true)
        setTimeout(() => {
            animateMobileMenu(true)
        }, 10)
    }

    const closeMobileMenu = () => {
        animateMobileMenu(false)
        setTimeout(() => {
            setIsMobileMenuOpen(false)
            setActiveDropdown(null)
        }, 400)
    }

    const NavDropdown = ({ title, items, isActive }) => (
        <div
            className="relative nav-item"
            onMouseEnter={() => handleDropdownEnter(title)}
            onMouseLeave={handleDropdownLeave}
        >
            <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-200 group">
                {title}
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isActive ? 'rotate-180' : 'group-hover:rotate-180'}`}
                />
            </button>

            {/* Dropdown Menu */}
            {isActive && (
                <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-2 w-64 bg-black backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-purple-500/20 z-50 overflow-hidden"
                    onMouseEnter={handleDropdownEnterWithDelay}
                    onMouseLeave={handleDropdownLeave}
                >
                    <div className="p-2">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col p-3 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 group dropdown-item"
                            >
                                <span className="text-white font-medium text-sm">{item.name}</span>
                                <span className="text-white/60 text-xs mt-1">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

    const MobileDropdown = ({ title, items }) => (
        <div className="border-b border-white/10 pb-4 mobile-nav-item">
            <button
                className="flex items-center justify-between w-full text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setActiveDropdown(activeDropdown === title ? null : title)}
            >
                {title}
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === title ? 'rotate-180' : ''}`}
                />
            </button>

            {activeDropdown === title && (
                <div className="mt-2 space-y-2 pl-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-2 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-200 mobile-dropdown-item"
                        >
                            <span className="text-white/90 text-sm">{item.name}</span>
                            <span className="text-white/60 text-xs mt-1">{item.description}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

    return (
        <nav ref={container} className="w-full bg-black px-20 max-sm:px-6 border-b border-white/10 sticky top-0 z-40">
            <div className="max-sm:w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0 nav-logo">
                        <img
                            src="./images/logos/Logo.png"
                            alt="Company Logo"
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <NavDropdown
                            title="Features"
                            items={featuresItems}
                            isActive={activeDropdown === 'Features'}
                        />

                        <NavDropdown
                            title="Developers"
                            items={developersItems}
                            isActive={activeDropdown === 'Developers'}
                        />

                        <NavDropdown
                            title="Company"
                            items={companyItems}
                            isActive={activeDropdown === 'Company'}
                        />

                        <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 nav-item">
                            Blog
                        </a>

                        <a href="#" className="text-white/60 hover:text-white transition-colors duration-200 nav-item">
                            Changelog
                        </a>
                    </div>

                    {/* CTA Button - Desktop */}
                    <button className='px-2 py-4 border border-white/20 rounded-xl transition-all duration-500 group hover:border-white/30 max-sm:hidden nav-cta'>
                        <span className='px-6 py-3 bg-white/80 max-sm:bg-white text-black rounded-lg cursor-pointer group-hover:bg-white transition-all duration-1000'>
                            Start for free
                        </span>
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-white/60 hover:text-white transition-colors duration-200 p-2 nav-item"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div
                        ref={mobileMenuRef}
                        className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <MobileDropdown title="Features" items={featuresItems} />
                            <MobileDropdown title="Developers" items={developersItems} />
                            <MobileDropdown title="Company" items={companyItems} />

                            <a href="#" className="block text-white/80 hover:text-white transition-colors duration-200 py-2 border-b border-white/10 mobile-nav-item">
                                Blog
                            </a>

                            <a href="#" className="block text-white/80 hover:text-white transition-colors duration-200 py-2 border-b border-white/10 mobile-nav-item">
                                Changelog
                            </a>

                            <div className="pt-4 mobile-nav-item">
                                <button className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-all duration-300">
                                    Start for free
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar