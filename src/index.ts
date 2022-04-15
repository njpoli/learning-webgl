import './style.css';

function component() {
  const element = document.createElement('canvas');
  element.id = 'main-canvas';
  element.width = window.innerWidth;
  element.height = window.innerHeight;

  const context = element.getContext('2d');

  context?.beginPath();
  context?.rect(500, 300, 300, 300);
  context?.stroke();
  return element;
}

document.body.appendChild(component());
