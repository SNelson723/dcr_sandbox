import { useEffect, useState } from "react";
import TestTable from "./TestTable";
import { Handlers } from "../../types";
import ContextMenu from "../../components/ContextMenu";
import { upcOptions, chartOptions } from ".";

const Testing = () => {
  const [options, setOptions] = useState(chartOptions);
  useEffect(() => {
    setOptions(upcOptions);
    console.log("useEffect", options);
  }, []);

  const handlers: Handlers = {
    copy: () => console.log("copy"),
    exportVisual: () => console.log("export visual"),
    reset: () => console.log("reset"),
    mode: (mode: string) => console.log("mode", mode),
    exportAll: () => console.log("export all"),
    test: () => console.log("test"),
  };
  
  return (
    <div className="flex flex-col py-12 h-screen">
      <div className="px-12 mb-12 text-2xl font-medium bg-[#10b981] py-2 rounded-lg shadow-lg">
        <h1 className="mb-4">Testing Page</h1>
        <p className="mb-4">This is a placeholder for testing purposes.</p>
      </div>
      <TestTable />
      <ContextMenu handlers={handlers} options={chartOptions} />
    </div>
  );
};

export default Testing;
