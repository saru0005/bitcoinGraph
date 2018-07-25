module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BitcoinMonitor/BitcoinMonitor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinMonitor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Display__ = __webpack_require__("./components/BitcoinMonitor/Display.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_BitcoinService__ = __webpack_require__("./services/BitcoinService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_CurrencyService__ = __webpack_require__("./services/CurrencyService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DocumentsFieldSet__ = __webpack_require__("./components/BitcoinMonitor/DocumentsFieldSet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DocumentInput__ = __webpack_require__("./components/BitcoinMonitor/DocumentInput.js");
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\BitcoinMonitor.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var bitcoinService = new __WEBPACK_IMPORTED_MODULE_2__services_BitcoinService__["a" /* BitcoinService */]();
var currencyService = new __WEBPACK_IMPORTED_MODULE_3__services_CurrencyService__["a" /* CurrencyService */]();

var mapToPrice = function mapToPrice(currentPrice, previousPrice) {
  return {
    code: currentPrice.code,
    description: currentPrice.description,
    currentRate: currentPrice.currentRate,
    previousRate: previousPrice ? previousPrice.currentRate : 0
  };
};

var BitcoinMonitor =
/*#__PURE__*/
function (_Component) {
  _inherits(BitcoinMonitor, _Component);

  function BitcoinMonitor(props) {
    var _this2;

    _classCallCheck(this, BitcoinMonitor);

    _this2 = _possibleConstructorReturn(this, (BitcoinMonitor.__proto__ || Object.getPrototypeOf(BitcoinMonitor)).call(this, props));
    _this2.state = {
      prices: {},
      ready: false,
      currencies: []
    };
    _this2.handleOnRefresh = _this2.handleOnRefresh.bind(_assertThisInitialized(_this2));
    _this2.loadBitcoinPriceIndex = _this2.loadBitcoinPriceIndex.bind(_assertThisInitialized(_this2));
    _this2.handleOnCurrencyChanged = _this2.handleOnCurrencyChanged.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(BitcoinMonitor, [{
    key: "handleOnRefresh",
    value: function handleOnRefresh() {
      var _this3 = this;

      var _this = this;

      if (this.state.prices.SELECTED) {
        var currency = this.state.prices.SELECTED.code;
        bitcoinService.getPrice(currency).then(function (price) {
          if (price) {
            _this3.loadBitcoinPriceIndex(price);

            setTimeout(function () {
              _this.handleOnRefresh();
            }, 5000);
          } else {
            _this3.loadBitcoinPriceIndex();

            setTimeout(function () {
              _this.handleOnRefresh();
            }, 5000);
          }
        }).catch(function (error) {
          return console.log(error.message);
        });
      } else {
        this.loadBitcoinPriceIndex();
        setTimeout(function () {
          _this.handleOnRefresh();
        }, 30000);
      }
    }
  }, {
    key: "handleOnCurrencyChanged",
    value: function handleOnCurrencyChanged(event) {
      var _this4 = this;

      var currency = event.target.value;
      bitcoinService.getPrice(currency).then(function (price) {
        if (price) {
          _this4.setState(function (prevState) {
            var prices = prevState.prices;
            prices.SELECTED = mapToPrice(price[currency], prevState.prices[currency]);
            return {
              prices: prices
            };
          });
        }
      }).catch(function (error) {
        return console.log(error.message);
      });
    }
  }, {
    key: "loadBitcoinPriceIndex",
    value: function loadBitcoinPriceIndex(additionalPrice) {
      var _this5 = this;

      bitcoinService.getPrices().then(function (prices) {
        if (prices) {
          _this5.setState(function (prevState) {
            var newPrices = {
              EUR: mapToPrice(prices.EUR, prevState.prices.EUR),
              GBP: mapToPrice(prices.GBP, prevState.prices.GBP),
              USD: mapToPrice(prices.USD, prevState.prices.USD)
            };

            if (additionalPrice) {
              newPrices.SELECTED = mapToPrice(Object.values(additionalPrice)[0], prevState.prices.SELECTED);
            }

            return {
              prices: newPrices,
              ready: true
            };
          });
        }
      }).catch(function (error) {
        return console.log(error.message);
      });
    }
  }, {
    key: "loadSupportedCurrencies",
    value: function loadSupportedCurrencies() {
      this.setState(function () {
        return {
          currencies: currencyService.getSupportedCurrencies()
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadSupportedCurrencies();
      this.loadBitcoinPriceIndex();
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.ready === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Display__["a" /* Display */], {
        currencies: this.state.currencies,
        prices: this.state.prices,
        onCurrencyChanged: this.handleOnCurrencyChanged,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
        integrity: "sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DocumentsFieldSet__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DocumentInput__["a" /* default */], {
        currencies: this.state.currencies,
        prices: this.state.prices,
        onCurrencyChanged: this.handleOnCurrencyChanged,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: " mt-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-lg btn-refresh",
        onClick: this.handleOnRefresh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fa fa-refresh fa-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }))));
    }
  }]);

  return BitcoinMonitor;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/BitcoinMonitor/Display.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Display; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Indicator__ = __webpack_require__("./components/BitcoinMonitor/Indicator.js");
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\Display.js";




var formatNumber = function formatNumber(number) {
  return number.toFixed(4).toString().padEnd(11, '0');
};

var Display = function Display(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Before"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Current"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
    className: "table-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-usd fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, formatNumber(props.prices.USD.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, formatNumber(props.prices.USD.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.USD.currentRate,
    previousRate: props.prices.USD.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-gbp fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "GBP")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, formatNumber(props.prices.GBP.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, formatNumber(props.prices.GBP.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.GBP.currentRate,
    previousRate: props.prices.GBP.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-eur fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "EUR")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, formatNumber(props.prices.EUR.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, formatNumber(props.prices.EUR.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.EUR.currentRate,
    previousRate: props.prices.EUR.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
    name: "currency",
    id: "currency",
    className: "currency form-control mx-auto",
    onChange: props.onCurrencyChanged,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, props.currencies && props.currencies.map(function (currency) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      key: currency.currency,
      value: currency.currency,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, currency.currency);
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, props.prices.SELECTED && formatNumber(props.prices.SELECTED.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, props.prices.SELECTED && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, formatNumber(props.prices.SELECTED.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.SELECTED.currentRate,
    previousRate: props.prices.SELECTED.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  })))))));
};

