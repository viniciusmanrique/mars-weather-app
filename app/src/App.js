import React, { Component } from "react";
import Contents from "./components/Contents";
import "./styles/main.css";
import axios from "axios";
import dateFormat from "./helpers/dateFormat";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSol: null,
      currentSeason: null,
      currentEarthDay: null
    };
  }
  async componentDidMount() {
    const api_key = "ghJNmFOs0h7dUNTchYuHRb1DHl3Xd5MDtnpDx2aT";
    let dataObjects = await axios.get(
      `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`
    );
    let data = dataObjects.data;
    //Get current sol (days on Mars)
    let sol_keys = data.sol_keys;
    let currentSol = sol_keys[sol_keys.length - 1];
    let currentSeason = data[currentSol].Season;
    let currentEarthDay = data[currentSol].First_UTC;

    this.setState({
      currentSol: currentSol,
      currentSeason: currentSeason,
      currentEarthDay: dateFormat(currentEarthDay)
    });
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Contents
          season={this.state.currentSeason}
          sol={this.state.currentSol}
        />
      </div>
    );
  }
}

export default App;
