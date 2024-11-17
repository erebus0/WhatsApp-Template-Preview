exports.parse = (template) => {
    const variableRegex = /\{\{(.*?)\}\}/g;
    const variables = [];
    let match;
  
    while ((match = variableRegex.exec(template)) !== null) {
      variables.push(match[1].trim());
    }
  
    return {
      template,
      variables
    };
  };
  
 
  exports.applyData = (parsedTemplate, data) => {
    const { template, variables } = parsedTemplate;
    let previewMessage = template;
  
    variables.forEach((variable, index) => {
      const regex = new RegExp(`\\{\\{${variable}\\}\\}`, 'g');
      previewMessage = previewMessage.replace(regex, data[variable] || data[index] || 'N/A');
    });
  
    return previewMessage;
  };