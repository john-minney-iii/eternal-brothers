import type { FC } from "react";
import Image from "next/image";
import ebmCross from "@/public/ebm-cross.svg";

// Components
import NavbarLink from "@/components/NavbarLink";

// Data
import navLinks from "@/data/navLinks";

const Navbar: FC = () => {
    return (
        <div className="w-full bg-black text-white md:px-8 py-4">
            <div className="w-full h-full flex items-center justify-between">
                <section className="flex items-center gap-x-3">
                    <Image
                        src={ebmCross.src}
                        alt="EBM Cross"
                        width={100}
                        height={100}
                    />
                    <p className="text-ebm-red text-4xl">Eternal Brothers</p>
                </section>
                <section className="flex gap-x-5">
                    {navLinks.map(({ label, href, active }, index) =>
                        <NavbarLink
                            key={`navbar-link-${index}`}
                            label={label}
                            href={href}
                            active={active}
                        />
                    )}
                </section>
            </div>
        </div>
    );
};

export default Navbar;
