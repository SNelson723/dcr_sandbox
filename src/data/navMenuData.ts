export type NavMenuItem = {
  label: string;
};

export const baseClass = "py-2.5 hover:bg-[rgb(174,199,242)] hover:text-black font-semibold";
export const activeClass = "bg-blue-200 text-black";

export interface NavLinkProps {
  to: string;
  label: string;
}

export const navMenuData: NavMenuItem[] = [
  { label: "Home" },
  { label: "Carousel" },
  // { label: "Dashboard" },
  { label: "Charts" },
  { label: "Charts Two" },
  { label: "Nav Menu" },
];

export const navLinks: NavLinkProps[] = [
  { to: "/", label: "Home" },
  { to: "carousel", label: "Carousel" },
  // { to: "dashboard", label: "Dashboard" },
  { to: "charts", label: "Charts" },
  { to: "chartstwo", label: "Charts Two" },
  { to: "testing", label: "Testing" },
];
