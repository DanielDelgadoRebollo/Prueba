"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _Task = _interopRequireDefault(require("../models/Task"));

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.render('index');
});
router.post('/tasks/add', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var usuarioRegistrado, usuarioGuardado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            usuarioRegistrado = (0, _Task["default"])(req.body);
            _context.next = 3;
            return usuarioRegistrado.save();

          case 3:
            usuarioGuardado = _context.sent;
            console.log(usuarioGuardado);
            console.log(usuarioRegistrado);
            res.redirect("/");

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/about', function (req, res) {
  res.send("about");
});
router.get('/edit', function (req, res) {
  res.send("edit");
});
var _default = router;
exports["default"] = _default;