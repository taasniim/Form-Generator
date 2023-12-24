import React from 'react'; 
import { useDrag } from 'react-dnd';

const Field = ({ field }) => { 
  const [{ isDragging }, drag] = useDrag(() => ({
    type: field.type, // Use the field type as the drag type
    item: { id: field.id }, // Pass additional data like id
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={`Field ${isDragging ? 'dragging' : ''}`} ref={drag}>
      <div className='oneFieled'>
        <span role="img" aria-label="icon">
          {field.icon}
        </span>
        <h6>{field.type}</h6>
      </div>
    </div>
  );
};

export default Field;
