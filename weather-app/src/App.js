import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from './actions';

import CardSection from './components/CardSection';
import HourWeather from './components/HourWeather';

const weatherData = [
  {
    day: 'wednesday',
    condition: 'sunny',
    highestTemp: 78,
    lowestTemp: 67
  },
  {
    day: 'thursday',
    condition: 'cloudy',
    highestTemp: 83,
    lowestTemp: 66
  },
  {
    day: 'friday',
    condition: 'rainy',
    highestTemp: 77,
    lowestTemp: 65
  },
  {
    day: 'saturday',
    condition: 'sunny',
    highestTemp: 78,
    lowestTemp: 64
  },
  {
    day: 'sunday',
    condition: 'rainy',
    highestTemp: 77,
    lowestTemp: 62
  },
  {
    day: 'monday',
    condition: 'cloudy',
    highestTemp: 71,
    lowestTemp: 61
  },
  {
    day: 'tuesday',
    condition: 'snowy',
    highestTemp: 1,
    lowestTemp: '-10'
  },
  {
    day: 'wednesday',
    condition: 'snowy',
    highestTemp: 73,
    lowestTemp: 60
  }
]

class App extends Component {
  constructor (props) {
    super (props);
    
    this.state = {
      selectedDay: null
    };

    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked(forecast) {
  }

  componentDidMount() {
    this.props.fetchWeather();
  }

  renderCard() {
    let forecasts = this.props.forecasts;
    console.log('inside app: ', forecasts);
    return _.map(forecasts, forecast => {
      console.log('forecast: ', forecast);
      return (
        <button className="buttonStyle" onClick={this.handleClicked.bind(this, forecast)}>
          <CardSection forecast={forecast} />
          <div>LOL</div>
        </button>
      );
    });
  }

  render() {
    let day = this.state.selectedDay;

    return (
      <div className="app">
        <div className="headerStyle">
        {this.renderCard()}
        </div>
        <HourWeather day={day}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { forecasts: state.weather }
}

export default connect(mapStateToProps, { fetchWeather })(App);
