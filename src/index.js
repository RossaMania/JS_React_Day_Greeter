//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentHour = currentDate.getHours();
const customStyle = {
  color: " "
};

if (currentHour < 12) {
  var Greeting = "Good morning!";
  customStyle.color = "red";
}

if (currentHour >= 12 && currentHour < 18) {
  var Greeting = "Good afternoon!";
  customStyle.color = "green";
}

if (currentHour >= 18) {
  var Greeting = "Good evening!";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {Greeting}
    </h1>
    <h1 style={customStyle}>{currentHour}</h1>
  </div>,
  document.getElementById("root")
);
