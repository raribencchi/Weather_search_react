import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";


import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="weatherSearch">
    <h1>Weather Search App</h1>
    
    <StrictMode>
    <WSearchfield />
      <WeatherSearch />
          </StrictMode>
          
  </div>
);
