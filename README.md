# logger
A utility for managing console logs within a JavaScript application

# Usage
```javascript
import Logger from 'logger';
const logger = new Logger('nameOfThisFile');

...

logger.log('your log message');
logger.warn('your warning');
logger.error('your error');
```

## Classes

<dl>
<dt><a href="#Logger">Logger</a></dt>
<dd><p>Created by hunterhodnett on 7/24/17.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#verifyVariableIsType">verifyVariableIsType(variable, type)</a></dt>
<dd><p>Verify that a given variable is of a particular type.</p>
</dd>
</dl>

<a name="Logger"></a>

## Logger
Created by hunterhodnett on 7/24/17.

**Kind**: global class  

* [Logger](#Logger)
    * [new Logger(moduleName)](#new_Logger_new)
    * [.log(message)](#Logger+log)
    * [.warn(message)](#Logger+warn)
    * [.error(message)](#Logger+error)

<a name="new_Logger_new"></a>

### new Logger(moduleName)
Conctructor


| Param | Type | Description |
| --- | --- | --- |
| moduleName | <code>String</code> | name of the module that is consuming Logger |

<a name="Logger+log"></a>

### logger.log(message)
Log a message to the browser console

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>String</code> | message to be logged |

<a name="Logger+warn"></a>

### logger.warn(message)
Log a warning to the console

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type |
| --- | --- |
| message | <code>String</code> | 

<a name="Logger+error"></a>

### logger.error(message)
Log an error to the console

**Kind**: instance method of [<code>Logger</code>](#Logger)  

| Param | Type |
| --- | --- |
| message | <code>String</code> | 

<a name="verifyVariableIsType"></a>

## verifyVariableIsType(variable, type)
Verify that a given variable is of a particular type.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| variable | <code>\*</code> | the variable being verified |
| type | <code>String</code> | the expected type of the variable |

# Testing
Tests are run with Jasmine: https://jasmine.github.io/index.html

Since specs are written using ES2015 syntax, spec files must be transpiled using babel. I detail how I created this build
step below.

When I initially attempted to run the Jasmine unit tests, I received the following error in the console:
```javascript
Hunters-MacBook-Pro:logger hunterhodnett$ ./node_modules/.bin/jasmine
/Users/hunterhodnett/PersonalProjects/logger/spec/logger.spec.js:5
import Logger from '../src/logger.js';
^^^^^^
SyntaxError: Unexpected token import
```

This led me to the following StackOverflow question: https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import  
...which led me to perform the following google search: https://www.google.com/search?q=jasmine+spec+babel&rlz=1C5CHFA_enUS725US725&oq=jasmine+spec+babel&aqs=chrome..69i57.5799j0j4&sourceid=chrome&ie=UTF-8  
...which led me to the following gist (first result in google search): https://gist.github.com/mauvm/172878a9646095d03fd7  
...which led me to create the run.js file in the /spec directory, as well as change the "test" command (within the
"scripts" section of package.json) to "./node_modules/.bin/babel-node spec/run.js", which kicks off a transpile of run.js,
which imports and runs Jasmine from within a node environment that supports ES2015 syntax.  