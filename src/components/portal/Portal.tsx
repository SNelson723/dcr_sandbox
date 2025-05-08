import { createPortal } from "react-dom";
import { getDeptItems, getSubDeptItems } from "../../api/hourly";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDeptItems } from "../../features/hourlySlice";
import { useEffect } from "react";
import { formatCurrency } from "../../utils";

interface PortalProps {
  title: string;
  className?: string;
  isShowing: boolean;
  onClose: () => void;
}

const Portal = ({ title, className = "", isShowing, onClose }: PortalProps) => {
  const dispatch = useAppDispatch();
  const { url, date, selectedHour } = useAppSelector((state) => state.app);
  const { portalType, selectedDept, selectedSubDept, deptItems } =
    useAppSelector((state) => state.hourly);

  useEffect(() => {
    if (portalType === "Dept") {
      getDeptItems(url, date, selectedHour, selectedDept).then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setDeptItems(j.items));
        }
      });
    } else if (portalType === "Sub Dept") {
      getSubDeptItems(
        selectedSubDept,
        date,
        selectedHour,
        selectedSubDept
      ).then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setDeptItems(j.items));
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
        <div className="font-semibold flex border-b border-b-black">
          <span className="w-1/2">{portalType} Items: </span>
          <span className="w-1/4">{title}</span>
          <span className="w-1/4 text-right">Hour: {selectedHour}</span>
        </div>

        {deptItems.length > 0 ? (
          <div className={`${className} text-sm divide-y divide-gray-950 border-b border-b-black`}>
            {deptItems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1fr_1fr_0.5fr] gap-2 p-1 odd:bg-blue-200 even:bg-white"
              >
                <span className="truncate">{item.f1041}</span>
                <span className="text-right">{item.f254.split(" ")[0]}</span>
                <span className="text-right">{formatCurrency(item.f65)}</span>
                <span className="text-right">{item.f64}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
};

export default Portal;
