import React from "react";
import dateFormat from "../helpers/dateFormat";

export default function Contents({ current, past }) {
  console.log(past);
  let season, sol, day, min, max;
  if (current === null) {
    current = {};
    past = {};
  } else {
    season = current.season;
    sol = current.sol;
    day = current.day;
    min = current.min;
    max = current.max;

    past.sol_keys.map(data => {
      let sol = data;
      let day = dateFormat(past[data].First_UTC);
      let min = past[data].AT.min;
      let max = past[data].AT.max;
      console.log(past[data]);
      return (
        <div className="contents__past--container">
          <div className="contents__past--container-column">
            <p></p>
          </div>
          <div className="contents__past--container-column"></div>
        </div>
      );
    });
  }

  return (
    <div className="contents">
      <div className="contents__container">
        <h1>A weather log for Martians.</h1>
        <h3>{`Season: ${season}`}</h3>
      </div>
      <div className="contents__current">
        <div className="contents__current--row">
          <h2>{`Sol ${sol}`}</h2>
          <h2>{day}</h2>
        </div>
        <div className="contents__current--row">
          <h2>High: {max}&deg;F</h2>
          <h2>Low: {min}&deg;F</h2>
        </div>
      </div>
    </div>
  );
}
