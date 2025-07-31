import { useState, useRef } from "react";
import ChevronRight from "../components/ChevronRight";
import { Navigation, navLinks } from "../data/navMenuData";
import { NavLink } from "react-router";
import { baseClass, activeClass } from "../data/navMenuData";

export interface NavMenuProps {
  childHeight?: number;
}

const NavMenu = ({ childHeight = 44 }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [childrenOpen, setChildrenOpen] = useState<{ [key: string]: string }>(
    {}
  );
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleRef = (href: string = "") => {
    if (!ref.current || !iconRef.current || href == "#") return;
    ref.current.setAttribute("data-open", isOpen ? "false" : "true");
    iconRef.current.setAttribute("data-open", isOpen ? "false" : "true");
    setIsOpen((v) => !v);
    if (isOpen) {
      setChildrenOpen({}); // Reset children open state when closing the menu
    }
  };

  const handleChildren = (label: string) => {
    setChildrenOpen((p) => ({
      ...p,
      [label]: p[label] == "true" ? "false" : "true",
    }));
  };

  return (
    <>
      <div
        ref={ref}
        data-open="false"
        className="
          z-50 flex flex-col py-4 justify-between absolute left-0 top-0 bg-[rgb(235,235,245)] font-medium transition-all duration-500 select-none
          data-[open=true]:w-48 data-[open=true]:h-full data-[open=true]:bg-opacity-100 data-[open=false]:w-0 data-[open=false]:h-0 data-[open=false]:opacity-0 
        "
      >
        <ul className="flex flex-col">
          {navLinks.map((link: Navigation) => (
            <li key={link.name} className="w-full">
              <NavLink
                key={link.name}
                to={link.href}
                draggable={false}
                onClick={() => handleRef(link.href)}
                className={({ isActive }) =>
                  `${baseClass} ${
                    isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                  } ${isActive ? activeClass : ""}`
                }
              >
                <link.icon className="w-6 h-6" />
                {link.name}
                {link.children?.length && (
                  <ChevronRight
                    className="w-4 h-4 absolute right-4 transition-all duration-200"
                    style={{
                      transform:
                        childrenOpen[link.name] == "true"
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                    }}
                    onClick={(e) => {
                      if (!e) return;
                      handleChildren(link.name);
                    }}
                  />
                )}
              </NavLink>
              {link.children && (
                <ul
                  data-open={childrenOpen[link.name] || "false"}
                  className={`transition-all duration-100 pl-2 data-[open=true]:h-[${
                    childHeight * link.children.length
                  }px] data-[open=true]:opacity-100 data-[open=false]:h-0 data-[open=false]:opacity-0 data-[open=false]:overflow-hidden`}
                >
                  {link.children &&
                    link.children.map((child) => (
                      <li key={child.name} className={`${baseClass}`}>
                        <child.icon className="w-5 h-5 ml-4" />
                        <NavLink to={child.href} draggable={false}>
                          {child.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-col">
          <div
            className={`transition-all duration-500 text-nowrap p-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Settings
          </div>
          <div
            className={`transition-all duration-500 text-nowrap py-2 px-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Sign Out
          </div>
        </div>
      </div>
      <div
        ref={iconRef}
        data-open="false"
        className={`z-50 flex absolute data-[open=true]:left-48 ml-2 data-[open=false]:left-0 top-2 rounded-full 
          p-2 bg-blue-200 cursor-pointer transition-all duration-500 border-2 ${
            isOpen ? "border-black/100" : "border-black/40"
          }`}
        onClick={() => handleRef()}
      >
        <ChevronRight
          className={`${
            isOpen ? "opacity-100" : "opacity-40"
          } transition-all duration-300`}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
        <span
          className={`pr-2 ${
            isOpen ? "opacity-100" : "opacity-40"
          } transition-all duration-300`}
        >
          Menu
        </span>
      </div>
    </>
  );
};

export default NavMenu;
