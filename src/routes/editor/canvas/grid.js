import React, { useEffect, useRef } from 'react';

const Grid = props => {
  const ref = useRef(null);
  const [width, height] = [props.width || 5000, props.height || 5000];
  useEffect(() => {
    drawLine(width, height);
  });

  const drawLine = (width, height) => {
    const c_canvas = ref.current;
    const context = c_canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    context.strokeStyle = '#ddd';
    for (var x = 0.5; x < width; x += 20) {
      if (((x - 0.5) / 20) % 4 === 0) {
        context.beginPath();
        context.lineWidth = 1;
      } else {
        context.beginPath();
        context.lineWidth = 0.5;
      }
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }

    for (var y = 0.5; y < height; y += 20) {
      if (((y - 0.5) / 20) % 4 === 0) {
        context.beginPath();
        context.lineWidth = 1;
      } else {
        context.beginPath();
        context.lineWidth = 0.5;
      }
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
    context.moveTo(0, 0);
    context.stroke();
  };

  return <canvas ref={ref} width={width} height={height} id="grid"></canvas>;
};

export default Grid;
