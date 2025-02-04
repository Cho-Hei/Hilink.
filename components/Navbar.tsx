"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='w-full padding-container relative z-30 py-5 bg-blue-100'>
            <div className='max-container flexBetween'>
                <Link href='/'>
                    <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
                </Link>
                <ul className='hidden h-full gap-12 lg:flex'>
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={link.href}
                            key={link.key}
                            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div className='lg:flexCenter hidden'>
                    <Button type='button' title='Login' icon='/user.svg' variant='btn_dark_green' />
                </div>
                {/* <Image
                    src='menu.svg'
                    alt='menu'
                    width={32}
                    height={32}
                    className='inline-block cursor-pointer lg:hidden'
                /> */}
                <button
                    className='lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none'
                    onClick={() => setNavbarOpen(!navbarOpen)}>
                    <div className='absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>
                        <span
                            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                            }`}></span>
                        <span
                            className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                                navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                            }`}></span>
                        <span
                            className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                                navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                            }`}></span>
                    </div>
                </button>
                <div
                    className={`fixed flex flexCenter top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-green-800 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
                        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                    }`}>
                    <div className='flex flexCenter'>
                        <ul className='flex flex-col flexCenter w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-75 hover:opacity-100 transition-all duration-200 ease-in-out'>
                            {NAV_LINKS.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.key}
                                    className='h-full w-full my-12 p-4 text-3xl bold-32 text-white'
                                    onClick={() => setNavbarOpen(!navbarOpen)}>
                                    {link.label}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
