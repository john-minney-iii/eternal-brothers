"use client"
import type { FC } from "react";
import { useState } from "react";

import Image from "next/image";
import ebmCross from "@/public/ebm-cross.svg";

// Components
import NavbarLink from "@/components/NavbarLink";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// Data
import navLinks from "@/data/navLinks";

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div className="w-full bg-black text-white md:px-8 px-4 py-4">
            <div className="w-full h-full flex items-center justify-between gap-x-3 z-50">
                <section className="flex items-center gap-x-3">
                    <Image
                        src={ebmCross.src}
                        alt="EBM Cross"
                        width={100}
                        height={100}
                        priority
                    />
                    <p className="text-ebm-red md:text-4xl text-3xl font-ebm-font">Eternal Brothers</p>
                </section>
                <nav className="hidden md:flex items-center justify-between text-xs md:text-md lg:text-xl gap-x-5">
                    {navLinks.map(({ label, href, active }, index) =>
                        <NavbarLink
                            key={`navbar-link-${index}`}
                            label={label}
                            href={href}
                            active={active}
                        />
                    )}
                </nav>
                <section className="flex md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {!isMenuOpen ? <IoMdMenu size={45} /> : <IoMdClose size={45} />}
                    </button>
                </section>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-10">
                    <nav className="flex flex-col gap-y-4">
                        {navLinks.map(({ label, href, active }, index) =>
                            <button key={`navbar-link-${index}`} onClick={() => setIsMenuOpen(false)}>
                                <NavbarLink
                                    label={label}
                                    href={href}
                                    active={active}
                                    className="text-xl"
                                />
                            </button>
                        )}
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
