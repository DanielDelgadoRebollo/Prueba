"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

var _config = require("./config");

_app["default"].listen(3000);

console.log('Server on port', _config.PORT);