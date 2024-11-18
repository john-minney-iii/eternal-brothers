import type { FC, ReactNode } from "react";
import clsx from "clsx";

export type NavbarLinkProps = {
    label: ReactNode;
    href: string;
    active: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({
    label,
    href,
    active
}) => {
    return (
        <a
            className={clsx(
                "text-lg hover:underline hover:text-ebm-red",
                {
                    "underline text-ebm-red": active,
                }
            )}
            href={href}
        >
            <p>{label}</p>
        </a>
    );
};

export default NavbarLink;
