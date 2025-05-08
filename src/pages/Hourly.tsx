import TopHourlyCats from "../components/widgets/TopHourlyCats";
import TopHourlyDepts from "../components/widgets/TopHourlyDepts";
import TopHourlySubDepts from "../components/widgets/TopHourlySubDepts";
import TopHourlyTenders from "../components/widgets/TopHourlyTenders";
import HourlyItems from "../components/widgets/HourlyItems";
import { useRef } from "react";
import Portal from "../components/portal/Portal";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setPortalTitle,
  setPortalType,
  setSelectedDept,
  setSelectedSubDept,
  setShowPortal,
} from "../features/hourlySlice";

interface HourlyProps {
  title?: string;
}

const Hourly = ({ title = "Hourly" }: HourlyProps) => {
  const { showPortal, portalTitle } = useAppSelector((state) => state.hourly);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setShowPortal(false));
    dispatch(setPortalTitle(""));
    dispatch(setPortalType(""));
    dispatch(setSelectedDept(""));
    dispatch(setSelectedSubDept(""));
  };
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-[65vh] max-h-[65vh] animate-fadeIn">
      <Portal title={portalTitle} onClose={onClose} isShowing={showPortal} />
      <div
        ref={ref}
        id={title}
        className="grid grid-cols-4 gap-2 items-center justify-center data-[query-id=hourly]"
      >
        <TopHourlyDepts />
        <TopHourlySubDepts />
        <TopHourlyTenders />
        <HourlyItems />
        <TopHourlyCats />
      </div>
    </div>
  );
};

export default Hourly;
