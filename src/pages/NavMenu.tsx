import { useState, useRef } from "react";
import ChevronRight from "../components/ChevronRight";
import { Navigation, navLinks } from "../data/navMenuData";
import { NavLink } from "react-router";
import { baseClass, activeClass } from "../data/navMenuData";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleRef = () => {
    if (!ref.current || !iconRef.current) return;
    ref.current.setAttribute("data-open", isOpen ? "false" : "true");
    iconRef.current.setAttribute("data-open", isOpen ? "false" : "true");
    setIsOpen((v) => !v);
  };

  return (
    <div className="select-none">
      <div
        ref={ref}
        data-open="true"
        className="
          z-50 flex flex-col py-4 justify-between absolute left-0 top-0 bg-[rgb(240,245,255)] font-medium overflow-hidden transition-all duration-300
          data-[open=true]:w-48 data-[open=true]:h-full data-[open=true]:opacity-100 data-[open=false]:w-0 data-[open=false]:h-0 data-[open=false]:opacity-0 
        "
      >
        <div className="flex flex-col">
          {navLinks.map((link: Navigation) => (
            <NavLink
              key={link.name}
              to={link.href}
              draggable={false}
              className={({ isActive }) =>
                `${baseClass} ${
                  isOpen ? "w-full opacity-100" : "w-0 opacity-0"
                } ${isActive ? activeClass : ""}`
              }
            >
              <link.icon className="w-6 h-6" />
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col">
          <div
            className={`transition-all duration-300 text-nowrap p-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Settings
          </div>
          <div
            className={`transition-all duration-300 text-nowrap py-2 px-4 cursor-pointer hover:bg-blue-200 ${baseClass} ${
              isOpen ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          >
            Sign Out
          </div>
        </div>
      </div>
      <div
        ref={iconRef}
        data-open="true"
        className="z-50 flex absolute data-[open=true]:left-48 ml-2 data-[open=false]:left-0 top-2 rounded-full p-2 bg-white cursor-pointer transition-all duration-300"
        onClick={handleRef}
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
    </div>
  );
};

export default NavMenu;
