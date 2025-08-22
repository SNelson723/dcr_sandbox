import { useState } from "react";
import TestTable from "./TestTable";
import { ContextEvent, Handlers } from "../../types";
import ContextMenu from "../../components/ContextMenu";
import { upcOptions, chartOptions } from ".";
import { useAppDispatch } from "../../hooks";
import { setMenuPosition } from "../../features/contextMenuSlice";
import { setSelectedRecord } from "../../features/testingSlice";

const Testing = () => {
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState(chartOptions);

  const handlers: Handlers = {
    copy: () => console.log("copy"),
    exportVisual: () => console.log("export visual"),
    reset: () => console.log("reset"),
    mode: (mode: string) => console.log("mode", mode),
    exportAll: () => console.log("export all"),
    test: () => console.log("test"),
  };

  const handleRightClick = (event: ContextEvent, item: any | undefined) => {
    event.preventDefault();
    const tagName = event.currentTarget.tagName.toLowerCase();
    if (item) dispatch(setSelectedRecord(item));
    setOptions(tagName === "tr" ? upcOptions : chartOptions);
    dispatch(setMenuPosition({ x: event.pageX, y: event.pageY }));
  };

  return (
    <div className="flex flex-col py-12 h-screen">
      <div
        className="px-12 mb-12 text-2xl font-medium bg-[#10b981] py-2 rounded-lg shadow-lg"
        onContextMenuCapture={(e) => handleRightClick(e, undefined)}
      >
        <h1 className="mb-4">Testing Page</h1>
        <p className="mb-4">This is a placeholder for testing purposes.</p>
      </div>
      <TestTable onRightClick={handleRightClick} />
      <ContextMenu
        handlers={handlers}
        options={options}
        className="hover:bg-blue-200"
      />
    </div>
  );
};

export default Testing;
