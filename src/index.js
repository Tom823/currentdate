import React from "react";
import ReactDOm from "react-dom";

const name = "Thomas Gezahegn";
const currentDate = new Date();

const year = currentDate.getFullYear();

ReactDOm.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
