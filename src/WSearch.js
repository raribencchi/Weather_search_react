import React, { useState } from "react";

export default function WSearch() {
    return (
<div class="container ">
    <div class="weather-app-wrapper">
      <div class="weather-app p-5">
      <form id = "search-form" class = "mb-3">
        <div class="row">
          <div class="col-9">
          <input type="search"
          placeholder="Type a city..."
          class="form-control"
          id ="city-input"
          autocomplete="off"/>
          </div>
          <div class="col-3">
          <input type="submit"
          value="Search"
          class="btn btn-secondary w-100 shadow-xl bg-gradient" />
          </div>
        </div>
        </form>
        <div class="overview">
          <h1 id="city"></h1>
        <ul>
        <li> Last Updated: <span id = "date"> </span> </li>
        <li id="description"></li>
        </ul>
      </div>
      <div class = "row">
        <div class ="col-md-6">
        <div class="clearfix weather-temperature" >
          <img src = " "
           alt ="Clear"
           id = "icon"
           class="float-left"/>
          <div class="float-left">
         <strong id="temperature"></strong> 
         <span class="units"> <a href="#" id = "celsius-link" class="active">&#176C </a> | 
         <a href="#" id="fahrenheit-link" class="text-dark text-decoration-none">&#176F</a></span>
        </div>
        </div>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Humidity: <span id="humidity"></span> % </li>
            <li>Wind: <span id = "wind"></span> Km/h</li>
          </ul>
        </div>
        <div class="container text-center weather-forecast" id="forecast" >
        <div class="d-fex justify-content-evenly p-6">
          </div>
        </div>
        </div>
      </div>
    </div>
      <strong class="mycode">
        <a href = "https://github.com/raribencchi/WK8-FinalProject" target="_blank">
          Open Source Code: </a>  By Rashmi Aribenchi </strong>
    </div>
    );
}