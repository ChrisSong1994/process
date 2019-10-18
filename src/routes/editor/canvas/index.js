import React, { useEffect, useState, useRef } from 'react';
import Grid from './grid';
import Svg from './svg';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [{ width, height }, setCanvasSize] = useState({
    width: 2000,
    height: 1200
  });

  useEffect(() => {
    setTimeout(() => {
      const { width, height } = canvasRef.current.getBoundingClientRect();
      setCanvasSize({ width, height });
    }, 0);
    window.onresize = () => {
      const { width, height } = canvasRef.current.getBoundingClientRect();
      setCanvasSize({ width, height });
    };
  }, []);

  return (
    <div id="canvas" ref={canvasRef}>
      <Grid width={width} height={height} />
      <Svg  />
    </div>
  );
};

export default Canvas;
