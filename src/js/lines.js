import * as d3 from 'd3'
import {
  highlight,
  formatNumber
} from './utils';

export function drawLines() {
  //seperate datasets filtered by type
  const revLineData = lineData.filter(d => d.type == 'Revenue')
  const spendLineData = lineData.filter(d => d.type == 'Spending')

  const revDataNested = d3.nest()
    .key(d => d.source)
    .entries(revLineData)

  const spendDataNested = d3.nest()
    .key(d => d.target)
    .entries(spendLineData)

  //Dimensions
  window.lineMargin = {
    top: 20,
    right: 20,
    bottom: 10,
    left: 20,
    middle: 20
  }

  window.lineWidth = linesContainer.offsetWidth - lineMargin.left - lineMargin.right
  window.lineHeight = 140 - lineMargin.top - lineMargin.bottom

  window.lineSvg = d3.select('#linesContainer').append('svg')
    .attr('width', lineWidth + lineMargin.left + lineMargin.right)
    .attr('height', lineHeight + lineMargin.top + lineMargin.bottom)
    .append('g')
    .attr('transform', 'translate(' + lineMargin.left + ',' + lineMargin.top + ')')

  // set the domain and range
  window.revLineX = d3.scaleBand()
    .domain(revLineData.map(d => d.year))
    .range([lineMargin.left, lineWidth / 2 - lineMargin.middle])

  window.spendLineX = d3.scaleBand()
    .domain(spendLineData.map(d => d.year))
    .range([lineWidth / 2 + lineMargin.middle, lineWidth - lineMargin.right])

  window.lineY = d3.scaleLinear()
    .domain([0, d3.max(revLineData, d => d.value)])
    .range([lineHeight - lineMargin.bottom, lineMargin.top])

  // define the line
  const revLine = d3.line()
    .x(d => revLineX(d.year))
    .y(d => lineY(d.value))

  const spendLine = d3.line()
    .x(d => spendLineX(d.year))
    .y(d => lineY(d.value))

  // revenue lines
  const revLines = lineSvg.selectAll('lineNode')
    .data(revDataNested)
    .enter().append('g')
    .attr('class', 'lineNode')
    .attr('key', d => d.key.split(' ').join('_'))

  revLines.append('path')
    .attr('class', d => 'line ' + d.key)
    .attr('d', d => revLine(d.values))
    .attr('key', d => d.key.split(' ').join('_'))
    .style('stroke', 'green')
    .on('mouseover', highlight)

  // revenue lines
  const spendLines = lineSvg.selectAll('lineNode')
    .data(spendDataNested)
    .enter().append('g')
    .attr('class', 'lineNode')
    .attr('key', d => d.key.split(' ').join('_'))

  spendLines.append('path')
    .attr('class', d => 'line ' + d.key)
    .attr('d', d => spendLine(d.values))
    .attr('key', d => d.key.split(' ').join('_'))
    .style('stroke', 'red')
    .on('mouseover', highlight)

  //headers
  lineSvg.append('text')
    .attr('x', lineWidth * .25)
    .attr('y', lineMargin.top / 4)
    .attr('class', 'lineTitle')
    .text('Revenue')

  lineSvg.append('text')
    .attr('x', lineWidth * .75)
    .attr('y', lineMargin.top / 4)
    .attr('class', 'lineTitle')
    .text('Spending')

  //Define axes
  const revXAxis = d3.axisBottom()
    .scale(revLineX)
    .tickValues(revLineX.domain().filter((d, i) => i === 0 || i === 49)) //first and last year
    .tickSize(0)

  const spendXAxis = d3.axisBottom()
    .scale(spendLineX)
    .tickValues(revLineX.domain().filter((d, i) => i === 0 || i === 49))
    .tickSize(0)

  //create axes
  lineSvg.append('g')
    .attr('class', 'revAxis x')
    .attr('transform', 'translate(-7,' + (lineHeight - lineMargin.bottom) + ')')
    .call(revXAxis)

  //create axes
  lineSvg.append('g')
    .attr('class', 'spendAxis x')
    .attr('transform', 'translate(-7,' + (lineHeight - lineMargin.bottom) + ')')
    .call(spendXAxis)

  //lines and labels indicating current year
  lineSvg.append('g')
    .attr('class', 'thisYearLine rev')
    .append('line')
    .attr('x1', revLineX(thisYear))
    .attr('x2', revLineX(thisYear))
    .attr('y1', lineMargin.top)
    .attr('y2', lineHeight - lineMargin.bottom)

  d3.select('.thisYearLine.rev')
    .append('text')
    .text(d => thisYear)
    .attr('x', revLineX(thisYear))
    .attr('y', lineHeight + lineMargin.bottom * .2)

  lineSvg.append('g')
    .attr('class', 'thisYearLine spend')
    .append('line')
    .attr('x1', spendLineX(thisYear))
    .attr('x2', spendLineX(thisYear))
    .attr('y1', lineMargin.top)
    .attr('y2', lineHeight - lineMargin.bottom)

  d3.select('.thisYearLine.spend')
    .append('text')
    .text(d => thisYear)
    .attr('x', spendLineX(thisYear))
    .attr('y', lineHeight + lineMargin.bottom * .2)
}

export function updateThisYearLine(thisYear) {

  //line indicating current year
  d3.select('.thisYearLine.rev line')
    .attr('x1', revLineX(thisYear))
    .attr('x2', revLineX(thisYear))

  d3.select('.thisYearLine.rev text')
    .text(d => thisYear)
    .attr('x', revLineX(thisYear))
    .style('opacity', d => (thisYear == 1968 || thisYear == 2017) ? 0 : 1)

  d3.select('.thisYearLine.spend line')
    .attr('x1', spendLineX(thisYear))
    .attr('x2', spendLineX(thisYear))

  d3.select('.thisYearLine.spend text')
    .text(d => thisYear)
    .attr('x', spendLineX(thisYear))
    .style('opacity', d => (thisYear == 1968 || thisYear == 2017) ? 0 : 1);

  (function (d) {
    if (window.key != 0 && window.lineLabelData) {
      d3.selectAll('.lineLabel').remove()

      d3.selectAll('.lineNode').filter(function (d, i) {
          return d3.select(this).attr('key') == window.key
        })
        .append('g')
        .selectAll('text')
        .data(window.lineLabelData)
        .enter()
        .append('text')
        .filter(function (d, i) {
          return i === 0 || i === (window.lineLabelData.length - 1) || d.year === thisYear
        })
        .attr('x', (d, i) => (d.type == 'Revenue') ? revLineX(d.year) : spendLineX(d.year))
        .attr('y', d => lineY(d.value) - 14)
        .text((d, i) => formatNumber(d.value))
        .attr('class', 'lineLabel')
    }
  })()
}