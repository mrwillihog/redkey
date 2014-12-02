var _ = require('lodash');

var defaults = {
  separator: ':',
  namespace: '',
  version: '',
  suffix: ''
};

function RedKey(opts) {
  opts = opts || {};

  var separator = opts.separator || defaults.separator;
  var namespace = opts.namespace || defaults.namespace;
  var version = opts.version || defaults.version;
  var suffix = opts.suffix || defaults.suffix;

  function Generator() {
    var words = _.flatten(arguments);

    if (version) words.unshift(version);
    if (namespace) words.unshift(namespace);
    if (suffix) words.push(suffix);

    return words.join(separator);
  }

  Generator.configure = function (opts) {
    return RedKey(opts);
  };

  return Generator;
}

module.exports = RedKey();
