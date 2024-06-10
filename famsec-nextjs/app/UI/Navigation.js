'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "../../public/images/logo.svg"


const navigationMenu = [
    {
        href: '#',
        label: "Home"
    },
    {
        href: '#',
        label: "How we work"
    },
    {
        href: '#',
        label: "Our mission"
    },
    {
        href: '#',
        label: "About"
    },
    {
        href: '#',
        label: "Contact"
    },
]

const Navigation = () => {
    const [navOpen, setNavOpen] =useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    
    const mobileMenuHandler = () =>{
        setNavOpen(!navOpen)
    }

    useEffect(()=>{
        
        function handleResize() {
       
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,

        })
         //when the window resize we set the navOpen false
         if (dimensions.width > 768 && navOpen){
            setNavOpen(false);
         }
        }

        window.addEventListener("resize",handleResize);

        return()=>{
            window.removeEventListener("resize",handleResize)
        }
        
    })
    return (
        <>
            <header>
                <div className='py-7'>
                    <div className='container px-4 mx-auto'>
                        <div className='flex justify-between item-center'>
                            {/* logo */}
                            <div>
                                <Link href='/'>
                                    <Image src={logo} width={157} height={30} alt='FamSec Logo' />
                                </Link>
                            </div>
                            {/* Navigation Menu */}
                            <div className='hidden lg:block text-center'>
                                <ul className=' flex space-x-7'>
                                    {navigationMenu.map((item, idx) => {
                                        return (
                                            <>
                                                <li key={item.label}>
                                                    <Link href={item.href}>{item.label}</Link>

                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>
                            {/* CTA */}
                            <div>
                                <Link href="#" className='px-5 py-4 bg-primary text-white rounded-lg hidden lg:inline-block'>
                                    Get Started
                                </Link>
                                <button className='black lg:hidden' onClick={mobileMenuHandler}>
                                    <svg
                                        viewBox="0 0 21 21"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                    >
                                        <g
                                            fill="none"
                                            fillRule="evenodd"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
                                        </g>
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* for Mobile/Tablet devices Nav Menu */}
            <div className={ navOpen ? "py-0 block fixed w-screen z-[9999]" : "py-0 hidden fixed w-screen z-[9999]"}>
                <div className='h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50'onClick={mobileMenuHandler}></div>
                <div className='bg-white w-[380px] top-0 z-[9999] h-screen fixed'>
                    <div className='h-14 px-10 border-b flex items-center'>
                        <button className='flex items-center space-x-3' onClick={mobileMenuHandler}>
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                height="1em"
                                width="1em"

                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M368 368L144 144M368 144L144 368"
                                />
                            </svg>
                            <span>Close</span>

                        </button>
                    </div>
                    <div className='h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth'>
                        <ul className='block mb-7'>
                            {navigationMenu.map((item, idx) => (
                                <li key={item.label}>
                                    <Link href={item.href} className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary'>
                                        <span>{item.label}</span>
                                        <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'></span>
                                        <svg
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            height="1em"
                                            width="1em"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
                                            />
                                        </svg>
                                    </Link>

                                </li>
                            ))}

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation