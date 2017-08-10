var assert = require('assert');
var main = require('../main/ex01.js')
describe('HiringTests', function() {
  describe('#customIndexOf()', function() {
    var str = "abcdefghij";
    it('should return -1 for not existing position', function() {
      assert.equal(main.customIndexOf(str, "notExisting"), -1);
    });
    it('should return -1 for UPPERCASE', function() {
      assert.equal(main.customIndexOf(str, "ABCD"), -1);
    });
    it('should return 4 for position "efg"', function() {
      assert.equal(main.customIndexOf(str, "efg"), 4);
    });
    it('should return 0 for "a" position', function() {
      assert.equal(main.customIndexOf(str, "a"), 0);
    });
    it('should return 9 for "j" last position', function() {
      assert.equal(main.customIndexOf(str, "j"), str.length - 1);
    });
  });
});
