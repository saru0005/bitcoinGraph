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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ShowGraph__ = __webpack_require__("./components/BitcoinMonitor/ShowGraph.js");
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
var bb = 3000;

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
      prices2: {},
      ready: false,
      currencies: []
    };
    _this2.handleOnRefresh = _this2.handleOnRefresh.bind(_assertThisInitialized(_this2));
    _this2.loadBitcoinPriceIndex = _this2.loadBitcoinPriceIndex.bind(_assertThisInitialized(_this2));
    _this2.loadBitcoinPriceIndex2 = _this2.loadBitcoinPriceIndex2.bind(_assertThisInitialized(_this2));
    _this2.handleOnCurrencyChanged = _this2.handleOnCurrencyChanged.bind(_assertThisInitialized(_this2));
    _this2.handleOnCurrencyChanged2 = _this2.handleOnCurrencyChanged2.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(BitcoinMonitor, [{
    key: "handleOnRefresh",
    value: function handleOnRefresh() {
      var _this3 = this;

      var _this = this;

      if (this.state.prices.SELECTED) {
        var currency = this.state.prices.SELECTED.code;
        var getnameprice = this.state.prices.SELECTED.code;
        this.setState({
          getnameprice: getnameprice
        });
        bitcoinService.getPrice(currency).then(function (price) {
          if (price) {
            _this3.loadBitcoinPriceIndex(price);

            setTimeout(function () {
              _this.handleOnRefresh();
            }, bb);
          } else {
            _this3.loadBitcoinPriceIndex();

            setTimeout(function () {
              _this.handleOnRefresh();
            }, bb);
          }
        }).catch(function (error) {
          return console.log(error.message);
        });
      } else {
        this.loadBitcoinPriceIndex();
        setTimeout(function () {
          _this.handleOnRefresh();
        }, bb);
      }

      if (this.state.prices2.SELECTED) {
        var _currency = this.state.prices2.SELECTED.code;
        var getnameprice2 = this.state.prices2.SELECTED.code;
        this.setState({
          getnameprice2: getnameprice2
        });
        bitcoinService.getPrice(_currency).then(function (price) {
          if (price) {
            _this3.loadBitcoinPriceIndex2(price);

            setTimeout(function () {
              _this.handleOnRefresh();
            }, bb);
          } else {
            _this3.loadBitcoinPriceIndex2();

            setTimeout(function () {
              _this.handleOnRefresh();
            }, bb);
          }
        }).catch(function (error) {
          return console.log(error.message);
        });
      } else {
        this.loadBitcoinPriceIndex2();
        setTimeout(function () {
          _this.handleOnRefresh();
        }, bb);
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
    key: "handleOnCurrencyChanged2",
    value: function handleOnCurrencyChanged2(event) {
      var _this5 = this;

      var currency = event.target.value;
      bitcoinService.getPrice(currency).then(function (price) {
        if (price) {
          _this5.setState(function (prevState) {
            var prices2 = prevState.prices2;
            prices2.SELECTED = mapToPrice(price[currency], prevState.prices2[currency]);
            return {
              prices2: prices2
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
      var _this6 = this;

      bitcoinService.getPrices().then(function (prices) {
        if (prices) {
          _this6.setState(function (prevState) {
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
    key: "loadBitcoinPriceIndex2",
    value: function loadBitcoinPriceIndex2(additionalPrice) {
      var _this7 = this;

      bitcoinService.getPrices().then(function (prices2) {
        if (prices2) {
          _this7.setState(function (prevState) {
            var newPrices2 = {
              EUR: mapToPrice(prices2.EUR, prevState.prices2.EUR),
              GBP: mapToPrice(prices2.GBP, prevState.prices2.GBP),
              USD: mapToPrice(prices2.USD, prevState.prices2.USD)
            };

            if (additionalPrice) {
              newPrices2.SELECTED = mapToPrice(Object.values(additionalPrice)[0], prevState.prices2.SELECTED);
            }

            return {
              prices2: newPrices2,
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
      this.handleOnRefresh();
    }
  }, {
    key: "render",
    value: function render() {
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      });
      return this.state.ready === true && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "w3-cell-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "w3-container  w3-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Display__["a" /* Display */], {
        currencies: this.state.currencies,
        prices: this.state.prices,
        prices2: this.state.prices2,
        onCurrencyChanged: this.handleOnCurrencyChanged,
        onCurrencyChanged2: this.handleOnCurrencyChanged2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "favicon.ico",
        type: "image/x-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
        integrity: "sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: " mt-5 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        "class": "w3-container w3-cell",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ShowGraph__["a" /* default */], {
        prices: this.state.prices,
        prices2: this.state.prices2,
        getnameprice: this.state.getnameprice,
        getnameprice2: this.state.getnameprice2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
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
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Before"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("th", {
    className: "text-uppercase ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Current"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tbody", {
    className: "table-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-usd fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "USD")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, formatNumber(props.prices.USD.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, formatNumber(props.prices.USD.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.USD.currentRate,
    previousRate: props.prices.USD.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-gbp fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "GBP")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, formatNumber(props.prices.GBP.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, formatNumber(props.prices.GBP.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.GBP.currentRate,
    previousRate: props.prices.GBP.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "fa fa-eur fa-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "EUR")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, formatNumber(props.prices.EUR.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, formatNumber(props.prices.EUR.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.EUR.currentRate,
    previousRate: props.prices.EUR.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
    name: "currency",
    id: "currency",
    className: "currency form-control mx-auto",
    onChange: props.onCurrencyChanged,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, props.currencies && props.currencies.map(function (currency) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      key: currency.currency,
      value: currency.currency,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }, currency.currency);
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, props.prices.SELECTED && formatNumber(props.prices.SELECTED.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, props.prices.SELECTED && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, formatNumber(props.prices.SELECTED.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices.SELECTED.currentRate,
    previousRate: props.prices.SELECTED.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
    name: "currency",
    id: "currency",
    className: "currency form-control mx-auto",
    onChange: props.onCurrencyChanged2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, props.currencies && props.currencies.map(function (currency) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      key: currency.currency,
      value: currency.currency,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      }
    }, currency.currency);
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, props.prices2.SELECTED && formatNumber(props.prices2.SELECTED.previousRate)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, props.prices2.SELECTED && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, formatNumber(props.prices2.SELECTED.currentRate), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Indicator__["a" /* Indicator */], {
    currentRate: props.prices2.SELECTED.currentRate,
    previousRate: props.prices2.SELECTED.previousRate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
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

/* unused harmony default export */ var _unused_webpack_default_export = (DocumentsFieldSet);

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

/***/ "./components/BitcoinMonitor/ShowGraph.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recharts__ = __webpack_require__("recharts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
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
        var result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //     axios.get(${BASE_URL}/currentprice.json)
                //   .then(response => {
                //     console.log("kkk",response.data.bpi)
                //   });
                result = {
                  key: dateFormat(new Date(), "h:MM:ss TT")
                };
                __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("".concat(BASE_URL, "/currentprice.json")).then(function (response) {
                  console.log("kkk", response.data);
                  Object.keys(response.data.bpi).map(function (item) {
                    result[item] = response.data.bpi[item].rate_float;
                  });
                });
                return _context.abrupt("return", {
                  bitcoin: result
                });

              case 3:
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
      }, 3000);
    }
  }, {
    key: "fetch",
    value: function fetch() {
      var result = {
        key: dateFormat(new Date(), "h:MM:ss TT")
      };
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("".concat(BASE_URL, "/currentprice.json")).then(function (response) {
        console.log("kkk", response.data);
        Object.keys(response.data.bpi).map(function (item) {
          result[item] = response.data.bpi[item].rate_float;
        });
      });
      var gettname = this.props.getnameprice;
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("".concat(BASE_URL, "/currentprice/").concat(gettname, ".json")).then(function (response2) {
        console.log("FFFF", response2.data);
        Object.keys(response2.data.bpi).map(function (item) {
          result[item] = response2.data.bpi[item].rate_float;
        });
      });
      var gettname2 = this.props.getnameprice2;
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get("".concat(BASE_URL, "/currentprice/").concat(gettname2, ".json")).then(function (response3) {
        console.log("FFFF", response3.data);
        Object.keys(response3.data.bpi).map(function (item) {
          result[item] = response3.data.bpi[item].rate_float;
        });
      });
      var data = this.state.data;

      if (data.length > 10) {
        data.shift();
      }

      data.push(result);
      this.setState({
        data: data
      });
      console.log(data);
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;
      console.log("render", data);
      var coin4 = "Value." + this.props.getnameprice;
      var coin5 = "Value." + this.props.getnameprice2;
      var Value = data.map(function (item) {
        return {
          Value: item
        };
      });
      console.log("Map", Value);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["LineChart"], {
        width: 1024,
        height: 480,
        data: Value,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["XAxis"], {
        dataKey: "Value.key",
        padding: {
          left: 30,
          right: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "Value.USD",
        stroke: "#8884d8",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "Value.GBP",
        stroke: "#82ca9d",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: "Value.EUR",
        stroke: "#d82d36",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: coin4,
        stroke: "#ffff00",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_recharts__["Line"], {
        type: "monotone",
        dataKey: coin5,
        stroke: "#80ff00",
        activeDot: {
          r: 5
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Index);

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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_BitcoinMonitor_BitcoinMonitor__ = __webpack_require__("./components/BitcoinMonitor/BitcoinMonitor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "E:\\Game\\Work2018\\bitcoinGraph\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var dateFormat = __webpack_require__("dateformat");

var graph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(graph, _React$Component);

  function graph() {
    _classCallCheck(this, graph);

    return _possibleConstructorReturn(this, (graph.__proto__ || Object.getPrototypeOf(graph)).apply(this, arguments));
  }

  _createClass(graph, [{
    key: "render",
    value: function render() {
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://www.w3schools.com/w3css/4/w3.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* Header */], {
        title: "BitCoin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_BitcoinMonitor_BitcoinMonitor__["a" /* BitcoinMonitor */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    }
  }]);

  return graph;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (graph);

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

module.exports = __webpack_require__("./pages/index.js");


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
//# sourceMappingURL=index.js.map