import React from "react";
import loading from "../images/planet.gif";
import "../CssStyles/Loading.css";

const Loading = () => {
  return (
    <div className="containerA1">
      <div className="containerLoading">
        <p id="activityTitle">Loading...</p>
        <img src={loading} alt="Loading" />
      </div>
    </div>
  );
};

export default Loading;