import * as d3 from "d3";

// format variables
export const formatNumber = d3.format(".1f"); // zero decimal places
export const format = (d) => formatNumber(d);

export const fontScale = d3.scaleLinear().range([14, 22]);

//transition times
export const newYearTransition = 800;
export const highlightTransition = 50;

window.thisYear = 2017;
window.key = 0; //initialize for highlighting purposes; gets redefines as 'income', 'payroll', etc on mouseover

export function newData(csv, deficit, thisYear) {
  window.thisYearCsv = csv.filter((d) => d["year"] == thisYear);
  thisYearCsv.forEach((d) => (d.dollars = +d.dollars));
  window.thisYearDeficit = deficit.filter((d) => d["year"] == thisYear);

  //create an array to push all sources and targets, before making them unique
  //because starting nodes are not targets and end nodes are not sources
  window.arr = [];
  thisYearCsv.forEach((d) => {
    arr.push(d.source);
    arr.push(d.target);
  });

  // create nodes array

  window.nodes = arr.filter(onlyUnique).map((thisYearCsv, i) => {
    return {
      node: i,
      name: thisYearCsv,
    };
  });

  // create links array
  window.links = thisYearCsv.map((thisYearCsv_row) => {
    return {
      source: getNode("source"),
      target: getNode("target"),
      value: +thisYearCsv_row.value,
      type: thisYearCsv_row.type, //to allow for proper keying
    };

    function getNode(type) {
      return nodes.filter(
        (node_object) => node_object.name == thisYearCsv_row[type]
      )[0].node;
    }
  });

  window.lineData = csv;
  lineData.forEach((d) => {
    d.year = +d.year;
    d.value = +d.value;
  });

  return {
    lineData,
    links,
    nodes,
    thisYearCsv,
    thisYearDeficit,
  };
}

export function highlight() {
  window.key = d3.select(this).attr("key");

  window.lineLabelData = lineData.filter(
    (d) =>
      d.source.split(" ").join("_") == key ||
      d.target.split(" ").join("_") == key
  );

  d3.selectAll(".line")
    .filter(function (d) {
      return d3.select(this).attr("key") == key;
    })
    .transition()
    .duration(highlightTransition)
    .style("opacity", 1);

  d3.selectAll(".line")
    .filter(function (d) {
      return d3.select(this).attr("key") != key;
    })
    .transition()
    .duration(highlightTransition)
    .style("opacity", 0.2);

  d3.selectAll(".link")
    .filter(function (d) {
      return d3.select(this).attr("key") == key;
    })
    .transition()
    .duration(highlightTransition)
    .style("stroke-opacity", 0.7);

  d3.selectAll(".link")
    .filter(function (d) {
      return d3.select(this).attr("key") != key;
    })
    .transition()
    .duration(highlightTransition)
    .style("stroke-opacity", 0.4);

  d3.selectAll(".nodeRect")
    .filter(function (d) {
      return d3.select(this).attr("key") == key;
    })
    .transition()
    .duration(highlightTransition)
    .style("opacity", 1);

  d3.selectAll(".nodeRect")
    .filter(function (d) {
      return d3.select(this).attr("key") != key;
    })
    .transition()
    .duration(highlightTransition)
    .style("opacity", 0.5);

  //data points
  d3.selectAll(".lineLabel").remove();

  d3.selectAll(".lineNode")
    .filter(function (d, i) {
      return d3.select(this).attr("key") == key;
    })
    .append("g")
    .selectAll("text")
    .data(lineLabelData)
    .enter()
    .append("text")
    .filter(
      (d, i) => i === 0 || i === lineLabelData.length - 1 || d.year === thisYear
    )
    .attr("x", (d, i) =>
      d.type == "Revenue" ? revLineX(d.year) : spendLineX(d.year)
    )
    .attr("y", (d) => lineY(d.value) - 14)
    .text((d, i) => formatNumber(d.value))
    .attr("class", "lineLabel");
}

export const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export const stackMin = (series) => d3.min(series, (d) => d[0]);

export const stackMax = (series) => d3.max(series, (d) => d[1]);
