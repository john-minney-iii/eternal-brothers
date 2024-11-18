import type { FC } from "react";

// Components
import NavbarLink, { type NavbarLinkProps } from "@/components/NavbarLink";

const Navbar: FC = () => {

    const navbarLinks: NavbarLinkProps[] = [
        {
            label: "About Us",
            href: "#about-us",
            active: true
        },
        {
            label: "How Can You Help",
            href: "#how-can-you-help",
            active: false
        },
        {
            label: "Gallery",
            href: "#gallery",
            active: false
        },
        {
            label: "Contact Us",
            href: "#contact-us",
            active: false
        },
    ];

    return (
        <div className="w-full bg-black text-white md:px-8 py-4">
            <div className="w-full h-full flex items-center justify-between">
                <section className="flex items-center gap-x-3">
                    <p className="text-ebm-red text-4xl">Eternal Brothers</p>
                </section>
                <section className="flex gap-x-5">
                    {navbarLinks.map(({ label, href, active }, index) =>
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
