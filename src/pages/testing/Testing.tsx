import TestTable from "./TestTable";

const Testing = () => {
  return (
    <div className="flex flex-col py-12 h-screen">
      <div className="px-12 mb-12 text-2xl font-medium bg-[#10b981] py-2 rounded-lg shadow-lg">
        <h1 className="mb-4">Testing Page</h1>
        <p className="mb-4">This is a placeholder for testing purposes.</p>
      </div>
      <TestTable />
    </div>
  );
};

export default Testing;
