import moment from 'moment'
import React, {Component} from 'react'

import {getForecast} from './api.js'
import './forecast.scss'


export class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {forecast: null};
  }

  componentDidMount() {
    getForecast().then((data) => {
      this.setState({forecast: data});
      if (data.static === true) {
        this.props.onStaticChange(true);
      }
    })
  }

  // noinspection JSMethodCanBeStatic
  getDay(datetime) {
    return moment(datetime).format('ddd')
  }

  forecastDays() {
    if (this.state.forecast === null) {
      return <div/>
    }
    return this.state.forecast.DailyForecasts.map((val, idx) => {
      return (
        <div className="forecast-content text-center" key={`forecast-key-${idx}`}>
          <span className="forecast-day">{this.getDay(val.Date)}</span>
          <div>
            <span className="forecast-temp-day">
              {Math.round(val.Temperature.Maximum.Value)}
              {val.Temperature.Maximum.Unit}
              </span>
            <span className="forecast-temp-night">
              {Math.round(val.Temperature.Minimum.Value)}
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