Display.propTypes = {
  currencies: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  prices: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onCurrencyChanged: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};


/***/ }),

/***/ "./components/BitcoinMonitor/DocumentInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\DocumentInput.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DocumentInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocumentInput, _React$Component);

  function DocumentInput() {
    _classCallCheck(this, DocumentInput);

    return _possibleConstructorReturn(this, (DocumentInput.__proto__ || Object.getPrototypeOf(DocumentInput)).apply(this, arguments));
  }

  _createClass(DocumentInput, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "file",
        name: "document-".concat(this.props.index, "-document"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      });
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
        name: "currency",
        id: "currency",
        className: "currency form-control mx-auto",
        onChange: props.onCurrencyChanged,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, props.currencies && props.currencies.map(function (currency) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
          key: currency.currency,
          value: currency.currency,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        }, currency.currency);
      }));
    }
  }]);

  return DocumentInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DocumentInput);

/***/ }),

/***/ "./components/BitcoinMonitor/DocumentsFieldSet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DocumentInput__ = __webpack_require__("./components/BitcoinMonitor/DocumentInput.js");
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\DocumentsFieldSet.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var DocumentsFieldSet =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocumentsFieldSet, _React$Component);

  function DocumentsFieldSet(props) {
    var _this;

    _classCallCheck(this, DocumentsFieldSet);

    _this = _possibleConstructorReturn(this, (DocumentsFieldSet.__proto__ || Object.getPrototypeOf(DocumentsFieldSet)).call(this, props));
    _this.state = {
      documents: []
    };
    _this.add = _this.add.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DocumentsFieldSet, [{
    key: "add",
    value: function add() {
      var documents = this.state.documents.concat(__WEBPACK_IMPORTED_MODULE_1__DocumentInput__["a" /* default */]);
      this.setState({
        documents: documents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var documents = this.state.documents.map(function (Element, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Element, {
          key: index,
          index: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        });
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "inputs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, documents, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.add,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Add"));
    }
  }]);

  return DocumentsFieldSet;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (DocumentsFieldSet);

/***/ }),

