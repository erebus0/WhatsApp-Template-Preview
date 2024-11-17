const templateService = require('../services/template.service');
const logger = require('../utils/logger');

exports.previewTemplate = async (req, res) => {
  const startTime = Date.now(); 
  try {
    const { template, data } = req.body;
    const previewMessage = await templateService.generatePreview(template, data);
    res.json(previewMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};