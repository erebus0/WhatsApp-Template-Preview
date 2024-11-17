const templateParser = require('./template.parser');

describe('templateParser', () => {
  describe('parse', () => {
    it('should extract variables from a template', () => {
      const template = 'Hello {{name}}, your order #{{orderNumber}} is confirmed for ₹{{amount}}.';
      const parsedTemplate = templateParser.parse(template);
      expect(parsedTemplate.variables).toEqual(['name', 'orderNumber', 'amount']);
    });

    it('should handle templates without variables', () => {
      const template = 'This is a simple message.';
      const parsedTemplate = templateParser.parse(template);
      expect(parsedTemplate.variables).toEqual([]);
    });
  });

  describe('applyData', () => {
    it('should replace variables with data', () => {
      const parsedTemplate = {
        template: 'Hello {{name}}, your order #{{orderNumber}} is confirmed for ₹{{amount}}.',
        variables: ['name', 'orderNumber', 'amount']
      };
      const data = {
        name: 'John Doe',
        orderNumber: '1234',
        amount: '100.00'
      };
      const previewMessage = templateParser.applyData(parsedTemplate, data);
      expect(previewMessage).toBe('Hello John Doe, your order #1234 is confirmed for ₹100.00.');
    });

    it('should use array values if variable names are not found in data', () => {
      const parsedTemplate = {
        template: 'Hello {{name}}, your order #{{0}} is confirmed for ₹{{1}}.',
        variables: ['name', 'orderNumber', 'amount']
      };
      const data = {
        name: 'John Doe',
        0: '1234',
        1: '100.00'
      };
      const previewMessage = templateParser.applyData(parsedTemplate, data);
      expect(previewMessage).toBe('Hello John Doe, your order #1234 is confirmed for ₹100.00.');
    });

    it('should handle missing data gracefully', () => {
      const parsedTemplate = {
        template: 'Hello {{name}}, your order #{{orderNumber}} is confirmed for ₹{{amount}}.',
        variables: ['name', 'orderNumber', 'amount']
      };
      const data = {
        name: 'John Doe',
        orderNumber: '1234'
      };
      const previewMessage = templateParser.applyData(parsedTemplate, data);
      expect(previewMessage).toBe('Hello John Doe, your order #1234 is confirmed for ₹.');
    });
  });
});