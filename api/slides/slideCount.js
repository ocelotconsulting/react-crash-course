const documents = require('./documents')

module.exports = (req, res) => res.json({count: documents.length})