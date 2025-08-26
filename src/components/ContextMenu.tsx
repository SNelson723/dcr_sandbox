import { useRef, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setMenuPosition } from "../features/contextMenuSlice";
import { Option, Handlers } from "../types";

interface ContextMenuProps {
  className?: string;
  options: Option[];
  handlers: Handlers;
}

/**
 * In the component that uses this, make sure there is a handleRightClick
 * function that dispatches the setMenuPosition action using event.pageX and event.pageY
 * If any values need to be set for the onClick property of the options, set them there
 */

const ContextMenu = ({
  className = "",
  options,
  handlers,
}: ContextMenuProps) => {
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const context = useAppSelector((state) => state.context);
  const [showChildren, setShowChildren] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(setMenuPosition(null));
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [context.menuPosition, dispatch]);

  const topOrBottom = (i: number) => {
    if (i === 0) {
      return "rounded-t-md";
    } else if (i === options.length - 1) {
      return "rounded-b-md";
    }
    return "";
  };

  const handleClick = (
    fn: Handlers,
    key: keyof Handlers,
    value: string | null
  ) => {
    setShowChildren(!showChildren);
    fn[key](value);
  };

  return (
    <>
      {context.menuPosition ? (
        <div
          ref={menuRef}
          className={`fixed z-50 bg-white rounded-md shadow-lg text-black cursor-pointer select-none`}
          style={{
            top: context.menuPosition?.y,
            left: context.menuPosition?.x,
          }}
        >
          {options.map((option, i) => (
            <div
              key={i}
              className={`${className} ${topOrBottom(
                i
              )} py-0.5 text-[14px] px-4 transition-all duration-300`}
            >
              <div
                onClick={() =>
                  handleClick(
                    handlers,
                    option.key,
                    option.value ? option.value : null
                  )
                }
              >
                {option.label}
              </div>
              {option.children && showChildren && (
                <div
                  className={`absolute ml-4 left-[108px] bottom-[0px] bg-white shadow-r-lg`}
                >
                  {option.children.map((child, ci) => (
                    <div
                      key={ci}
                      className={`${className} px-4 py-0.5`}
                      onClick={() =>
                        handleClick(
                          handlers,
                          child.key,
                          child.value ? child.value : null
                        )
                      }
                    >
                      {child.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ContextMenu;
