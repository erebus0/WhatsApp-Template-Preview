import React, { useState } from 'react';
import axios from 'axios';

const TemplatePreview = () => {
  const [template, setTemplate] = useState('');
  const [data, setData] = useState({});
  const [previewMessage, setPreviewMessage] = useState('');
  const [error, setError] = useState(null);

  const handleTemplateChange = (event) => {
    setTemplate(event.target.value);
    generatePreview(event.target.value, data);
  };

  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    generatePreview(template, { ...data, [name]: value });
  };

  const generatePreview = async (template, data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/templates/preview', { 
        "template": template, 
        "data": data 
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      
      if (response.status === 200) {
        const previewMessage = response.data;
        setPreviewMessage(previewMessage);
        setError(null);
      } else {
        const error = response.data;
        setPreviewMessage('');
        setError(error.error);
      }
    } catch (err) {
      setPreviewMessage('');
      setError('An error occurred while generating the preview.');
    }
  };

  return (
    <div>
      <h1>WhatsApp Template Preview</h1>
      <textarea
        placeholder="Enter your WhatsApp message template"
        value={template}
        onChange={handleTemplateChange}
      />
      <div>
        {template.match(/\{\{(.*?)\}\}/g)?.map((variable, index) => (
          <div key={index}>
            {variable.slice(2, -2)}:{' '}
            <input
              type="text"
              name={variable.slice(2, -2)}
              value={data[variable.slice(2, -2)] || ''}
              onChange={handleDataChange}
            />
          </div>
        ))}
      </div>
      <h2>Preview:</h2>
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <div>{previewMessage}</div>
      )}
    </div>
  );
};

export default TemplatePreview;