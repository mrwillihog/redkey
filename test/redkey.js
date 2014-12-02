var expect = require('chai').expect;

describe('RedKey', function () {
  it('concatanates strings into a key', function (done) {
    var redkey = require('../redkey');
    expect(redkey('test')).to.equal('test');
    expect(redkey('test', 'key')).to.equal('test:key');
    expect(redkey('test', 'long', 'key')).to.equal('test:long:key');
    done();
  });

  it('allows multiple generators to be created', function (done) {
    var key1 = require('../redkey');
    var key2 = require('../redkey').configure({
      separator: '.'
    });

    expect(key1('test', 'key')).to.equal('test:key');
    expect(key2('test', 'key')).to.equal('test.key');
    done();
  });

  describe('Configuration', function () {
    it('allows the separator to be overriden', function (done) {
      var redkey = require('../redkey').configure({
        separator: '|'
      });

      expect(redkey('test')).to.equal('test');
      expect(redkey('test', 'key')).to.equal('test|key');
      expect(redkey('test', 'long', 'key')).to.equal('test|long|key');
      done();
    });

    it('allows a namespace to be set that prefixes all keys', function (done) {
      var redkey = require('../redkey').configure({
        namespace: 'redkey'
      });

      expect(redkey('test')).to.equal('redkey:test');
      expect(redkey('test', 'key')).to.equal('redkey:test:key');
      expect(redkey('test', 'long', 'key')).to.equal('redkey:test:long:key');
      done();
    });

    it('allows a version to be set that prefixes all keys', function (done) {
      var redkey = require('../redkey').configure({
        version: 'v1'
      });

      expect(redkey('test')).to.equal('v1:test');
      expect(redkey('test', 'key')).to.equal('v1:test:key');
      expect(redkey('test', 'long', 'key')).to.equal('v1:test:long:key');
      done();
    });

    it('allows a suffix to be set that suffixes all keys', function (done) {
      var redkey = require('../redkey').configure({
        suffix: 'string'
      });

      expect(redkey('test')).to.equal('test:string');
      expect(redkey('test', 'key')).to.equal('test:key:string');
      expect(redkey('test', 'long', 'key')).to.equal('test:long:key:string');
      done();
    });
  });
});
