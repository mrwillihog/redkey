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
    var argsArray = [].slice.call(arguments);

    if (version) argsArray.unshift(version);
    if (namespace) argsArray.unshift(namespace);
    if (suffix) argsArray.push(suffix);

    return argsArray.join(separator);
  }

  Generator.configure = function (opts) {
    return RedKey(opts);
  };

  return Generator;
}

module.exports = RedKey();
