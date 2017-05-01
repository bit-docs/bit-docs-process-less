var path = require("path");

/**
 * Whether the filename has less extension
 *
 * @param {string} filename The filename with its extension
 * @return {booelan} True is the filename ends with `.less`
 */
function isLess(filename) {
  var ext = path.extname(filename);

  return (ext === ".less");
}

/**
 * Returns the filename without the extension
 *
 * @param {string} filename The filename with its extension
 * @return {string} The actual filename
 */
function getDocMapName(filename) {
  return path.basename(filename, path.extname(filename));
}

module.exports = function(filename, source, docMap, siteConfig, addToDocMap) {
  if (isLess(filename)) {
    addToDocMap({
      body: source,
      type: "less",
      name: getDocMapName(filename)
    });
  }
};
