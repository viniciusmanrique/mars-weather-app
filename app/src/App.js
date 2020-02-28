import React, { Component } from "react";
import Contents from "./components/Contents";
  import Slider from "./components/Slider";
import "./styles/main.css";
import axios from "axios";
import dateFormat from "./helpers/dateFormat";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: null,
      pastData: null
    };
  }
  async componentDidMount() {
    const api_key = "ghJNmFOs0h7dUNTchYuHRb1DHl3Xd5MDtnpDx2aT";
    let currentData = {};
    let pastData = [];
    let dataObjects = await axios.get(
      `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`
    );
    let data = dataObjects.data;
    //Get current sol (days on Mars)
    let sol_keys = data.sol_keys;
    let currentSol = sol_keys[sol_keys.length - 1];
    currentData.sol = currentSol;

    //Current season
    let currentSeason = data[currentSol].Season;
    currentData.season = currentSeason;

    //Current Earth Day
    let currentEarthDay = data[currentSol].First_UTC;
    currentData.day = dateFormat(currentEarthDay);

    //Get current atmospheric temperature
    let currentAT = data[currentSol].AT;
    let minTemp = currentAT.mn;
    currentData.min = Math.round(minTemp);
    let maxTemp = currentAT.mx;
    currentData.max = Math.round(maxTemp);

    //6 days before
    pastData = data;
    delete pastData[currentSol];
    pastData["sol_keys"].pop();

    this.setState({
      currentData: currentData,
      pastData: pastData
    });
    console.log(data, currentSol);
  }
  render() {
    return (
      <div className="App">
        <Contents current={this.state.currentData} past={this.state.pastData} />
      <Slider />

      </div>
    );
  }

}

export default App;
