import './app.scss';
import {
  drawDasboard
} from './js/main';

document.addEventListener('DOMContentLoaded', () => {
  drawDasboard()

  document.addEventListener('resize', drawDasboard)
})