import type { ReactNode } from "react";

export type NavLink = {
    label: ReactNode;
    href: string;
    active: boolean;
};
