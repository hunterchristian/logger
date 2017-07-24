'use strict';

var _logger = require('../src/logger.js');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace a function in the console object with another function.
 * @param {String} consoleFuncName - the name of the console function to be replaced
 * @param {Function} newFunc - the new function which will replace a console function
 * @return {Function} origFunction;
 */
function replaceConsoleFunc(consoleFuncName, newFunc) {
    var origFunction = console[consoleFuncName];
    console[consoleFuncName] = newFunc;
    return origFunction;
} /**
   * This module contains unit tests for the Logger class.
   * 
   * Created by hunterhodnett on 7/24/17.
   */

describe('Logger', function () {
    var origLog = void 0;
    var origWarn = void 0;
    var origError = void 0;
    var mockLog = void 0;
    var mockWarn = void 0;
    var mockError = void 0;

    beforeEach(function () {
        mockLog = jasmine.createSpy('log');
        mockWarn = jasmine.createSpy('warn');
        mockError = jasmine.createSpy('error');

        origLog = replaceConsoleFunc('log', mockLog);
        origWarn = replaceConsoleFunc('warn', mockWarn);
        origError = replaceConsoleFunc('error', mockError);
    });

    afterEach(function () {
        replaceConsoleFunc('log', origLog);
        replaceConsoleFunc('warn', origWarn);
        replaceConsoleFunc('error', origError);
    });

    describe('constructor', function () {
        it('should create a new Logger object without crashing', function () {
            new _logger2.default('test');
        });

        it('should throw an error if a module name is not provided', function () {
            expect(function () {
                new _logger2.default();
            }).toThrow();
        });
    });

    describe('log', function () {
        it('should call console.log with a module name and a message', function () {
            var moduleName = 'moduleName';
            var message = 'message';
            var logger = new _logger2.default(moduleName);

            logger.log(message);

            expect(mockLog).toHaveBeenCalledWith(moduleName + ': ' + message);
        });
    });

    describe('warn', function () {
        it('should call console.warn with a module name and a message', function () {
            var moduleName = 'moduleName';
            var message = 'message';
            var logger = new _logger2.default(moduleName);

            logger.warn(message);

            expect(mockWarn).toHaveBeenCalledWith(moduleName + ': ' + message);
        });
    });

    describe('error', function () {
        it('should call console.error with a module name and a message', function () {
            var moduleName = 'moduleName';
            var message = 'message';
            var logger = new _logger2.default(moduleName);

            logger.error(message);

            expect(mockError).toHaveBeenCalledWith(moduleName + ': ' + message);
        });
    });
});
