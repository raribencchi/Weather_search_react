import React from 'react';
import Axios from 'axios';

export default function WSearchField() {
    return (
<div className="container ">
    <div className="weather-app-wrapper">
      <div className="weather-app p-5">
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
        <div className = "row">
        <div className ="col-md-6">
        <div className="clearfix weather-temperature" >
          <img src = " "
           alt ="Clear"
           id = "icon"
           className="float-left"/>
          <div className="float-left">
         <strong id="temperature"></strong> 
         <span className="units"> <a href="#" id = "celsius-link" className="active">&#176C </a> | 
         <a href="#" id="fahrenheit-link" className="text-dark text-decoration-none">&#176F</a></span>
        </div>
        </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Humidity: <span id="humidity"></span> % </li>
            <li>Wind: <span id = "wind"></span> Km/h</li>
          </ul>
        </div>
        <div className="container text-center weather-forecast" id="forecast" >
        <div className="d-fex justify-content-evenly p-6">
          </div>
        </div>
        </div>
      </div>
    </div>
      <strong className="mycode">
        <a href = "https://github.com/raribencchi/WK8-FinalProject" target="_blank">
          Open Source Code: </a>  By Rashmi Aribenchi </strong>
    </div>
    );
}