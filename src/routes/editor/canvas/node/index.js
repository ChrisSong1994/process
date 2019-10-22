import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { update_node } from 'src/store/active';
import ShapeController from './shapeController';

const Node = ({ children, x, y, width, height, id, shape, update_node }) => {
  const ref = useRef(null);

  useEffect(() => {
    let startX, startY;
    const nodeDom = d3.select(ref.current);
    if (nodeDom) {
      nodeDom.call(
        d3
          .drag()
          .on('start', () => {
            startX = d3.event.x;
            startY = d3.event.y;
          })
          .on('drag', () => {
            update_node(id, {
              x: d3.event.x - startX + x,
              y: d3.event.y - startY + y
            });
          })
          .on('end', () => {
            // update_node(props.id, { x: d3.event.x, y: d3.event.y });
          })
      );
      nodeDom.on('dblclick', ()=>{
        d3.event.stopPropagation();
      });
    }
  }, [height, id, update_node, width, x, y]);

  const onResize = size => {
    update_node(id, size);
  };

  return (
    <g
      ref={ref}
      className="node"
      shape={shape}
      transform={`translate(${x}, ${y})`}
    >
      {children}
      <g className="shape_controls">
        <ShapeController
          x={x}
          y={y}
          width={width}
          height={height}
          onResize={onResize}
        />
      </g>
    </g>
  );
};

export default connect(
  null,
  { update_node }
)(Node);
