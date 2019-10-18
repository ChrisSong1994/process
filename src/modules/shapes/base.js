import React from 'react';

const commonStyle = {
  fill: 'transparent',
  stroke: '#000',
  strokeWidth: 6
};

export const shapes = [
  {
    key: 'rect',
    name: '矩形',
    width: 160,
    height: 90,
    style: commonStyle,
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0  160 90"
          width={width}
          height={height}
          style={Object.assign({}, commonStyle, style)}
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
    width: 160,
    height: 90,
    style: commonStyle,
    component: ({ width, height, style }) => (
      <svg
        viewBox="0 0  160 90"
        width={width}
        height={height}
        style={Object.assign({}, commonStyle, style)}
        preserveAspectRatio="none"
      >
        <path d="M75,2 L158,45 L75,88 L2,45 Z" />
      </svg>
    )
  },
  {
    key: 'ellipse',
    name: '椭圆形',
    width: 160,
    height: 90,
    style: commonStyle,
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0  160 90"
          width={width}
          height={height}
          style={Object.assign({}, commonStyle, style)}
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
    width: 160,
    height: 160,
    style: commonStyle,
    component: ({ width, height, style }) => {
      return (
        <svg
          viewBox="0 0 160 160"
          width={width}
          height={height}
          style={Object.assign({}, commonStyle, style)}
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
  },
  {
    key: 'roundedRectangle',
    name: '圆角矩形',
    width: 160,
    height: 90,
    style: commonStyle,
    component: ({ width, height, style }) => {
      const r = 20;
      return (
        <svg
          viewBox="0 0  160 90"
          width={width}
          height={height}
          style={Object.assign({}, commonStyle, style)}
          preserveAspectRatio="none"
        >
          <path
            d={`
             M 2,${2 + r} 
             A${r} ${r} 0 0 1 ${2 + r} 2
             L ${158 - r},2
             A${r} ${r} 0 0 1 ${158} ${2 + r}
             L158,${88 - r}
             A${r} ${r} 0 0 1 ${158 - r} 88
             L ${2 + r},88 
             A${r} ${r} 0 0 1  2 ${88 - r}
             Z `}
          />
        </svg>
      );
    }
  }
];
