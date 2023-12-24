import React, { useState } from 'react';
import Navbar from './Navbar';
import Field from './Ffeld';
import { useDrop } from 'react-dnd';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const fieldsList = [
  {
    id: 1,
    type: 'input',
    icon: '📝',
    label: '',
  },
  {
    id: 2,
    type: 'RadioButton',
    icon: '◉',
    label: '',
  },
  {
    id: 3,
    type: 'checkbox',
    icon: '☑️',
    label: '',
  },
];

const CreateForm = () => {
  const [form, setForm] = useState([]);
  const [title, setTitle] = useState('');

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ['input', 'RadioButton', 'checkbox'],
    drop: (item) => addFieldToForm(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addFieldToForm = (id) => {
    const selectedField = fieldsList.find((field) => id === field.id);
    setForm((prevForm) => [...prevForm, { ...selectedField, label: '' }]);
  };

  const updateFieldLabel = (index, value) => {
    setForm((prevForm) =>
      prevForm.map((field, i) =>
        i === index ? { ...field, label: value } : field
      )
    );
  };

  const clearForm = () => {
    setForm([]);
  };

  const saveForm = async () => {
    if (!title || form.length === 0) {
      return;
    }

    try {
      const formData = {
        title: title,
        fields: form.map((field, index) => ({
          label: field.label || '',
          type: field.type,
        })),
      };
      await axios.post('http://localhost:4000/api/forms', formData);
    } catch (error) {
      console.error('Error while saving form:', error);
    }
  };

  return (
    <div className='CreateForm'>
      <Navbar />
      <div className='container mt-4'>
        <h2 className='text-center mb-4'>Create an Amazing Form</h2>
        <div className='row'>
          <div className='col-md-3'>
            <h5 className='mb-3'>Form Elements</h5>
            {fieldsList.map((field) => (
              <div key={field.id}>
                <Field field={field} onDrop={() => addFieldToForm(field.id)} />
              </div>
            ))}
          </div>
          <div className='col-md-9'>
            <div className='card' ref={drop}>
              <div className='card-body'>
                <h5 className='card-title mb-3'>Form Builder</h5>
                <label htmlFor='formTitle'>Title:</label>
                <input
                  type='text'
                  id='formTitle'
                  className='form-control mb-3'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {form.map((field, index) => (
                  <div key={field.id} className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      value={field.label}
                      onChange={(e) => updateFieldLabel(index, e.target.value)}
                    />
                    <Field field={field} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-success mx-2' onClick={saveForm}>
            Save
          </button>
          <button className='btn btn-secondary' onClick={clearForm}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
