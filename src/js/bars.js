import * as d3 from "d3";
import { stackMin, stackMax } from "./utils";

export function drawBars(barData) {
  // set the dimensions and margins of the graph
  let barsMargin = {
    top: 10,
    right: 5,
    bottom: 5,
    left: 5,
  };

  let barsWidth =
    barsContainer.offsetWidth - barsMargin.left - barsMargin.right;
  let barsHeight = 80 - barsMargin.top - barsMargin.bottom;

  // append the svg object to the body of the page
  let barsSvg = d3
    .select("#barsContainer")
    .append("svg")
    .attr("width", barsWidth + barsMargin.left + barsMargin.right)
    .attr("height", barsHeight + barsMargin.top + barsMargin.bottom)
    .attr("class", "barsCanvas")
    .append("g")
    .attr(
      "transform",
      "translate(" + barsMargin.left + "," + barsMargin.top + ")"
    );

  barData.forEach((d) => (d.year = +d.year));

  const stack = d3.stack();
  const keys = barData.columns.slice(2);
  stack.keys(keys).offset(d3.stackOffsetDiverging);

  //data, stacked
  let series = stack(barData);

  //scales
  let barsXScale = d3
    .scaleBand()
    .domain(barData.map((d) => d.year))
    .range([barsMargin.left, barsWidth - barsMargin.right])
    .paddingInner(0.1)
    .paddingOuter(0.75);

  let barsYScale = d3
    .scaleLinear()
    .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
    .range([barsHeight - barsMargin.bottom, barsMargin.top])
    .nice();

  //group data rows
  const bars = barsSvg
    .selectAll("#bars")
    .data(series)
    .enter()
    .append("g")
    .attr("id", "bars")
    .attr("class", (d, i) => d.key);

  //add rect for each data value
  window.rects = bars
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("x", (d, i) => barsXScale(d.data.year))
    .attr("y", (d) => barsYScale(d[1]))
    .attr("height", (d) => barsYScale(d[0]) - barsYScale(d[1]))
    .attr("class", "bar")
    .attr("year", (d) => d.data.year)
    .attr("width", barsXScale.bandwidth)
    .style("fill", function (d) {
      return d3.select(this.parentNode).attr("class") === "Revenue"
        ? "green"
        : "red";
    })
    .style("opacity", (d) => (d.data.year === thisYear ? 0.8 : 0.6))
    .style("stroke", (d) => (d.data.year === thisYear ? "black" : "none"))
    .style("stroke-width", (d) => (d.data.year === thisYear ? "2px" : "none"));

  //net line//
  //define line
  let line = d3
    .line()
    .x((d) => barsXScale(d.year) + barsXScale.bandwidth() / 2)
    .y((d) => barsYScale(d.Balance));

  //create line
  barsSvg.append("path").datum(barData).attr("id", "line").attr("d", line);

  //labels
  barsSvg
    .append("text")
    .attr("x", barsWidth / 2)
    .attr("y", barsMargin.top * 0.5)
    .attr("dy", "0em")
    .text("Revenue/Surplus")
    .attr("class", "bar-labels");

  barsSvg
    .append("text")
    .attr("x", barsWidth / 2)
    .attr("y", barsHeight + barsMargin.bottom * 0.5)
    .attr("dy", "0em")
    .attr("class", "bar-labels")
    .text("Spending/Deficit");
}

export function updateBars(thisYear) {
  const transition = 50;

  rects
    .transition()
    .duration(transition)
    .style("opacity", (d) => (d.data.year === thisYear ? 0.8 : 0.6))
    .style("stroke", (d) => (d.data.year === thisYear ? "black" : "none"))
    .style("stroke-width", (d) => (d.data.year === thisYear ? "2px" : "none"));
}
