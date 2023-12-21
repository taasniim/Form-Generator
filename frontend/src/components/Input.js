// InputElement.js
import React from 'react';
import { useDrag } from 'react-dnd';

const InputElement = ({ type }) => {
  const [, drag] = useDrag({
    item: { type },
  });

  return (
    <div ref={drag} style={{ border: '1px solid #ccc', padding: '8px', margin: '8px', cursor: 'move' }}>
      {type}
    </div>
  );
};

export default InputElement;
