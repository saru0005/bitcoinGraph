webpackHotUpdate(4,{

/***/ "./components/BitcoinMonitor/ShowGraph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recharts__ = __webpack_require__("./node_modules/recharts/es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);

var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\ShowGraph.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var BASE_URL = 'https://api.coindesk.com/v1/bpi';

var dateFormat = __webpack_require__("./node_modules/dateformat/lib/dateformat.js");

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var url, res, json, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //     axios.get(${BASE_URL}/currentprice.json)
                //   .then(response => {
                //     console.log("kkk",response.data.bpi)
                //   });
                url = "https://api.coindesk.com/v1/bpi/currentprice.json";
                _context.next = 3;
                return fetch(url);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                json = _context.sent;
                result = {
                  key: dateFormat(new Date(), "h:MM:ss TT")
                };
                Object.keys(json.bpi).map(function (item) {
                  result[item] = json.bpi[item].rate_float;
                });
                return _context.abrupt("return", {
                  bitcoin: result
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      data: [_this.props.bitcoin]
    };
    _this.fetch = _this.fetch.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.fetch();
      }, 5000);
    }
  }, {
    key: "fetch",
    value: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("".concat(BASE_URL, "/currentprice.json")).then(function (response) {
                  console.log("kkk", response.data);
                }); // const url = "https://api.coindesk.com/v1/bpi/currentprice.json"
                // const res = await fetch(url)
                // const json = await res.json()
                // console.log("Hereeeeeeeee",json)
                // const urlnd = "https://api.coindesk.com/v1/bpi/currentprice/CNY.json"
                // const resnd = await fetch(urlnd)
                // const jsonnd = await resnd.json()

                result = {
                  key: dateFormat(new Date(), "h:MM:ss TT") // Object.keys(json.bpi).map((item) => {
                  //   result[item] = json.bpi[item].rate_float
                  // })
                  // Object.keys(jsonnd.bpi).map((item) => {
                  //   result[item] = jsonnd.bpi[item].rate_float
                  // })
                  // let { data } = this.state
                  // if (data.length > 10) {
                  //   data.shift();
                  // }
                  // data.push(result)
                  // this.setState({
                  //   data: data
                  // })

                };

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function fetch() {
        return _fetch.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      console.log("render", data);
      var Value = data.map(function (item) {
        return {
          Value: item
        };
      });
      console.log("Map", Value);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["d" /* LineChart */], {
        width: 1024,
        height: 480,
        data: Value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["a" /* CartesianGrid */], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["f" /* XAxis */], {
        dataKey: "Value.key",
        padding: {
          left: 30,
          right: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["g" /* YAxis */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["e" /* Tooltip */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["b" /* Legend */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["c" /* Line */], {
        type: "monotone",
        dataKey: "Value.USD",
        stroke: "#8884d8",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["c" /* Line */], {
        type: "monotone",
        dataKey: "Value.GBP",
        stroke: "#82ca9d",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["c" /* Line */], {
        type: "monotone",
        dataKey: "Value.EUR",
        stroke: "#d82d36",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ })

})
//# sourceMappingURL=4.a9e6b4c376502890f028.hot-update.js.map