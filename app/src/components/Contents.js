import React from "react";

export default function Contents(props) {
  console.log(props);
  let currentSeason = props.season;
  let currnetSol = props.sol;
  return (
    <div className="contents">
      <div className="contents__container">
        <h1>A weather log for Martians.</h1>
        <h3>{`Season: ${currentSeason}`}</h3>
      </div>
      <div className="contents__current">
        <h2>{`Sol ${currnetSol}`}</h2>
      </div>
    </div>
  );
}
