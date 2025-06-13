import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const { embedUrl } = useAppSelector((state) => state.app);

  return (
    <div id="quicksight" className="w-screen px-4 mt-10">
      <iframe
        className="w-full h-[80vh]"
        title="QuickSight Dashboard"
        src={embedUrl}
        allowFullScreen
      />
    </div>
  );
};

export default Dashboard;
