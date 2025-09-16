import { BellIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const TitleBar = () => {
  return (
    <div className="h-[56px] shadow-lg z-20 w-full pl-48 flex items-center justify-between">
      <div className="text-sm font-medium pl-4">Welcome Stephen</div>
      <div className="flex items-center gap-8">
        <BellIcon className="w-6 cursor-pointer hover:text-blue-500 transition-all duration-200" />
        <div className="px-10 text-sm font-medium border-l border-slate-300 h-[26px] flex items-center gap-2">
          <span>snelson</span>
          <ChevronDownIcon
            className="w-3 stroke-slate-400 mt-1"
            strokeWidth={4}
          />
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
