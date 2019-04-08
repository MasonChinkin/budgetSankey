# Federal Budget Sankey

[Live Demo](https://masonchinkin.github.io/budgetSankey/)

![](https://github.com/MasonChinkin/budgetSankey/blob/master/dist/budgetsankey.gif)

I always felt sankeys were underutilized as a tool to communicate fiscal policy. Maybe now I know why, because this was not trivial! I made this just before I began my journey to be a full stack engineer and am in the process of improving the code quality.

## Features

* d3.js based dashboard gives 3 slices of fiscal data since 1968: 1) bar chart showing the overall balance, 2) sankey showing the revenue/spending flows, and 3) line charts showing the history for each category.
* Sankey transitions to any year selected with the slider.
* Hovering the mouse over a category highlights it in the sankey and line charts.

## Highlights

### Sankey Transition: onchange vs end

The sankey animation was a nice lesson in onchange vs end. I only want to bind new data when the user made a choice by releasing the mouse button, which is the end event.

```javascript
const slider = d3Slider.sliderHorizontal()
    .min(1968)
    .max(2017)
    .step(1)
    .width(barsContainer.offsetWidth - 62)
    .tickFormat(d3.format('.4'))
    .default(2017)
    .on('onchange', thisYear => { //use end instead of onchange, is when user releases mouse
      updateBars(thisYear)
      updateThisYearLine(thisYear)
    })
    .on('end', thisYear => { //use end instead of onchange, is when user releases mouse
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
```
