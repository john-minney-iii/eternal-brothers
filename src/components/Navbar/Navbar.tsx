import type { FC } from "react";

// Components
import NavbarLink from "@/components/NavbarLink";

// Data
import navLinks from "@/data/navLinks";

const Navbar: FC = () => {
    return (
        <div className="w-full bg-black text-white md:px-8 py-4">
            <div className="w-full h-full flex items-center justify-between">
                <section className="flex items-center gap-x-3">
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
                <section>
                    <p>Sign In</p>
                </section>
            </div>
        </div>
    );
};

export default Navbar;