/***/ "./components/BitcoinMonitor/Indicator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Indicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\BitcoinMonitor\\Indicator.js";



var Indicator = function Indicator(props) {
  var indicator = null;

  if (props.currentRate > props.previousRate) {
    indicator = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
      className: "fa fa-chevron-up text-success ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  } else if (props.currentRate < props.previousRate) {
    indicator = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
      className: "fa fa-chevron-down text-danger ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    });
  } else {
    indicator = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
      className: "fa fa-minus text-secondary ml-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  }

  return indicator;
};

Indicator.propTypes = {
  currentRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  previousRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};


/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\components\\Header.js";



var Header = function Header(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "header navbar navbar-dark bg-dark",
    style: {
      overflowX: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "text-center mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-btc fa-3x my-auto d-inline-block",
    style: {
      color: '#FFC107'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "h3 ml-3 my-auto text-light d-inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.title))));
};

Header.defaultProps = {
  title: 'App'
};
Header.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};


/***/ }),

/***/ "./pages/graph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recharts__ = __webpack_require__("recharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BitcoinMonitor_BitcoinMonitor__ = __webpack_require__("./components/BitcoinMonitor/BitcoinMonitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Header__ = __webpack_require__("./components/Header.js");

var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\pages\\graph.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var dateFormat = __webpack_require__("dateformat");

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
                  key: dateFormat(new Date(), "isoDateTime")
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
      this.fetch();
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch() {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
      var url, res, json, result, data;
      return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "https://api.coindesk.com/v1/bpi/currentprice.json";
              _context2.next = 3;
              return fetch(url);

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              json = _context2.sent;
              result = {
                key: dateFormat(new Date(), "isoDateTime")
              };
              Object.keys(json.bpi, json.time).map(function (item) {
                result[item] = json.bpi[item].rate_float + 1;
                result[item] = json.time.updatedISO;
                console.log(result[item]);
              });
              data = this.state.data;
              data.push(result);
              this.setState({
                data: data
              });
              console.log(data);
              setTimeout(function () {
                this.fetch();
              }, 5000);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })))
  }, {
    key: "renderGrapgh",
    value: function renderGrapgh() {
      var data = this.state.data; // let creatGraph = this.state.data.map()

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["LineChart"], {
        width: 1100,
        height: 800,
        data: data,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["XAxis"], {
        dataKey: "key",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "USD",
        stroke: "#8884d8",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "GBP",
        stroke: "#82ca9d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "EUR",
        stroke: "#82ca9d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })));
    }
  }, {
    key: "render",
    value: function render() {
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }); // console.log('render', data)

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Header__["a" /* Header */], {
        title: "Monitor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "w3-cell-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "w3-container  w3-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BitcoinMonitor_BitcoinMonitor__["a" /* BitcoinMonitor */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        "class": "w3-container w3-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, this.renderGrapgh())));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./services/BitcoinService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var mapToPrice = function mapToPrice(bpiPrice) {
  return {
    code: bpiPrice.code,
    description: bpiPrice.description,
    currentRate: bpiPrice.rate_float
  };
};

