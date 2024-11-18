import type { FC } from "react";
import Link from "next/link";
import clsx from "clsx";

// Types
import type { NavLink } from "@/src/utils/types";

const NavbarLink: FC<NavLink> = ({
    label,
    href,
    active
}) => {
    return (
        <Link
            className={clsx(
                "hover:underline hover:text-ebm-red",
                {
                    "underline text-ebm-red": active,
                }
            )}
            href={href}
        >
            <p>{label}</p>
        </Link>
    );
};

export default NavbarLink;
