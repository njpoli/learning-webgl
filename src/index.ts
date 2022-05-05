import './style.css';
import { Engine } from './core/engine';

var engine: Engine;
// The main entry point to the application
window.onload = function () {
  engine = new Engine(512, 750);
  engine.start();
};

window.onresize = function () {
  engine.resize();
};
