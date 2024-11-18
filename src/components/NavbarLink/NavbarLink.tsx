import type { FC } from "react";
import clsx from "clsx";

// Types
import type { NavLink } from "@/src/utils/types";

const NavbarLink: FC<NavLink> = ({
    label,
    href,
    active
}) => {
    return (
        <a
            className={clsx(
                "text-xl hover:underline hover:text-ebm-red",
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
