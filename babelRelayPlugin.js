var getBabelPlugin = require('babel-relay-plugin');

var schemaData = require('./data/schema.json').data;

module.exports = getBabelPlugin(schemaData);

