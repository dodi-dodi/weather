import moment from 'moment'
import React, {Component} from 'react'

import {getForecast} from './api.js'
import './forecast.scss'

export class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {forecast: getForecast()};
  }

  getDay(datetime) {
    return  moment(datetime).format('ddd')
  }

  forecastDays() {
    return this.state.forecast.map(val => {
      return (
        <div className="forecast-content text-center">
          <span className="forecast-day">{this.getDay(val.Date)}</span>
          <div>
            <span className="forecast-temp-day">
              {val.Temperature.Maximum.Value}
              {val.Temperature.Maximum.Unit}
              </span>
            <span className="forecast-temp-night">
              {val.Temperature.Minimum.Value}
              {val.Temperature.Maximum.Unit}
              </span>
            <span className="forecast-icon">
              <img src={`assets/images/accu-icons/accu-${val.Day.Icon}-s.png`} alt=""/>
            </span>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="row forecast" id="forecast">
        {this.forecastDays()}
      </div>
    )
  }
}

