## RedKey

A small utility for generating consistent keys. Useful for working with KV stores such as [Redis](http://redis.io)

### How to use

You can just require it and start creating keys:

```js
var redkey = require('redkey');

var key = redkey('my', 'key'); // returns "my:key"
```

By default keys are glued together using a colon. You can, however, configure this:

```js
var redkey = require('redkey').configure({
  separator: '.'
});

var key = redkey('my', 'key'); // returns "my.key"
```

Other configuration options are available:

```js
var redkey = require('redkey').configure({
  separator: '.',       // the character to seperate key components with
  namespace: 'company', // a string to prefix all keys with
  suffix: 'debug',      // a string to suffix all keys with
  version: 'v1'         // a string to include in each key. This appears before the key itself but after the namespace
});

var key = redkey('my', 'key'); // returns "company.v1.my.key.debug"
```

### Tests

You can run the tests with the following command:

```
npm test
```

### Contributing

Send a PR!
