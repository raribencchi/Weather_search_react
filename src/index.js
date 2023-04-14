import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";
import WSearch from "./WSearch";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="weatherSearch">
    <h1>Weather App</h1>
    <StrictMode>
      <WSearch />
      <WeatherSearch />
    </StrictMode>
  </div>
);
