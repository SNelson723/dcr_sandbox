interface TestTableProps {
  onRightClick?: (
    e: React.MouseEvent<HTMLTableRowElement>,
    record: any
  ) => void;
}

const dummyData = [
  { name: "Sample Test 1", status: "Passed", user: "User 1" },
  { name: "Sample Test 2", status: "Failed", user: "User 2" },
];

const TestTable = ({ onRightClick }: TestTableProps) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 select-none">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-left">Test Name</th>
          <th className="py-2 px-4 border-b text-left">Status</th>
          <th className="py-2 px-4 border-b text-left">User</th>
        </tr>
      </thead>
      <tbody className="cursor-pointer">
        {dummyData.map((record, index) => (
          <tr
            key={index}
            onContextMenuCapture={(e) => onRightClick?.(e, record)}
            className={`hover:bg-blue-200 transition-all duration-300`}
          >
            <td className="py-2 px-4 border-b">{record.name}</td>
            <td className="py-2 px-4 border-b">{record.status}</td>
            <td className="py-2 px-4 border-b">{record.user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TestTable;
