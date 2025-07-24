import { UsersIcon } from "@heroicons/react/24/outline";

export type NavMenuItem = {
  label: string;
};

export const baseClass =
  "py-2.5 hover:bg-[rgb(174,199,242)] hover:text-black font-semibold";
export const activeClass = "bg-blue-200 text-black";

export interface NavLinkProps {
  to: string;
  label: string;
}

export type Navigation = {
  name: string;
  href: string;
  // icon: typeof UsersIcon | typeof Radiation | typeof StoresIcon | any;
  // children?: Navigation[];
  // childOpen?: boolean;
  // mobile: boolean;
};

export const navMenuData: NavMenuItem[] = [
  { label: "Home" },
  { label: "Carousel" },
  // { label: "Dashboard" },
  { label: "Charts" },
  { label: "Charts Two" },
  { label: "Nav Menu" },
];

export const navLinks: Navigation[] = [
  { name: "Home", href: "/", icon: UsersIcon, mobile: true },
  { name: "Carousel", href: "carousel", icon: Radiation, mobile: true },
  // { name: "Dashboard", href: "dashboard", icon: StoresIcon, mobile: true },
  { name: "Charts", href: "charts", icon: UsersIcon, mobile: true },
  { name: "Charts Two", href: "chartstwo", icon: Radiation, mobile: true },
  { to: "testing", label: "Testing" },
];
