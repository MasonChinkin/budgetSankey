import * as d3 from 'd3'
import * as d3Slider from './assets/d3-simple-slider'
import {
  updateBars
} from './bars';
import {
  updateThisYearLine
} from './lines';
import {
  newData,
  newYearTransition
} from './utils';
import {
  updateSankey,
  drawDeficit
} from './sankey';

export function drawSlider() {
  const slider = d3Slider.sliderHorizontal()
    .min(1968)
    .max(2017)
    .step(1)
    .width(barsContainer.offsetWidth - 62)
    .tickFormat(d3.format('.4'))
    .default(2017)
    .on('end', thisYear => { //use end instead of onchange, is when user releases mouse
      window.thisYear = thisYear
      d3.csv('data/us-budget-sankey-main.csv').then(csv => {
        d3.csv('data/us-budget-sankey-deficit.csv').then(deficit => {

          //update
          d3.select('.deficit').remove()
          d3.select('.deficitLabel').remove()
          newData(csv, deficit, thisYear)
          updateSankey()
          setTimeout(() => drawDeficit(), newYearTransition)
        })
      })
    })
    .on('onchange', thisYear => { //use end instead of onchange, is when user releases mouse
      window.thisYear = thisYear
      updateBars(thisYear)
      updateThisYearLine(thisYear)
    })

  const g = d3.select('div#slider').append('svg')
    .attr('width', barsContainer.offsetWidth)
    .attr('height', 90)
    .append('g')
    .attr('transform', 'translate(30,30)')

  g.call(slider)
  d3.selectAll('#slider')
    .style('font-size', 20)
}