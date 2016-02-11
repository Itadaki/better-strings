# better-strings
This module provides `String.format` C#-like function extending `String` object

##Install
To install the module
```sh
$ npm install better-strings
```

##How to use
There are two ways of using this module.

###Using as string-object method
**String.format(arg1 [, arg2, ..., argN])**
```node
//Requiring the module enables the tweak
require('better-strings');

var result = 'Hello {0}!'.format('world');

console.log(result);
//produces 'Hello world!' output
```

###Using as module method
**betterString.format(baseString, arg1 [, arg2, ..., argN])**
```node
//Requiring the module enables the string method anyway
var betterString = require('better-strings');

var result = betterString.format('Hello {0}!', 'world');

console.log(result);
//produces 'Hello world!' output
```

##Test
If you want to run the test, get the repository and run
```sh
$ npm install
$ npm test
```

##Why yet another 'string module'?
I have created this module as an exercise to learn about javascript, node, npm, gulp, unit test, and other dev-things involved in current development proccesses.