var BASE_URL = 'https://api.coindesk.com/v1/bpi';
var BitcoinService =
/*#__PURE__*/
function () {
  function BitcoinService() {
    _classCallCheck(this, BitcoinService);
  }

  _createClass(BitcoinService, [{
    key: "getPrice",
    value: function getPrice(currency) {
      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("".concat(BASE_URL, "/currentprice/").concat(currency, ".json")).then(function (response) {
          if (response.data && response.data.bpi) {
            resolve(_defineProperty({}, currency, mapToPrice(response.data.bpi[currency])));
          }
        }).catch(function (error) {
          return reject(error.message);
        });
      });
    }
  }, {
    key: "getPrices",
    value: function getPrices() {
      return new Promise(function (resolve, reject) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("".concat(BASE_URL, "/currentprice.json")).then(function (response) {
          if (response.data && response.data.bpi) {
            resolve({
              EUR: mapToPrice(response.data.bpi.EUR),
              GBP: mapToPrice(response.data.bpi.GBP),
              USD: mapToPrice(response.data.bpi.USD)
            });
          } else {
            reject('No Bitcoin prices available');
          }
        });
      });
    }
  }]);

  return BitcoinService;
}();

/***/ }),

/***/ "./services/CurrencyService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var currencies = __webpack_require__("./services/currencies.json");

var CurrencyService =
/*#__PURE__*/
function () {
  function CurrencyService() {
    _classCallCheck(this, CurrencyService);
  }

  _createClass(CurrencyService, [{
    key: "getSupportedCurrencies",
    value: function getSupportedCurrencies() {
      return currencies;
    }
  }]);

  return CurrencyService;
}();

/***/ }),

