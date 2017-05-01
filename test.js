var assert = require("assert");
var processLess = require("./process-less.js");

describe("bit-docs-process-less", function() {

  it("gets the filename correctly", function() {
    processLess("apis.less", null, null, null, function(docObject) {
      assert.equal(docObject.name, "apis", "should remove the extension");
    });
  });

  it("only process less files", function(done) {
    var testItems = [
      { name: "foo.js", expected: false },
      { name: "foo.md", expected: false },
      { name: "foo.less", expected: true }
    ];

    testItems.forEach(function(item) {
      item.processed = false;

      processLess(item.name, null, null, null, function(docObject) {
        item.processed = true;
      });
    });

    setTimeout(function() {
      testItems.forEach(function(item) {
        assert.equal(item.processed, item.expected, item.name);
      });
      done();
    }, 0);
  });

});
