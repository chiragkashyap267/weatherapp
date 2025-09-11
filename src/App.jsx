import { useState } from "react";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import Forecastly from "./assets/ForeCastly.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CloudIcon from '@mui/icons-material/Cloud';

function App() {
  const [img, setimg] = useState(
    "https://images.unsplash.com/photo-1715731455730-f7d8a4992ebb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const api_key = "681ed830f12e46b8b07131619250209";

  const [city, setcity] = useState();
  const [data, setdata] = useState("your result will appear here");
  const [data2, setdata2] = useState("");
  const [data3, setdata3] = useState("");
  return (
    <div>
      <div className="container">
        <div className="header">
          <div>
            <img className="logo" src={Forecastly} alt="logo" />
          </div>

          <div className="madeby">
            A weather forecasting web app Made by chiragkashyaprajput
          </div>

          <div className="searcharea">
            <input
              className="form-control"
              placeholder="enter city name here"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
            <SearchIcon />
            <button
              onClick={async () => {
                let data = await fetch(
                  `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
                );
                const response = await data.json();
                console.log(response);
                console.log(response.location.country);
                console.log(response.location.name);
                console.log(response.location.region);
                console.log(response.current.temp_c);
                console.log(response.current.condition.text);
                console.log(response.current.condition.icon);

                setdata(
                  <>
                    <LocationOnIcon /> {response.location.country} | City:{" "}
                    {response.location.name} | Region:{" "}
                    {response.location.region}
                  </>
                );

                setdata2(
                  <>
                  <DeviceThermostatIcon /> 
                    {response.current.temp_c }&nbsp;
                    &#8451; &nbsp;  &nbsp;
                     <CloudIcon /> &nbsp;
                    {response.current.cloud}
                    </>
                );

                setdata3(" \u00A0 \u00A0 \u00A0  Feels like " +   response.current.condition.text);

                const imgchange2 = () => {
                  if (response.current.condition.text === "Clear") {
                    setimg(
                      "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (
                    response.current.condition.text === "Partly cloudy"
                  ) {
                    setimg(
                      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (response.current.condition.text === "Overcast") {
                    setimg(
                      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (response.current.condition.text === "Mist") {
                    setimg(
                      "https://images.unsplash.com/photo-1664676848304-bf32d4ea32e8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (
                    response.current.condition.text === "Light rain shower"
                  ) {
                    setimg(
                      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (
                    response.current.condition.text === "Patchy rain possible"
                  ) {
                    setimg(
                      "https://images.unsplash.com/photo-1526676033766-4e7b6f2a6e5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (
                    response.current.condition.text === "Light drizzle"
                  ) {
                    setimg(
                      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (response.current.condition.text === "Heavy rain") {
                    setimg(
                      "https://images.unsplash.com/photo-1526676033766-4e7b6f2a6e5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (response.current.condition.text === "Fog") {
                    setimg(
                      "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else if (response.current.condition.text === "Sunny") {
                    setimg(
                      "https://images.unsplash.com/photo-1621431735623-95fcba6b89ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  } else {
                    setimg(
                      "https://images.unsplash.com/photo-1715731455730-f7d8a4992ebb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                  }
                };

                imgchange2();

                // const imgchange = () => {

                //     if (response.current.temp_c <= 10) {
                //     setimg(
                //       "https://plus.unsplash.com/premium_photo-1670347627514-07a3d37e0670?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                //     );
                //   } else if (response.current.temp_c <= 25) {
                //     setimg(
                //       "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                //     );
                //   } else if (response.current.temp_c <= 30) {
                //     setimg(
                //       "https://images.unsplash.com/photo-1643662411936-e459132ac82b?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                //     );
                //   } else {
                //     setimg(
                //       "https://images.unsplash.com/photo-1715731455730-f7d8a4992ebb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                //     );
                //   }
                // };

                // imgchange();
              }}
              className="btn btn-primary"
            >
              search{" "}
            </button>
          </div>
        </div>

        <div className="body">
          <img className="bodyimg" src={img} />
        </div>

        <div className="results">
          <div className="resultone">
            <div className="overlay"> {data} </div>
            <br></br>
            <div className="overlay">{data2} </div>
          </div>
          <div className="overlay"> <i> {data3} </i></div>
          <div className="overlay"> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
