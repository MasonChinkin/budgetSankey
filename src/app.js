import "./app.scss";
import * as d3 from "d3";
import { newData } from "./js/utils";
import { drawBars } from "./js/bars";
import { drawSlider } from "./js/slider";
import { drawLines } from "./js/lines";
import { drawSankey, drawDeficit } from "./js/sankey";

document.addEventListener("DOMContentLoaded", () => {
  drawDashboard();

  // WIP: NOT REMOVING CONSISTENTLY
  // window.addEventListener('resize', drawDashboard)
});

const drawDashboard = () => {
  d3.select("#visualization-container").selectAll("svg").remove();

  // absolute path for github pages
  d3.csv("data/us-budget-sankey-main.csv").then((csv) => {
    // main
    d3.csv("data/us-budget-sankey-deficit.csv").then((deficit) => {
      // deficit
      d3.csv("data/us-budget-sankey-bars.csv").then((barData) => {
        // bars

        newData(csv, deficit, thisYear);
        drawBars(barData);
        drawSankey();
        drawDeficit();
        drawSlider();
        drawLines();
      });
    });
  });
};
