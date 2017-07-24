/**
 * This module contains unit tests for the Logger class.
 * 
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
    let origLog;
    let origWarn;
    let origError;
    let mockLog;
    let mockWarn;
    let mockError;

    beforeEach(() => {
        mockLog = jasmine.createSpy('log');
        mockWarn = jasmine.createSpy('warn');
        mockError = jasmine.createSpy('error');
        
        origLog = replaceConsoleFunc('log', mockLog);
        origWarn = replaceConsoleFunc('warn', mockWarn);
        origError = replaceConsoleFunc('error', mockError);
    });

    afterEach(() => {
        replaceConsoleFunc('log', origLog);
        replaceConsoleFunc('warn', origWarn);
        replaceConsoleFunc('error', origError);
    });

    describe('constructor', () => {
        it('should create a new Logger object without crashing', () => {
            new Logger('test');
        });
        
        it('should throw an error if a module name is not provided', () => {
            expect(() => { new Logger(); }).toThrow();
        });
    });
    
    describe('log', () => {
        it('should call console.log with a module name and a message', () => {
            const moduleName = 'moduleName';
            const message = 'message';
            const logger = new Logger(moduleName);

            logger.log(message);
            
            expect(mockLog).toHaveBeenCalledWith(`${moduleName}: ${message}`);
        });
    });

    describe('warn', () => {
        it('should call console.warn with a module name and a message', () => {
            const moduleName = 'moduleName';
            const message = 'message';
            const logger = new Logger(moduleName);

            logger.warn(message);

            expect(mockWarn).toHaveBeenCalledWith(`${moduleName}: ${message}`);
        });
    });

    describe('error', () => {
        it('should call console.error with a module name and a message', () => {
            const moduleName = 'moduleName';
            const message = 'message';
            const logger = new Logger(moduleName);

            logger.error(message);

            expect(mockError).toHaveBeenCalledWith(`${moduleName}: ${message}`);
        });
    });
});