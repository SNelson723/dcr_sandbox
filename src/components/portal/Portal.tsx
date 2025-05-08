import { createPortal } from "react-dom";
import { getDeptItems, getSubDeptItems } from "../../api/hourly";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";

interface PortalProps {
  title: string;
  className?: string;
  isShowing: boolean;
  onClose: () => void;
}

const Portal = ({ title, className = "", isShowing, onClose }: PortalProps) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const { portalType, selectedDept, selectedSubDept } = useAppSelector((state) => state.hourly);

  useEffect(() => {
    if (portalType === "Dept") {
      getDeptItems(url, '').then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setDeptItems(j.items));
        }
      });
    } else if (portalType === "Sub Dept") {
      getSubDeptItems(selectedSubDept).then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setSubDeptItems(j.items));
        }
      });
    }
  }, [portalType, selectedDept, selectedSubDept]);
  
  if (!isShowing) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 bg-black/25 flex items-center justify-center`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 font-semibold text-center border-b border-b-black">
          <span>{portalType} Items: </span>
          <span>{title}</span>
        </div>

        {/* Data content here */}
        <div className={`${className}`}>

        </div>
      </div>
    </div>,
    document.body
  );
};

export default Portal;
