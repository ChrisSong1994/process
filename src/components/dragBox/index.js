import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from 'src/constant';

const DragBox = ({ children, data }) => {
  const [, drag] = useDrag({ item: { type: ItemTypes.BOX, ...data } });
  const style = {
    display: 'inline-block'
  };
  return (
    <div ref={drag} style={style}>
      {children}
    </div>
  );
};
export default DragBox;
