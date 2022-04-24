import './style.css';
import { Engine } from './core/engine';

var engine: Engine;
// The main entry point to the application
window.onload = function () {
  engine = new Engine(320, 480);
  engine.start();
};

window.onresize = function () {
  engine.resize();
};

window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
};
