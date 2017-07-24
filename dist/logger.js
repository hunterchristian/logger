'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Verify that a given variable is of a particular type.
 * @param {*} variable - the variable being verified
 * @param {String} type - the expected type of the variable
 */
function verifyVariableIsType(variable, type) {
  (0, _invariant2.default)((typeof variable === 'undefined' ? 'undefined' : _typeof(variable)) === type, variable + ' must be a ' + type);
}

/**
 * Created by hunterhodnett on 7/24/17.
 */

var Logger = function () {
  /**
   * Conctructor
   * @param {String} moduleName - name of the module that is consuming Logger
   */
  function Logger(moduleName) {
    _classCallCheck(this, Logger);

    verifyVariableIsType(moduleName, 'string');
    this.moduleName = moduleName;
  }

  /**
   * Log a message to the browser console
   * @param {String} message - message to be logged
   */


  _createClass(Logger, [{
    key: 'log',
    value: function log(message) {
      verifyVariableIsType(message, 'string');
      console.log(this.moduleName + ': ' + message);
    }

    /**
     * Log a warning to the console
     * @param {String} message
     */

  }, {
    key: 'warn',
    value: function warn(message) {
      verifyVariableIsType(message, 'string');
      console.warn(this.moduleName + ': ' + message);
    }

    /**
     * Log an error to the console
     * @param {String} message
     */

  }, {
    key: 'error',
    value: function error(message) {
      verifyVariableIsType(message, 'string');
      console.error(this.moduleName + ': ' + message);
    }
  }]);

  return Logger;
}();

exports.default = Logger;
