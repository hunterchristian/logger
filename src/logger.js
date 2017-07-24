import invariant from 'invariant';

/**
 * Verify that a given variable is of a particular type.
 * @param {*} variable - the variable being verified
 * @param {String} type - the expected type of the variable
 */
function verifyVariableIsType(variable, type) {
    invariant(typeof variable === type, `${variable} must be a ${type}`);
}

/**
 * Created by hunterhodnett on 7/24/17.
 */

class Logger {
    /**
     * Conctructor
     * @param {String} moduleName - name of the module that is consuming Logger
     */
    constructor(moduleName) {
        verifyVariableIsType(moduleName, 'string');
        this.moduleName = moduleName;
    }

    /**
     * Log a message to the browser console
     * @param {String} message - message to be logged
     */
    log(message) {
        verifyVariableIsType(message, 'string');
        console.log(`${this.moduleName}: ${message}`);
    }

    /**
     * Log a warning to the console
     * @param {String} message
     */
    warn(message) {
        verifyVariableIsType(message, 'string');
        console.warn(`${this.moduleName}: ${message}`);
    }

    /**
     * Log an error to the console
     * @param {String} message
     */
    error(message) {
        verifyVariableIsType(message, 'string');
        console.error(`${this.moduleName}: ${message}`);
    }
}

export default Logger;