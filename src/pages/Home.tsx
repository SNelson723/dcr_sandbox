import { useEffect } from "react";
import { getEmbedUrl } from "../api/quicksight";
import { useAppSelector, useAppDispatch } from "../hooks";
import { JsonError } from "../types";
import { setEmbedUrl } from "../features/appSlice";

const Home = () => {
  const context = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getEmbedUrl(context.quickSightUrl, context.email, context.api_key)
      .then((resp) => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setEmbedUrl(j.embed_url))
        }
      })
      .catch((err: JsonError) => {
        console.error("Error fetching embed URL:", err);
      });
  }, []);

  return (
    <div className="mt-12 w-screen flex flex-col items-center justify-center min-h-[60vh] text-themeText">
      <div>
        <div className="py-2 px-4 border-b-2 mb-2 border-b-themeText text-2xl font-semibold text-center mx-auto">
          Home page
        </div>
        <div className="mx-auto text-center py-2 text-xl">
          Welcome to Stephen's Sandbox Bitches
        </div>
      </div>
    </div>
  );
};

export default Home;
