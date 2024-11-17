const templateParser = require('../utils/template.parser');

exports.generatePreview = (template, data) => {
  try {
    const parsedTemplate = templateParser.parse(template);
    const previewMessage = templateParser.applyData(parsedTemplate, data);
    return previewMessage;
  } catch (error) {
    throw new Error(`Error generating preview: ${error.message}`);
  }
};