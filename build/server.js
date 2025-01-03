"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _hapi = _interopRequireDefault(require("@hapi/hapi"));
var _routes = _interopRequireDefault(require("./routes"));
var _database = require("./database");
var server;
var start = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          server = _hapi["default"].server({
            port: 8000,
            host: 'localhost'
          });
          _routes["default"].forEach(function (route) {
            return server.route(route);
          });
          _database.db.connect();
          _context.next = 5;
          return server.start();
        case 5:
          console.log("Server is listening on ".concat(server.info.uri));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function start() {
    return _ref.apply(this, arguments);
  };
}();
process.on('unhandledRejection', function (err) {
  console.log(err);
  process.exit(1);
});
process.on('SIGINT', /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        console.log('Stopping server...');
        _context2.next = 3;
        return server.stop({
          timeout: 10000
        });
      case 3:
        _database.db.end();
        console.log('Server stopped');
        process.exit(0);
      case 6:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
start();