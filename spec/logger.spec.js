/**
 * Created by hunterhodnett on 7/24/17.
 */

import Logger from '../src/logger.js';

/**
 * Replace a function in the console object with another function.
 * @param {String} consoleFuncName - the name of the console function to be replaced
 * @param {Function} newFunc - the new function which will replace a console function
 * @return {Function} origFunction;
 */
function replaceConsoleFunc(consoleFuncName, newFunc) {
    let origFunction = console[consoleFuncName];
    console[consoleFuncName] = newFunc;
    return origFunction;
}

describe('Logger', () => {
    let origConsoleLog;
    let origConsoleWarn;
    let origConsoleError;

    beforeEach(() => {
        origConsoleLog = replaceConsoleFunc('log', jasmine.createSpy('log'));
        origConsoleWarn = replaceConsoleFunc('warn', jasmine.createSpy('warn'));
        origConsoleError = replaceConsoleFunc('error', jasmine.createSpy('error'));
    });

    afterEach(() => {
        replaceConsoleFunc('log', origConsoleLog);
        replaceConsoleFunc('warn', origConsoleWarn);
        replaceConsoleFunc('error', origConsoleError);
    });

    describe('constructor', () => {
        it('should create a new Logger object without crashing', () => {
            new Logger('test');
        });
    });
});