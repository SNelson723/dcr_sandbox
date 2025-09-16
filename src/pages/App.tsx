import { Outlet } from "react-router";
import NavMenu from "./NavMenu";
import TitleBar from "./TitleBar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[rgb(240,245,255)] text-themeText">
      <div className="w-full flex flex-col items-center">
        <NavMenu />
        <TitleBar />
        <div className="flex-1 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
