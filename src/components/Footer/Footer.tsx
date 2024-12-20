import type { FC, ReactNode } from "react";
import Image from "next/image";
import ebmCross from "@/public/ebm-cross.svg";

// Components
import { FaFacebookSquare } from "react-icons/fa";

// Data
import navLinks from "@/data/navLinks";

type SocialLink = {
    icon: ReactNode;
    href: string;
};

const Footer: FC = () => {

    const socialLinks: SocialLink[] = [
        {
            icon: <FaFacebookSquare size={25} className="hover:text-ebm-red" />,
            href: "https://www.facebook.com/EternalBrothersMM/"
        }
    ];

    return (
        <div className="w-full flex md:flex-row flex-col items-center justify-between bg-black text-white md:p-8 p-4 gap-5">
            <section className="w-full flex flex-col gap-y-1">
                <p className="md:text-3xl text-xl">Eternal Brothers Motorcycle Ministry</p>
                <p>501C3#: 17053067315001</p>
                <p>P.O. Box 271708 Fort Collins, Colorado 80527</p>
                <p>Phone: (970)-481-1512</p>
            </section>
            <section className="w-full flex flex-col gap-y-1">
                <p className="md:text-3xl text-xl">Navigation</p>
                {navLinks.map(({ label, href }, index) =>
                    <a
                        key={`footer-nav-link-${index}`}
                        className="hover:underline hover:text-ebm-red"
                        href={href}
                    >
                        {label}
                    </a>
                )}
            </section>
            <section className="w-full flex flex-col items-center justify-center">
                <Image
                    src={ebmCross.src}
                    alt="EBM Cross"
                    width={250}
                    height={250}
                    priority
                />
                <div className="w-full flex items-center justify-center gap-x-1">
                    {socialLinks.map(({ icon, href }, index) =>
                        <a
                            key={`social-link-${index}`}
                            href={href}
                            target="_blank"
                        >
                            {icon}
                        </a>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Footer;
