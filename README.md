# logger
A utility for managing console logs within a JavaScript application

## Testing
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