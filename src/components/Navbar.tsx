"use client"

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <div className="lowercase ml-10 text-xl"> Quinn O'Connor</div>
                <div className="hidden md:flex">
                    <ul className="hidden sm:flex">
                        <Link href='/'>
                            <li className="ml-10 lowercase hover:border-b text-xl">about me</li>
                        </Link>
                        <Link href='/'>
                        <li className="ml-10 lowercase hover:border-b text-xl">portfolio</li>
                        </Link>
                        <Link href='/'>
                        <li className="ml-10 lowercase hover:border-b text-xl">contact me</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25}></AiOutlineMenu>
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "ease-in duration-700 fixed right-[-100%] top-0 p-10"
            }>

                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>             
                </div>

                <div className="flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-xl">about me</li>
                        </Link>

                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-xl">portfolio</li>
                        </Link>

                        <Link href="/">
                            <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer text-xl">contact me</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar