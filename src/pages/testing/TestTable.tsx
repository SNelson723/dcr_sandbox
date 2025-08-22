const TestTable = () => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b text-left">Test Name</th>
          <th className="py-2 px-4 border-b text-left">Status</th>
          <th className="py-2 px-4 border-b text-left">User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 border-b">Sample Test 1</td>
          <td className="py-2 px-4 border-b">Passed</td>
          <td className="py-2 px-4 border-b">User 1</td>
        </tr>
        <tr>
          <td className="py-2 px-4 border-b">Sample Test 2</td>
          <td className="py-2 px-4 border-b">Failed</td>
          <td className="py-2 px-4 border-b">User 2</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TestTable;
