import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App.tsx";
import Home from "./pages/Home.tsx";
import StudyGuide from "./pages/study/StudyGuide.tsx";
import ChartPage from "./pages/ChartPage.tsx";
import ChartPageTwo from "./pages/ChartPageTwo.tsx";
import NavMenu from "./pages/NavMenu.tsx";
import Testing from "./pages/Testing.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="carousel" element={<StudyGuide />} />
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="charts" element={<ChartPage />} />
            <Route path="chartstwo" element={<ChartPageTwo />} />
            <Route path="navmenu" element={<NavMenu />} />
            <Route path="testing" element={<Testing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
