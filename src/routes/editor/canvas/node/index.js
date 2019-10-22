import React, { useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import classNames from 'classNames';
import { connect } from 'react-redux';
import { update_node, update_select_nodes } from 'src/store/active';
import ShapeController from './shapeController';

const Node = ({
  children,
  x,
  y,
  width,
  height,
  id,
  shape,
  update_node,
  update_select_nodes,
  selectNodes
}) => {
  const ref = useRef(null);
  useEffect(() => {
    let startX, startY;
    const nodeDom = d3.select(ref.current);
    if (nodeDom) {
      nodeDom.call(
        d3
          .drag()
          .on('start', () => {
            nodeDom.classed('node-draging', true);
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
            nodeDom.classed('node-draging', false);
            // d3.event.sourceEvent.stopPropagation();
            // !draged && onClick(); // update_node(props.id, { x: d3.event.x, y: d3.event.y });
          })
      );
      nodeDom.on('dblclick', () => {
        d3.event.stopPropagation();
      });
      nodeDom.on('click', () => {
        d3.event.stopPropagation();
        onClick();
      });
    }
  }, [height, id, onClick, update_node, width, x, y]);

  const onResize = useCallback(
    size => {
      update_node(id, size);
    },
    [id, update_node]
  );

  const onClick = useCallback(() => {
    update_select_nodes([...selectNodes, id]);
  }, [update_select_nodes, selectNodes, id]);

  const isSelected = selectNodes.includes(id);
  return (
    <g
      ref={ref}
      className={classNames('node', {
        'node-selected': isSelected
      })}
      shape={shape}
      transform={`translate(${x}, ${y})`}
    >
      {children}
      <g className="shape_controls">
        {isSelected && (
          <ShapeController
            x={x}
            y={y}
            width={width}
            height={height}
            onResize={onResize}
          />
        )}
      </g>
    </g>
  );
};

const mapStateToProps = state => {
  const { process } = state;
  return {
    selectNodes: process.selectNodes
  };
};

export default connect(
  mapStateToProps,
  { update_node, update_select_nodes }
)(Node);
