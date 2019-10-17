import React, { useRef, useEffect } from 'react';
import Grid from './grid';

const Canvas = () => {
  const svgRef = useRef(null);

  useEffect(() => {});

  return (
    <div id="canvas">
      <Grid />
      <svg ref={svgRef}>
        <defs></defs>
      </svg>
    </div>
  );
};

export default Canvas;
