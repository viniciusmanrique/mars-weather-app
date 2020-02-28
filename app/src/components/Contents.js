import React from "react";
import dateFormat from "../helpers/dateFormat";

export default function Contents({ current, past }) {
  let contents = [];
  let season, sol, day, min, max;

  if (current === null) {
    current = {};
    past = {};
  } else {
    season = current.season;
    sol = current.sol;
    day = current.day;
    min = Math.round(current.min);
    console.log(min);
    max = Math.round(current.max);

    past.sol_keys.map(data => {
      let sol = data;
      let day = dateFormat(past[data].Last_UTC);
      console.log(past[data].First_UTC);
      let min = past[data].AT.mn;
      let max = past[data].AT.mx;
      let content = (
        <div className="contents__past--container">
          <div className="contents__past--container-column">
            <p className="day">Sol {sol}</p>
            <p className="day">{day}</p>
          </div>
          <div className="contents__past--container-column">
            <p>High: {max}&deg;F</p>
            <p>Low: {min}&deg;F</p>
          </div>
        </div>
      );
      contents.push(content);
      return contents;
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
          <h2 id="current-day">{day}</h2>
        </div>
        <div className="contents__current--row">
          <h3>High: {max}&deg;F</h3>
          <h3>Low: {min}&deg;F</h3>
        </div>
      </div>

      <div className="contents__past">{contents}</div>
    </div>
  );
}
