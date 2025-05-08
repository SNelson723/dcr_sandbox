import { useEffect, useState } from "react";

type GraphBarProps = {
  current: number;
  max: number;
  className?: string;
  widget: string;
};

const GraphBar = ({ current, max, className = "", widget }: GraphBarProps) => {
  const [progress, setProgress] = useState<number>(0);

  const getClampedPercent = (val: number) => {
    if (max <= 0) return 0;
    const percent = Math.round((Math.max(0, Math.min(val, max)) / max) * 100);
    return Math.min(100, Math.max(0, percent));
  };

  useEffect(() => {
    setProgress(getClampedPercent(current));
  }, [current, max]);
  console.log(className);

  return (
    <div
      className={`relative h-8 w-full rounded-full border-2 border-black overflow-hidden text-right flex text-sm items-center ${
        widget == "dept" ? "bg-emerald-200" : "bg-blue-200"
      }`}
    >
      <div
        style={{ width: `${progress}%` }}
        className={`absolute h-full transition-all  duration-300 text-right ease-in-out ${className}`}
      ></div>
      <div className="absolute right-1">{progress}%</div>
    </div>
  );
};

export default GraphBar;
