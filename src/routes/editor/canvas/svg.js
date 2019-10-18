import React, { useEffect, useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from 'src/constant';
import { connect } from 'react-redux';
import { add_node } from 'src/store/active';
import { nodeParse } from 'src/utils';
import Node from './node';
import _ from 'lodash';
import { shapes } from 'src/modules/shapes/base';

const Svg = ({ width, height, nodes, add_node }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      const { left, top } = ref.current.getBoundingClientRect();
      const {
        x: sourceOffsetX,
        y: sourceOffsetY
      } = monitor.getSourceClientOffset();
      const x = sourceOffsetX - left;
      const y = sourceOffsetY - top;
      console.log(left, top);
      console.log(sourceOffsetX, sourceOffsetY);
      console.log(item);
      add_node(nodeParse({ ...item, x, y }));
    }
  });

  useEffect(() => {
    drop(ref);
  }, [drop]);

  const findShape = key => {
    return _.find(shapes, { key });
  };
  return (
    <svg ref={ref} id="svg" width={width} height={height}>
      <defs></defs>
      <g className="nodes-container">
        {nodes.map(node => {
          return (
            <Node {...node}>{findShape(node.key).component({ ...node })}</Node>
          );
        })}
      </g>
    </svg>
  );
};

const mapStateToProps = state => {
  const { process } = state;
  return {
    nodes: process.nodes
  };
};

export default connect(
  mapStateToProps,
  { add_node }
)(Svg);
