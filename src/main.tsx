import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./pages/App.tsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";

import StudyGuide from "./pages/study/StudyGuide.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import ChartPage from "./pages/ChartPage.tsx";
// import Hourly from "./pages/Hourly.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="carousel" element={<StudyGuide />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="charts" element={<ChartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
