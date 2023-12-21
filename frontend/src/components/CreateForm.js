import React, { useState } from 'react';

const CreateForm = () => {
  const [formElements, setFormElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [elementDetails, setElementDetails] = useState({ label: '', options: '' });

  const formElementsMenu = [
    { id: 1, type: 'text', label: 'Text Input' },
    { id: 2, type: 'checkbox', label: 'Checkbox', options: 'Option 1, Option 2' },
    { id: 3, type: 'radio', label: 'Radio Button', options: 'Option 1, Option 2' },
    // Add more form elements to the menu as needed
  ];

  const handleDragStart = (event, element) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(element));
    setSelectedElement(element);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedElement = JSON.parse(event.dataTransfer.getData('text/plain'));
    setSelectedElement(droppedElement);
    setModalOpen(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleModalSubmit = () => {
    // Add the dropped element with entered details to the form
    const updatedElement = { ...selectedElement, ...elementDetails };
    setFormElements([...formElements, updatedElement]);

    // Clear details and close modal
    setElementDetails({ label: '', options: '' });
    setModalOpen(false);
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <div style={{ display: 'flex' }}>
        {/* Form Elements Menu */}
        <div>
          <h3>Form Elements Menu</h3>
          {formElementsMenu.map((element) => (
            <div
              key={element.id}
              draggable
              onDragStart={(e) => handleDragStart(e, element)}
              style={{ margin: '8px', padding: '8px', border: '1px solid #ddd', cursor: 'move' }}
            >
              {element.label}
            </div>
          ))}
        </div>

        {/* Workspace for Drag and Drop */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            border: '2px dashed #ccc',
            padding: '16px',
            minHeight: '200px',
            marginLeft: '16px',
          }}
        >
          <h3>Form Workspace</h3>
          {formElements.map((formElement) => (
            <div
              key={formElement.id}
              style={{ margin: '8px', padding: '8px', border: '1px solid #ddd', cursor: 'move' }}
            >
              {formElement.label}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Element Details */}
      {modalOpen && (
        <div className="modal">
          <h2>Enter Details for {selectedElement.label}</h2>
          <label>
            Label:
            <input
              type="text"
              value={elementDetails.label}
              onChange={(e) => setElementDetails({ ...elementDetails, label: e.target.value })}
            />
          </label>
          <label>
            Options (comma-separated):
            <input
              type="text"
              value={elementDetails.options}
              onChange={(e) => setElementDetails({ ...elementDetails, options: e.target.value })}
            />
          </label>
          <button onClick={handleModalSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default CreateForm;
