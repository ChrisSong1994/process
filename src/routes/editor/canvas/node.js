import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import { update_node } from 'src/store/active';

const node = props => {
  const ref = useRef(null);

  useEffect(() => {
    const nodeDom = d3.select(ref.current);
    if (nodeDom) {
      nodeDom.call(
        d3
          .drag()
          .on('start', () => {})
          .on('drag', () => {
            props.update_node(props.id, { x: d3.event.x, y: d3.event.y });
          })
          .on('end', () => {
            // update_node(props.id, { x: d3.event.x, y: d3.event.y });
          })
      );
    }
  }, [props]);

  return (
    <g
      ref={ref}
      className="node"
      shape={props.shape}
      transform={`translate(${props.x}, ${props.y})`}
    >
      {props.children}
    </g>
  );
};

export default connect(
  null,
  { update_node }
)(node);
