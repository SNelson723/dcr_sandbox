import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils";

type ProgressBarProps = {
  current: number;
  max: number;
  min: number;
  className?: string;
};

type HeaderProps = { display: string; bg: string };
const HeaderDisplay = ({ display, bg }: HeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-3 w-3 rounded-full ${bg}`}></div>
      <div>{display}</div>
    </div>
  );
};

const ProgressBar = ({
  current,
  max,
  min,
  className = "",
}: ProgressBarProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [minProgress, setMinProgress] = useState<number>(0);
  const [maxProgress, setMaxProgress] = useState<number>(0);

  // Clamp for the bar fill (never over 100)
  const getClampedPercent = (val: number) => {
    if (max <= 0) return 0;
    const percent = Math.round((Math.max(0, Math.min(val, max)) / max) * 100);
    return Math.min(100, Math.max(0, percent));
  };

  useEffect(() => {
    setProgress(getClampedPercent(current));
    setMinProgress(getClampedPercent(min));
    setMaxProgress(getClampedPercent(max));
  }, [current, max, min]);

  return (
    <div className={className}>
      <div className="flex justify-between items-center text-content px-3">
        <HeaderDisplay
          display={formatCurrency(min.toString())}
          bg="bg-[#f97316]"
        />
        <HeaderDisplay
          display={formatCurrency(current.toString())}
          bg="bg-[#10b981]"
        />
        <HeaderDisplay
          display={formatCurrency(max.toString())}
          bg="bg-[#3b82f6]"
        />
      </div>
      <div className="relative h-7 w-full border-2 border-content rounded-full overflow-hidden">
        <div
          style={{ width: `${maxProgress}%` }}
          className={`absolute h-full transition-all rounded-r-full duration-300 ease-in-out bg-[#3b82f6]`}
        ></div>
        <div
          style={{ width: `${progress}%` }}
          className={`absolute h-full transition-all rounded-r-full duration-300 ease-in-out bg-[#10b981]`}
        ></div>
        <div
          style={{ width: `${minProgress}%` }}
          className={`absolute h-full transition-all rounded-r-full duration-300 ease-in-out bg-[#f97316]`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
