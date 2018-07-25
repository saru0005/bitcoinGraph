import React, { Component } from 'react';
import { Display } from './Display';
import { BitcoinService } from '../../services/BitcoinService';
import { CurrencyService } from '../../services/CurrencyService';
import DocumentsFieldSet from './DocumentsFieldSet';
import DocumentInput from './DocumentInput';
const bitcoinService = new BitcoinService();
const currencyService = new CurrencyService();

const mapToPrice = (currentPrice, previousPrice) => {
    return {
        code: currentPrice.code,
        description: currentPrice.description,
        currentRate: currentPrice.currentRate,
        previousRate: previousPrice ? previousPrice.currentRate : 0
    };
};

class BitcoinMonitor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            prices: {},
            prices2: {},
            ready: false,
            currencies: []
        };

        this.handleOnRefresh = this.handleOnRefresh.bind(this);
        this.loadBitcoinPriceIndex = this.loadBitcoinPriceIndex.bind(this);
        this.loadBitcoinPriceIndex2 = this.loadBitcoinPriceIndex2.bind(this);
        this.handleOnCurrencyChanged = this.handleOnCurrencyChanged.bind(this);
        this.handleOnCurrencyChanged2 = this.handleOnCurrencyChanged2.bind(this);

    }


    handleOnRefresh() {
        var _this = this;
        if (this.state.prices.SELECTED) {

            const currency = this.state.prices.SELECTED.code;

            bitcoinService
                .getPrice(currency)
                .then(price => {
                    if (price) {
                        this.loadBitcoinPriceIndex(price);
                        setTimeout(function () {
                            _this.handleOnRefresh();
                        }, 5000);
                    } else {
                        this.loadBitcoinPriceIndex();
                        setTimeout(function () {
                            _this.handleOnRefresh();
                        }, 5000);
                    }
                })
                .catch(error => console.log(error.message));

        } else {
            this.loadBitcoinPriceIndex();
            setTimeout(function () {
                _this.handleOnRefresh();
            }, 30000);
        }
        if (this.state.prices2.SELECTED) {

            const currency = this.state.prices2.SELECTED.code;

            bitcoinService
                .getPrice(currency)
                .then(price => {
                    if (price) {
                        this.loadBitcoinPriceIndex2(price);
                        setTimeout(function () {
                            _this.handleOnRefresh();
                        }, 5000);
                    } else {
                        this.loadBitcoinPriceIndex2();
                        setTimeout(function () {
                            _this.handleOnRefresh();
                        }, 5000);
                    }
                })
                .catch(error => console.log(error.message));

        } else {
            this.loadBitcoinPriceIndex2();
            setTimeout(function () {
                _this.handleOnRefresh();
            }, 30000);
        }


    }


    handleOnCurrencyChanged(event) {

        const currency = event.target.value;

        bitcoinService
            .getPrice(currency)
            .then(price => {
                if (price) {
                    this.setState(prevState => {
                        const prices = prevState.prices;
                        prices.SELECTED = mapToPrice(price[currency], prevState.prices[currency]);
                        return { prices: prices };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }
    handleOnCurrencyChanged2(event) {

        const currency = event.target.value;

        bitcoinService
            .getPrice(currency)
            .then(price => {
                if (price) {
                    this.setState(prevState => {
                        const prices2 = prevState.prices2;
                        prices2.SELECTED = mapToPrice(price[currency], prevState.prices2[currency]);
                        return { prices2: prices2 };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }


    loadBitcoinPriceIndex(additionalPrice) {
        bitcoinService
            .getPrices()
            .then(prices => {
                if (prices) {
                    this.setState(prevState => {
                        const newPrices = {
                            EUR: mapToPrice(prices.EUR, prevState.prices.EUR),
                            GBP: mapToPrice(prices.GBP, prevState.prices.GBP),
                            USD: mapToPrice(prices.USD, prevState.prices.USD)
                        };

                        if (additionalPrice) {
                            newPrices.SELECTED = mapToPrice(
                                Object.values(additionalPrice)[0],
                                prevState.prices.SELECTED);
                        }

                        return { prices: newPrices, ready: true };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }
    loadBitcoinPriceIndex2(additionalPrice) {
        bitcoinService
            .getPrices()
            .then(prices2 => {
                if (prices2) {
                    this.setState(prevState => {
                        const newPrices2 = {
                            EUR: mapToPrice(prices2.EUR, prevState.prices2.EUR),
                            GBP: mapToPrice(prices2.GBP, prevState.prices2.GBP),
                            USD: mapToPrice(prices2.USD, prevState.prices2.USD)
                        };

                        if (additionalPrice) {
                            newPrices2.SELECTED = mapToPrice(
                                Object.values(additionalPrice)[0],
                                prevState.prices2.SELECTED);
                        }

                        return { prices2: newPrices2, ready: true };
                    });
                }
            })
            .catch(error => console.log(error.message));
    }


    loadSupportedCurrencies() {
        this.setState(() => ({ currencies: currencyService.getSupportedCurrencies() }));
    }


    componentDidMount() {
        this.loadSupportedCurrencies();
        this.loadBitcoinPriceIndex();
    }


    render() {
        return (

            this.state.ready === true &&
            <div>

                <Display
                    currencies={this.state.currencies}
                    prices={this.state.prices}
                    prices2={this.state.prices2}
                    onCurrencyChanged={this.handleOnCurrencyChanged}
                    onCurrencyChanged2={this.handleOnCurrencyChanged2} />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous"></link>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossorigin="anonymous"></link>
                {/* <div>
                    <DocumentsFieldSet />
                    <DocumentInput
                        currencies={this.state.currencies}
                        prices={this.state.prices}
                        onCurrencyChanged={this.handleOnCurrencyChanged}
                    />
                </div> */}
                <div className=" mt-5 text-center">
                    <button className="btn btn-lg btn-refresh" onClick={this.handleOnRefresh}>
                        <i className="fa fa-refresh fa-lg"></i>
                    </button>
                </div>

            </div>
        );
    }
}

export { BitcoinMonitor };