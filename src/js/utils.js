import * as d3 from 'd3'

// format variables
const formatNumber = d3.format('.1f') // zero decimal places
const highlightTransition = 50

export function highlight() {
  window.key = d3.select(this).attr('key')

  window.lineLabelData = lineData.filter(d => d.source.split(' ').join('_') == key || d.target.split(' ').join('_') == key)

  d3.selectAll('.line')
    .filter(function (d) {
      return d3.select(this).attr('key') == key
    })
    .transition()
    .duration(highlightTransition)
    .style('opacity', 1)

  d3.selectAll('.line')
    .filter(function (d) {
      return d3.select(this).attr('key') != key
    })
    .transition()
    .duration(highlightTransition)
    .style('opacity', 0.2)

  d3.selectAll('.link')
    .filter(function (d) {
      return d3.select(this).attr('key') == key
    })
    .transition()
    .duration(highlightTransition)
    .style('stroke-opacity', 0.7)

  d3.selectAll('.link')
    .filter(function (d) {
      return d3.select(this).attr('key') != key
    })
    .transition()
    .duration(highlightTransition)
    .style('stroke-opacity', 0.4)

  d3.selectAll('.nodeRect')
    .filter(function (d) {
      return d3.select(this).attr('key') == key
    })
    .transition()
    .duration(highlightTransition)
    .style('opacity', 1)

  d3.selectAll('.nodeRect')
    .filter(function (d) {
      return d3.select(this).attr('key') != key
    })
    .transition()
    .duration(highlightTransition)
    .style('opacity', 0.5)

  //data points
  d3.selectAll('.lineLabel').remove()

  d3.selectAll('.lineNode').filter(function (d, i) {
      return d3.select(this).attr('key') == key
    })
    .append('g')
    .selectAll('text')
    .data(lineLabelData)
    .enter()
    .append('text')
    .filter((d, i) => i === 0 || i === (lineLabelData.length - 1) || d.year === thisYear)
    .attr('x', (d, i) => (d.type == 'Revenue') ? revLineX(d.year) : spendLineX(d.year))
    .attr('y', d => lineY(d.value) - 14)
    .text((d, i) => formatNumber(d.value))
    .attr('class', 'lineLabel')
}

export const onlyUnique = (value, index, self) => self.indexOf(value) === index

export const stackMin = series => d3.min(series, d => d[0])

export const stackMax = series => d3.max(series, d => d[1])