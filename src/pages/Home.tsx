import { useEffect, useState } from "react";
import { getEmbedUrl } from "../api/quicksight";
import { useAppSelector, useAppDispatch } from "../hooks";
import { JsonError } from "../types";
import { setEmbedUrl } from "../features/appSlice";
import LoadingIndicator from "../components/loadingIndicators/LoadingIndicator";
import logo from "../assets/logo_black.svg";

const Home = () => {
  const context = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentHeight(window.innerHeight);
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Make sure to replace the current allowed domains in quicksight.py in goliath repo
  // Change it back when pulling/pushing => to be safe
  // AllowedDomains=['http://localhost:5173', 'https://www.datacashreg.com', 'http://localhost:5174'],
  useEffect(() => {
    getEmbedUrl(context.quickSightUrl, context.email, context.api_key)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setEmbedUrl(j.embed_url));
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching embed URL:", err);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-bkg">
      {context.embedUrl ? (
        <>
          <div id="header"></div>
          <div id="body" className="h-screen w-full flex items-start">
            <iframe
              style={{
                height: `${currentHeight - 56}px`,
                width: `${currentWidth}px`,
              }}
              title="QuickSight Dashboard"
              src={context.embedUrl}
              allowFullScreen
            />
          </div>
          <div id="footer"></div>
        </>
      ) : (
        <div className="h-[calc(100vh-56px)] flex flex-col justify-center items-center">
          <img className="h-56" src={logo} alt="Mikto" />
          <div className="relative bg-white min-h-24 mt-2 p-4 rounded-lg shadow-lg">
            <p className="text-content text-[17px]">
              Please wait while we load your dashboard...
            </p>
            <LoadingIndicator message="" className="mt-6" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
