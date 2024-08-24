import React, { useState } from 'react';

function AddWidgetOverlay({ category, addWidget, closeOverlay }) {
  const [widgetName, setWidgetName] = useState('');
  const [fields, setFields] = useState({});
  const [fieldCount, setFieldCount] = useState(0);
  const [fieldNames, setFieldNames] = useState([]);

  const handleFieldCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setFieldCount(count);
    setFieldNames(new Array(count).fill(''));
  };

  const handleFieldNameChange = (index, value) => {
    const newFieldNames = [...fieldNames];
    newFieldNames[index] = value;
    setFieldNames(newFieldNames);
  };

  const handleFieldValueChange = (index, value) => {
    const newFields = { ...fields, [fieldNames[index]]: parseInt(value, 10) };
    setFields(newFields);
  };

  const handleAddWidget = () => {
    addWidget(category, { id: Date.now(), name: widgetName, fields });
    closeOverlay();
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h3>Add Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Fields"
          value={fieldCount}
          onChange={handleFieldCountChange}
        />
        {fieldNames.map((_, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={Field Name ${index + 1}}
              onChange={(e) => handleFieldNameChange(index, e.target.value)}
            />
            <input
              type="number"
              placeholder={Field Value ${index + 1}}
              onChange={(e) => handleFieldValueChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleAddWidget}>Add</button>
        <button onClick={closeOverlay}>Cancel</button>
      </div>
    </div>
  );
}

export default AddWidgetOverlay;
