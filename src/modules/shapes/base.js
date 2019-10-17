import React from 'react';

export const shapes = [
  {
    key: 'rect',
    name: '矩形',
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0  160 90"
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="none"
        >
          <path d="M 2,2 L 158,2 L158,88 L 2,88 Z" />
        </svg>
      );
    }
  },
  {
    key: 'rhombus',
    name: '菱形',
    component: ({ width, height, style }) => (
      <svg
        viewBox="0 0  160 90"
        width={width}
        height={height}
        style={style}
        preserveAspectRatio="none"
      >
        <path d="M75,2 L158,45 L75,88 L2,45 Z" />
      </svg>
    )
  },
  {
    key: 'ellipse',
    name: '椭圆形',
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0  160 90"
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="none"
        >
          <path
            d="
             M2,45
             A 73 41 0 0 1 158 45
             A 73 41 0 0 1 2 45
             Z  "
          />
        </svg>
      );
    }
  },
  {
    key: 'circle',
    name: '圆形',
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0 160 160"
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="none"
        >
          <path
            d="
             M2,80
             A 73 73 0 0 1 158 80
             A 73 73 0 0 1 2 80
             Z  "
          />
        </svg>
      );
    }
  }
];