/***/ "./services/currencies.json":
/***/ (function(module, exports) {

module.exports = [{"currency":"","country":""},{"currency":"AED","country":"United Arab Emirates Dirham"},{"currency":"AFN","country":"Afghan Afghani"},{"currency":"ALL","country":"Albanian Lek"},{"currency":"AMD","country":"Armenian Dram"},{"currency":"ANG","country":"Netherlands Antillean Guilder"},{"currency":"AOA","country":"Angolan Kwanza"},{"currency":"ARS","country":"Argentine Peso"},{"currency":"AUD","country":"Australian Dollar"},{"currency":"AWG","country":"Aruban Florin"},{"currency":"AZN","country":"Azerbaijani Manat"},{"currency":"BAM","country":"Bosnia-Herzegovina Convertible Mark"},{"currency":"BBD","country":"Barbadian Dollar"},{"currency":"BDT","country":"Bangladeshi Taka"},{"currency":"BGN","country":"Bulgarian Lev"},{"currency":"BHD","country":"Bahraini Dinar"},{"currency":"BIF","country":"Burundian Franc"},{"currency":"BMD","country":"Bermudan Dollar"},{"currency":"BND","country":"Brunei Dollar"},{"currency":"BOB","country":"Bolivian Boliviano"},{"currency":"BRL","country":"Brazilian Real"},{"currency":"BSD","country":"Bahamian Dollar"},{"currency":"BTC","country":"Bitcoin"},{"currency":"BTN","country":"Bhutanese Ngultrum"},{"currency":"BWP","country":"Botswanan Pula"},{"currency":"BYR","country":"Belarusian Ruble"},{"currency":"BZD","country":"Belize Dollar"},{"currency":"CAD","country":"Canadian Dollar"},{"currency":"CDF","country":"Congolese Franc"},{"currency":"CHF","country":"Swiss Franc"},{"currency":"CLF","country":"Chilean Unit of Account (UF)"},{"currency":"CLP","country":"Chilean Peso"},{"currency":"CNY","country":"Chinese Yuan"},{"currency":"COP","country":"Colombian Peso"},{"currency":"CRC","country":"Costa Rican Colón"},{"currency":"CUP","country":"Cuban Peso"},{"currency":"CVE","country":"Cape Verdean Escudo"},{"currency":"CZK","country":"Czech Republic Koruna"},{"currency":"DJF","country":"Djiboutian Franc"},{"currency":"DKK","country":"Danish Krone"},{"currency":"DOP","country":"Dominican Peso"},{"currency":"DZD","country":"Algerian Dinar"},{"currency":"EEK","country":"Estonian Kroon"},{"currency":"EGP","country":"Egyptian Pound"},{"currency":"ERN","country":"Eritrean Nnakfa"},{"currency":"ETB","country":"Ethiopian Birr"},{"currency":"EUR","country":"Euro"},{"currency":"FJD","country":"Fijian Dollar"},{"currency":"FKP","country":"Falkland Islands Pound"},{"currency":"GBP","country":"British Pound Sterling"},{"currency":"GEL","country":"Georgian Lari"},{"currency":"GHS","country":"Ghanaian Cedi"},{"currency":"GIP","country":"Gibraltar Pound"},{"currency":"GMD","country":"Gambian Dalasi"},{"currency":"GNF","country":"Guinean Franc"},{"currency":"GTQ","country":"Guatemalan Quetzal"},{"currency":"GYD","country":"Guyanaese Dollar"},{"currency":"HKD","country":"Hong Kong Dollar"},{"currency":"HNL","country":"Honduran Lempira"},{"currency":"HRK","country":"Croatian Kuna"},{"currency":"HTG","country":"Haitian Gourde"},{"currency":"HUF","country":"Hungarian Forint"},{"currency":"IDR","country":"Indonesian Rupiah"},{"currency":"ILS","country":"Israeli New Sheqel"},{"currency":"INR","country":"Indian Rupee"},{"currency":"IQD","country":"Iraqi Dinar"},{"currency":"IRR","country":"Iranian Rial"},{"currency":"ISK","country":"Icelandic Króna"},{"currency":"JEP","country":"Jersey Pound"},{"currency":"JMD","country":"Jamaican Dollar"},{"currency":"JOD","country":"Jordanian Dinar"},{"currency":"JPY","country":"Japanese Yen"},{"currency":"KES","country":"Kenyan Shilling"},{"currency":"KGS","country":"Kyrgystani Som"},{"currency":"KHR","country":"Cambodian Riel"},{"currency":"KMF","country":"Comorian Franc"},{"currency":"KPW","country":"North Korean Won"},{"currency":"KRW","country":"South Korean Won"},{"currency":"KWD","country":"Kuwaiti Dinar"},{"currency":"KYD","country":"Cayman Islands Dollar"},{"currency":"KZT","country":"Kazakhstani Tenge"},{"currency":"LAK","country":"Laotian Kip"},{"currency":"LBP","country":"Lebanese Pound"},{"currency":"LKR","country":"Sri Lankan Rupee"},{"currency":"LRD","country":"Liberian Dollar"},{"currency":"LSL","country":"Lesotho Loti"},{"currency":"LTL","country":"Lithuanian Litas"},{"currency":"LVL","country":"Latvian Lats"},{"currency":"LYD","country":"Libyan Dinar"},{"currency":"MAD","country":"Moroccan Dirham"},{"currency":"MDL","country":"Moldovan Leu"},{"currency":"MGA","country":"Malagasy Ariary"},{"currency":"MKD","country":"Macedonian Denar"},{"currency":"MMK","country":"Myanma Kyat"},{"currency":"MNT","country":"Mongolian Tugrik"},{"currency":"MOP","country":"Macanese Pataca"},{"currency":"MRO","country":"Mauritanian Ouguiya"},{"currency":"MTL","country":"Maltese Lira"},{"currency":"MUR","country":"Mauritian Rupee"},{"currency":"MVR","country":"Maldivian Rufiyaa"},{"currency":"MWK","country":"Malawian Kwacha"},{"currency":"MXN","country":"Mexican Peso"},{"currency":"MYR","country":"Malaysian Ringgit"},{"currency":"MZN","country":"Mozambican Metical"},{"currency":"NAD","country":"Namibian Dollar"},{"currency":"NGN","country":"Nigerian Naira"},{"currency":"NIO","country":"Nicaraguan Córdoba"},{"currency":"NOK","country":"Norwegian Krone"},{"currency":"NPR","country":"Nepalese Rupee"},{"currency":"NZD","country":"New Zealand Dollar"},{"currency":"OMR","country":"Omani Rial"},{"currency":"PAB","country":"Panamanian Balboa"},{"currency":"PEN","country":"Peruvian Nuevo Sol"},{"currency":"PGK","country":"Papua New Guinean Kina"},{"currency":"PHP","country":"Philippine Peso"},{"currency":"PKR","country":"Pakistani Rupee"},{"currency":"PLN","country":"Polish Zloty"},{"currency":"PYG","country":"Paraguayan Guarani"},{"currency":"QAR","country":"Qatari Rial"},{"currency":"RON","country":"Romanian Leu"},{"currency":"RSD","country":"Serbian Dinar"},{"currency":"RUB","country":"Russian Ruble"},{"currency":"RWF","country":"Rwandan Franc"},{"currency":"SAR","country":"Saudi Riyal"},{"currency":"SBD","country":"Solomon Islands Dollar"},{"currency":"SCR","country":"Seychellois Rupee"},{"currency":"SDG","country":"Sudanese Pound"},{"currency":"SEK","country":"Swedish Krona"},{"currency":"SGD","country":"Singapore Dollar"},{"currency":"SHP","country":"Saint Helena Pound"},{"currency":"SLL","country":"Sierra Leonean Leone"},{"currency":"SOS","country":"Somali Shilling"},{"currency":"SRD","country":"Surinamese Dollar"},{"currency":"STD","country":"São Tomé and Príncipe Dobra"},{"currency":"SVC","country":"Salvadoran Colón"},{"currency":"SYP","country":"Syrian Pound"},{"currency":"SZL","country":"Swazi Lilangeni"},{"currency":"THB","country":"Thai Baht"},{"currency":"TJS","country":"Tajikistani Somoni"},{"currency":"TMT","country":"Turkmenistani Manat"},{"currency":"TND","country":"Tunisian Dinar"},{"currency":"TOP","country":"Tongan Pa?anga"},{"currency":"TRY","country":"Turkish Lira"},{"currency":"TTD","country":"Trinidad and Tobago Dollar"},{"currency":"TWD","country":"New Taiwan Dollar"},{"currency":"TZS","country":"Tanzanian Shilling"},{"currency":"UAH","country":"Ukrainian Hryvnia"},{"currency":"UGX","country":"Ugandan Shilling"},{"currency":"USD","country":"United States Dollar"},{"currency":"UYU","country":"Uruguayan Peso"},{"currency":"UZS","country":"Uzbekistan Som"},{"currency":"VEF","country":"Venezuelan Bolívar Fuerte"},{"currency":"VND","country":"Vietnamese Dong"},{"currency":"VUV","country":"Vanuatu Vatu"},{"currency":"WST","country":"Samoan Tala"},{"currency":"XAF","country":"CFA Franc BEAC"},{"currency":"XAG","country":"Silver (troy ounce)"},{"currency":"XAU","country":"Gold (troy ounce)"},{"currency":"XBT","country":"Bitcoin"},{"currency":"XCD","country":"East Caribbean Dollar"},{"currency":"XDR","country":"Special Drawing Rights"},{"currency":"XOF","country":"CFA Franc BCEAO"},{"currency":"XPF","country":"CFP Franc"},{"currency":"YER","country":"Yemeni Rial"},{"currency":"ZAR","country":"South African Rand"},{"currency":"ZMK","country":"Zambian Kwacha (pre-2013)"},{"currency":"ZMW","country":"Zambian Kwacha"},{"currency":"ZWL","country":"Zimbabwean Dollar"}]

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/graph.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "dateformat":
/***/ (function(module, exports) {

module.exports = require("dateformat");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recharts":
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=graph.js.map