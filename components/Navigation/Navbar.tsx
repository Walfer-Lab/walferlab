"use client";
import { ArrowUpRight01Icon, Cancel01Icon, Menu09Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [menu, setMenu] = useState(false);

    const navLinks = ['Work'];

    return (
        // Wrapper with fixed positioning and high z-index
        <div className="fixed top-0 left-0 w-full z-50">
            
            {/* Main Navbar Header */}
            <div className="relative z-50 w-full bg-white/60 backdrop-blur-xl p-3 flex flex-row justify-between sm:justify-around items-center">
                
                <Link href="/" className="text-xl font-semibold font-clash tracking-wide text-black/90">
                    Walfer Lab
                </Link>

                {/* Desktop Menu */}
                <div className="hidden sm:flex flex-row gap-6 items-center font-general">
                    <Link 
                        href='/#services' 
                        className="font-medium text-sm text-black/90 hover:text-black hover:-translate-y-0.5 transition-all duration-300 ease-out"
                    >
                        Services
                    </Link>
                    <Link 
                        href='/#benefits' 
                        className="font-medium text-sm text-black/90 hover:text-black hover:-translate-y-0.5 transition-all duration-300 ease-out"
                    >
                        Benefits
                    </Link>
                    {navLinks.map((item) => (
                        <Link 
                            key={item} 
                            href={`/${item.toLowerCase()}`} 
                            className="font-medium text-sm text-black/90 hover:text-black hover:-translate-y-0.5 transition-all duration-300 ease-out"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link href="#contact" className="hidden rounded-full w-fit py-2 px-3.5 text-black/90 font-general font-medium sm:flex flex-row items-center gap-1 text-sm border-2 border-black cursor-pointer hover:bg-black/90 hover:text-white transition-colors duration-200">
                    Contact now
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={2}/>
                </Link>

                {/* Mobile Toggle Button with Rotation Animation */}
                <button 
                    onClick={() => setMenu(!menu)}
                    className="sm:hidden p-1 active:scale-90 transition-transform duration-300"
                    aria-label="Toggle Menu"
                >
                    <div className={`transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${menu ? 'rotate-180' : 'rotate-0'}`}>
                        <HugeiconsIcon 
                            icon={menu ? Cancel01Icon : Menu09Icon} 
                            size={28} 
                            className="text-black/90" 
                        />
                    </div>
                </button>
            </div>

            {/* 
                Mobile Menu Overlay
                Always rendered, but hidden via CSS until toggled.
            */}
            <div 
                className={`
                    absolute sm:hidden top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-2xl pt-24 px-6 flex flex-col gap-6
                    transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                    ${menu ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-8 pointer-events-none invisible'}
                `}
            >
                <p className="text-sm font-medium font-general text-black/40 uppercase tracking-widest mb-2">
                    Menu
                </p>
                
                {/* Staggered Link Animations */}
                {navLinks.map((item, index) => (
                    <Link 
                        key={item} 
                        href={`/${item.toLowerCase()}`} 
                        onClick={() => setMenu(false)}
                        className={`
                            font-general font-medium text-4xl text-black/90 hover:pl-2 transition-all duration-500 ease-out
                            ${menu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                        `}
                        // Adds a slight delay to each link so they slide in one after another
                        style={{ transitionDelay: menu ? `${index * 75 + 100}ms` : '0ms' }}
                    >
                        {item}
                    </Link>
                ))}

                <Link 
                    href="/#services" 
                    onClick={() => setMenu(false)}
                    className={`
                    font-general font-medium text-4xl text-black/90 hover:pl-2 transition-all duration-500 ease-out
                    ${menu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                    `}
                    style={{ transitionDelay: menu ? `${2 * 75 + 100}ms` : '0ms' }}
                    >
                        Services
                </Link>

                <Link 
                    href="/#benefits" 
                    onClick={() => setMenu(false)}
                    className={`
                    font-general font-medium text-4xl text-black/90 hover:pl-2 transition-all duration-500 ease-out
                    ${menu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                    `}
                    style={{ transitionDelay: menu ? `${2 * 75 + 100}ms` : '0ms' }}
                    >
                        Benefits
                    </Link>

                <Link 
                    href="/#contact"
                    onClick={() => setMenu(false)}
                    className={`
                        font-general font-medium text-4xl text-black/90 hover:pl-2 transition-all duration-500 ease-out
                        ${menu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                    `}
                    // Adds a slight delay to each link so they slide in one after another
                    style={{ transitionDelay: menu ? `${3 * 75 + 100}ms` : '0ms' }}
                >
                Contact Now</Link>
            </div>
        </div>
    );
}