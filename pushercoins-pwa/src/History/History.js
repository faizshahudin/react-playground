import React, { Component } from 'react';
import './History.css';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
    constructor() {
        super();
        this.state = {
            todayprice: {},
            yesterdayprice: {},
            twodaysprice: {},
            threedaysprice: {},
            fourdaysprice: {}
        };
        this.getBTCPrices = this.getBTCPrices.bind(this);
        this.getETHPrices = this.getETHPrices.bind(this);
        this.getLTCPrices = this.getLTCPrices.bind(this);
    }

    // This function gets the ETH price for a specific timestamp/date.
    getETHPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    }

    getBTCPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    }

    getLTCPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }

    // This function gets the prices for the current date.
    getTodayPrice() {
        // Get today's date in timestamp
        let t = moment().unix()
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD,
                }
                localStorage.setItem('todayprice', JSON.stringify(f));
                // Set the state of todayprice to the content of the object f
                this.setState({ todayprice: f });
            }));
    }

    // This function gets the prices for the yesterday.
    getYesterdayPrice() {
        // Get yesterday's date in timestamp
        let t = moment().subtract(1, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                localStorage.setItem('yesterdayprice', JSON.stringify(f));
                // Set the state of yesterdayprice to the content of the object f
                this.setState({ yesterdayprice: f });
            }));
    }
    
    getTwoDaysPrice () {
        let t = moment().subtract(2, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                localStorage.setItem('twodaysprice', JSON.stringify(f));
                this.setState({ twodaysprice: f });
            }));
    }

    // This function gets the prices for the three days ago.
    getThreeDaysPrice () {
        // Get the date for three days ago in timestamp
        let t = moment().subtract(3, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                localStorage.setItem('threedaysprice', JSON.stringify(f));
                // Set the state of threedaysprice to the content of the object f
                this.setState({ threedaysprice: f });
            }));
    }

    getFourDaysPrice () {
        // Get the date for four days ago in timestamp
        let t = moment().subtract(4, 'days').unix();
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                localStorage.setItem('fourdaysprice', JSON.stringify(f));
                this.setState({ fourdaysprice: f });
            }));
    }

    componentDidMount () {
        if (!navigator.onLine) {
            this.setState({ todayprice: JSON.parse(localStorage.getItem('todayprice')) });
            this.setState({ yesterdayprice: JSON.parse(localStorage.getItem('yesterdayprice')) });
            this.setState({ twodaysprice: JSON.parse(localStorage.getItem('twodaysprice')) });
            this.setState({ threedaysprice: JSON.parse(localStorage.getItem('threedaysprice')) });
            this.setState({ fourdaysprice: JSON.parse(localStorage.getItem('fourdaysprice')) });
        }
    }

    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
        this.getTodayPrice();
        this.getYesterdayPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }

    render() {
        return (
            <div className="history--section container">
                <h2>History (Past 5 days)</h2>
                <div className="history--section__box">
                    <div className="history--section__box__inner">
                        <h4>{this.state.todayprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.todayprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.todayprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.todayprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.yesterdayprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.yesterdayprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.yesterdayprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.yesterdayprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.twodaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.threedaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history--section__box__inner">
                        <h4>{this.state.fourdaysprice.date}</h4>
                        <div className="columns">
                            <div className="column">
                                <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default History;
