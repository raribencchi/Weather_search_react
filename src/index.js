import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";


import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="weatherSearch">
    <h1>Weather App</h1>
    <form id = "search-form" className = "mb-3">
  <div className="row">
    <div className="col-9">
    <input type="search"
    placeholder="Type a city..."
    className="form-control"
    id ="city-input"
    autocomplete="off"/>
    </div>
    <div className="col-3">
    <input type="submit"
    value="Search"
    className="btn btn-primary w-100 shadow-xl bg-gradient" />
    </div>
  </div>
  </form>
  <div className="overview">
  <h1 id="city"></h1>
<ul>
<li> Last Updated: <span id = "date"> </span> </li>
<li id="description"></li>
</ul>
</div>
    <StrictMode>
          <WeatherSearch />
          </StrictMode>
          
  </div>
);
