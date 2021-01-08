import * as d3 from "d3";
import * as d3Sankey from "./assets/d3sankey";
import { fontScale, highlight, newYearTransition, format } from "./utils";

export function drawSankey() {
  // set the dimensions and margins of the graph
  window.sankeyMargin = {
    top: 30,
    right: 10,
    bottom: 10,
    left: 10,
  };

  window.sankeyWidth =
    sankeyContainer.offsetWidth - sankeyMargin.left - sankeyMargin.right;
  window.sankeyHeight = 375 - sankeyMargin.top - sankeyMargin.bottom;

  // append the svg object to the body of the page
  window.sankeySvg = d3
    .select("#sankeyContainer")
    .append("svg")
    .attr("width", sankeyWidth + sankeyMargin.left + sankeyMargin.right)
    .attr("height", sankeyHeight + sankeyMargin.top + sankeyMargin.bottom)
    .attr("class", "sankeyCanvas")
    .append("g")
    .attr("transform", `translate(${sankeyMargin.left},${sankeyMargin.top})`);

  // Set the sankey diagram properties
  window.sankey = d3Sankey
    .d3sankey()
    .nodeWidth(60)
    .nodePadding(20)
    .size([sankeyWidth, sankeyHeight]);

  const path = sankey.link();

  sankey.nodes(nodes).links(links).layout(1000);

  fontScale.domain(d3.extent(nodes, (d) => d.value));

  // add in the links
  window.link = sankeySvg
    .append("g")
    .selectAll(".link")
    .data(links, (d) => d.id)
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", path)
    .style("stroke", (d) => {
      if (d.type == "Revenue") {
        return "green";
      } else if (d.type == "Spending") {
        return "red";
      } else {
        return "grey";
      }
    })
    .style("stroke-width", (d) => Math.max(1, d.dy))
    .attr("key", (d) =>
      d.type == "Revenue"
        ? d.source.name.split(" ").join("_")
        : d.target.name.split(" ").join("_")
    )
    .on("mouseover", highlight);

  // add in the nodes
  window.node = sankeySvg
    .append("g")
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  // add the rectangles for the nodes
  node
    .append("rect")
    .attr("height", (d) => (d.dy < 0 ? 0.1 : d.dy))
    .attr("width", sankey.nodeWidth())
    .attr("key", (d) => d.name.split(" ").join("_"))
    .attr("value", (d) => d.value)
    .attr("class", "nodeRect")
    .on("mouseover", highlight);

  // title for the nodes
  node
    .append("text")
    .attr("x", -6)
    .attr("y", (d) => d.dy / 2)
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .attr("transform", null)
    .style("font-size", (d) => Math.floor(fontScale(d.value)) + "px")
    .text((d) => d.name)
    .attr("class", "nodeLabel")
    .filter((d) => d.x < sankeyWidth / 2)
    .attr("x", 6 + sankey.nodeWidth())
    .attr("text-anchor", "start");

  // % for the nodes
  node
    .append("text")
    .attr("x", 30)
    .attr("y", (d) => d.dy / 2)
    .attr("dy", ".35em")
    .attr("class", "nodePercent")
    .text((d) => `${format(d.value)}%`)
    .filter((d) => d.value <= 1 || d.node == 20) //do spending seperately to correctly show surplus
    .style("opacity", 0);

  //PERCENT OF GDP
  sankeySvg
    .append("text")
    .attr("x", 0)
    .attr("y", -5)
    .attr("dy", "0em")
    .text("Percent of GDP")
    .attr("class", "percent");

  // % for spending in times of surplus using seperate data
  node
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", 30)
    .attr("y", (d) => d.dy / 2)
    .style("font-size", 18)
    .attr("dy", ".35em")
    .filter((d) => d.node == 20)
    .text(() => format(thisYearDeficit[0].spending) + "%")
    .attr("class", "spendingNodePercent");
}

export function updateSankey() {
  const path = sankey.link();

  sankey.nodes(nodes).links(links).layout(1000);

  sankey.relayout();
  fontScale.domain(d3.extent(nodes, (d) => d.value));

  // transition links
  sankeySvg
    .selectAll(".link")
    .data(links)
    .transition("newSankey")
    .duration(newYearTransition)
    .attr("d", path)
    .style("stroke-width", (d) => Math.max(1, d.dy));

  // transition nodes
  sankeySvg
    .selectAll(".node")
    .data(nodes)
    .transition("newSankey")
    .duration(newYearTransition)
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  // transition rectangles for the nodes
  sankeySvg
    .selectAll(".node rect")
    .data(nodes)
    .transition("newSankey")
    .duration(newYearTransition)
    .attr("height", (d) => (d.dy < 0 ? 0.1 : d.dy))
    .attr("value", (d) => d.value);

  // transition title text for the nodes
  sankeySvg
    .selectAll(".nodeLabel")
    .data(nodes)
    .transition("newSankey")
    .duration(newYearTransition)
    .style("font-size", (d) => `${Math.floor(fontScale(d.value))}px`)
    .attr("y", (d) => d.dy / 2);

  // transition % text for the nodes
  sankeySvg
    .selectAll(".nodePercent")
    .data(nodes)
    .transition("newSankey")
    .duration(newYearTransition)
    .text((d) => `${format(d.value)}%`)
    .attr("y", (d) => d.dy / 2)
    .style("opacity", 1)
    .filter((d) => d.value < 1 || d.node == 20) //do spending seperately to correctly show surplus
    .style("opacity", 0);

  //remove old spending %
  sankeySvg.selectAll(".spendingNodePercent").remove();

  // % for spending in times of surplus using seperate data
  node
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", 30)
    .attr("y", (d) => d.dy / 2)
    .style("font-size", 18)
    .attr("dy", ".35em")
    .filter((d) => d.node == 20)
    .text(() => format(thisYearDeficit[0].spending) + "%")
    .attr("class", "spendingNodePercent");
}

export function drawDeficit() {
  //remove old, if any
  d3.selectAll(".deficit").remove();
  d3.selectAll(".deficitLabel").remove();

  //highlight deficit
  window.barHeight = d3.select("rect[key=Spending]").attr("height");
  window.barVal = d3.select("rect[key=Spending]").attr("value");
  window.deficitVal = thisYearDeficit[0].deficit;

  //get deficit bar size with ratio of spending value to bar height
  window.deficitBarRatio = Math.floor((barHeight * deficitVal) / barVal);

  window.deficitBar = d3
    .select("rect[key=Spending]")
    .select(function () {
      return this.parentNode;
    })
    .append("rect")
    .attr("height", () =>
      deficitBarRatio < 0 ? -deficitBarRatio : deficitBarRatio
    )
    .attr("width", sankey.nodeWidth())
    .attr("y", (d) =>
      deficitBarRatio < 0 ? d.dy + deficitBarRatio : d.dy - deficitBarRatio
    )
    .style("fill", () => (deficitBarRatio < 0 ? "red" : "blue"))
    .attr("class", "deficit")
    .style("opacity", 0)
    .transition(newYearTransition)
    .style("opacity", 0.8);

  sankeySvg
    .append("text")
    .attr("x", sankeyWidth / 2)
    .attr("y", sankeyHeight * 0.92)
    .attr("class", "deficitLabel")
    .text(() =>
      thisYearDeficit[0].deficit < 0
        ? format(-thisYearDeficit[0].deficit) + "% Deficit"
        : format(thisYearDeficit[0].deficit) + "% Surplus"
    )
    .style("fill", () => (deficitBarRatio < 0 ? "red" : "blue"))
    .style("opacity", 0)
    .transition(newYearTransition)
    .style("opacity", 0.8);
}
