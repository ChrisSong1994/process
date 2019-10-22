import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const baseStyle = {
  stroke: '#000',
  strokeWidth: 1
};
const size = 14;

const ResizeAnchor = ({ x, y, width, height, onResize }) => {
  const ref = useRef(null);
  const controllerData = [
    {
      x: 0 - size / 2,
      y: 0 - size / 2,
      key: 'lt',
      cursor: 'nwse-resize',
      resize: () => {}
    },
    {
      x: width - size / 2,
      y: 0 - size / 2,
      key: 'rt',
      cursor: 'nesw-resize',
      resize: (start, event) => {
        const offsetX = event.x - start.x;
        const offsetY = event.y - start.y;
        return {
          x,
          y: y + offsetY,
          width: width + offsetX,
          height: height - offsetY
        };
      }
    },
    {
      x: width - size / 2,
      y: height - size / 2,
      key: 'rb',
      cursor: 'nwse-resize',
      resize: (start, event) => {
        const offsetX = event.x - start.x;
        const offsetY = event.y - start.y;
        return {
          x,
          y: y + offsetY,
          width: width + offsetX,
          height: height - offsetY
        };
      }
    },
    {
      x: 0 - size / 2,
      y: height - size / 2,
      key: 'lb',
      cursor: 'nesw-resize',
      resize: () => {}
    }
  ];
  useEffect(() => {
    let startX, startY, size;
    const controller = d3.select(ref.current);
    const controllerRect = controller.selectAll('rect').data(controllerData);
    controllerRect.call(
      d3
        .drag()
        .on('start', () => {
          startX = d3.event.x;
          startY = d3.event.y;
        })
        .on('drag', d => {
          size = d.resize({ x: startX, y: startY }, d3.event);
          console.log(size);
          onResize(size);
        })
        .on('end', () => {})
    );
  }, [controllerData, onResize]);

  return (
    <g className="shape-controller" ref={ref}>
      <path
        d={`M0,0 L${width},0 L${width},${height} L0,${height}  L0,${height} Z`}
        style={{ ...baseStyle, fill: 'Transparent' }}
      />
      {controllerData.map(({ x, y, cursor, key }) => {
        return (
          <rect
            key={key}
            style={{ cursor, ...baseStyle, fill: '#fff' }}
            x={x}
            y={y}
            width={size}
            height={size}
          />
        );
      })}
    </g>
  );
};

export default ResizeAnchor;
