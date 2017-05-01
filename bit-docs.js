var processLess = require("./process-less");

/**
 * @module {function} bit-docs-process-less
 * @parent plugins
 *
 * @description Process content in less files.
 *
 * @body
 *
 * TBD
 */
module.exports = function(bitDocs) {
  bitDocs.register("processor", processLess);
};
