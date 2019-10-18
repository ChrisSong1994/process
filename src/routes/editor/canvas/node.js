import React from 'react';

const node = props => {
  return (
    <g
      className="node"
      shape={props.key}
      key={props.id}
      transform={`translate:(${props.x},${props.y})`}
    >
      {props.children}
    </g>
  );
};

export default node;
