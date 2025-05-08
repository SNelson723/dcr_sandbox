import { createPortal } from "react-dom";

interface PortalProps {
  id: string;
  className?: string;
  // data: T[];
  isShowing: boolean;
  onClose: () => void;
}

const Portal = ({ id, className = "", isShowing, onClose }: PortalProps) => {
  if (!isShowing) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 bg-black/25 flex items-center justify-center ${className}`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4"
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 font-semibold text-center border-b border-b-black">
          {id}
        </div>
        {/* <div className="grid grid-cols-4 gap-2">
          {data.map((item, index) => (
            <div key={index} className="rounded-lg shadow-lg">
              <div className="border-b flex justify-between items-center py-1 px-3">
                <div className="text-sm">{item.name}</div>
                <div className="text-sm text-center">{item.value}</div>
              </div>
              <div className="text-lg text-center font-semibold">
                {item.value}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>,
    document.body
  );
};

export default Portal;
