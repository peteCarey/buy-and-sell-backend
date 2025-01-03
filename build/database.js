"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
var _mysql = _interopRequireDefault(require("mysql"));
var connection = _mysql["default"].createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "Abc_123!",
  database: "buy-and-sell"
});
var db = exports.db = {
  connect: function connect() {
    return connection.connect();
  },
  query: function query(queryString, escapedValues) {
    return new Promise(function (resolve, reject) {
      connection.query(queryString, escapedValues, function (error, results, fields) {
        if (error) reject(error);
        resolve({
          results: results,
          fields: fields
        });
      });
    });
  },
  end: function end() {
    return connection.end();
  }
};