webpackHotUpdate(4,{

/***/ "./components/BitcoinMonitor/BitcoinMonitor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitcoinMonitor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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



/***/ })

})
//# sourceMappingURL=4.c34035438a15c695e7d2.hot-update.js.map