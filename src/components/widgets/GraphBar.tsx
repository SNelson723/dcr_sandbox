import { useEffect, useState } from "react";

type ProgressBarProps = {
  current: number;
  max: number;
  className?: string;
};

const GraphBar = ({ current, max, className = "" }: ProgressBarProps) => {
  const [progress, setProgress] = useState<number>(0);

  const getClampedPercent = (val: number) => {
    if (max <= 0) return 0;
    const percent = Math.round((Math.max(0, Math.min(val, max)) / max) * 100);
    return Math.min(100, Math.max(0, percent));
  };

  useEffect(() => {
    setProgress(getClampedPercent(current));
  }, [current, max]);

  return (
    <div className="relative h-8 w-full rounded-full overflow-hidden">
      <div
        style={{ width: `${progress}%` }}
        className={`absolute h-full transition-all rounded-r-full duration-300 ease-in-out ${className}`}
      ></div>
    </div>
  );
};

export default GraphBar;
