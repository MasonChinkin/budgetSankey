import './app.scss';
import * as d3 from 'd3'
import {
  drawLines,
  drawSlider,
  drawDeficit,
  drawSankey,
  drawBars,
  newData
} from './js/main';

document.addEventListener('DOMContentLoaded', () => {
  drawDashboard()

  window.addEventListener('resize', drawDashboard)
})

const drawDashboard = () => {
  d3.select('#visualization-container')
    .selectAll('svg')
    .remove()
  // d3.csv('../../data/us-budget-sankey-main.csv').then(csv => { // main
  //   d3.csv('../../data/us-budget-sankey-deficit.csv').then(deficit => { // deficit
  //     d3.csv('../../data/us-budget-sankey-bars.csv').then(barData => { // bars

  // absolute path for github pages
  d3.csv('data/us-budget-sankey-main.csv').then(csv => { // main
    d3.csv('data/us-budget-sankey-deficit.csv').then(deficit => { // deficit
      d3.csv('data/us-budget-sankey-bars.csv').then(barData => { // bars

        newData(csv, deficit, thisYear)
        drawBars(barData)
        drawSankey()
        drawDeficit()
        drawSlider()
        drawLines()
      })
    })
  })
}