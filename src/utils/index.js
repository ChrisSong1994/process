import uuid from 'uuid';

// 格式化node
export const nodeParse = data => {
  return {
    id: data.id || uuid(),
    shape: data.shape || null,
    name: data.name || null,
    width: data.width || 160,
    height: data.height || 90,
    x: data.x || 0,
    y: data.y || 0,
    style: data.style || null
  };
};
