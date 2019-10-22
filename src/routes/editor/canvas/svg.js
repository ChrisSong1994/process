import React, { useEffect, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from 'src/constant';
import { connect } from 'react-redux';
import { add_node, update_select_nodes } from 'src/store/active';
import { nodeParse } from 'src/utils';
import { shapes } from 'src/modules/shapes/base';
import * as d3 from 'd3';
import Node from './node';
import _ from 'lodash';

const Svg = ({ width, height, nodes, add_node, update_select_nodes }) => {
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
      add_node(nodeParse({ ...item, x, y }));
    }
  });

  useEffect(() => {
    const svgEle = d3.select(ref.current);
    drop(ref);
    svgEle.on('click', () => {
      update_select_nodes([]);
    });
  }, [drop, ref, update_select_nodes]);

  const zoomed = zoomArea => {
    return d3
      .zoom()
      .scaleExtent([1 / 5, 4])
      .on('zoom', () => {
        zoomArea.attr('transform', d3.event.transform);
      });
  };

  useEffect(() => {
    const svg = d3.select(ref.current);
    const zoomArea = svg.select('.zoom-area');
    svg.call(zoomed(zoomArea));
  }, []);

  const findShape = shape => {
    return _.find(shapes, { shape });
  };

  const renderNode = () => {
    const nodeArray = [];
    _.forEach(nodes, (node, id) => {
      nodeArray.push(
        <Node key={id} {...node}>
          {findShape(node.shape).component({ ...node })}
        </Node>
      );
    });
    return nodeArray;
  };

  return (
    <svg ref={ref} id="svg" width={width} height={height}>
      <defs></defs>
      <g className="zoom-area">
        <g className="nodes-container">{renderNode()}</g>
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
  { add_node, update_select_nodes }
)(Svg);
