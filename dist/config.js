"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://testUser:12345@doctorstrange.wc8mn.mongodb.net/DoctorStrange?retryWrites=true&w=majority";
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 3000;
exports.PORT = PORT;