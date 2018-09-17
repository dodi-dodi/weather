import moment from "moment";
import React, {Component} from 'react'

import {getCurrent} from './api.js'

import './current.scss'


export class Current extends Component {
  constructor(props) {
    super(props);
    this.state = {current: null};
  }

  componentDidMount() {
    getCurrent().then((data) => {
      this.setState({current: data});
      if (data.static === true) {
        this.props.onStaticChange(true);
      }
    })
  }

  // noinspection JSMethodCanBeStatic
  getDate(dateTime) {
    return moment(dateTime).format('dddd, HH:mm')
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-date text-right" id="current-date">
              {this.state.current && this.getDate(this.state.current.LocalObservationDateTime)}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-city text-center" id="current-city">Warszawa, Polska</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 text-right">
            <span className="sprite header_icon" id="icon-today">
              <img className="current-icon"
                   src={`assets/images/accu-icons/accu-${this.state.current && this.state.current.WeatherIcon}-s.png`}
                   alt=""/>
            </span>
          </div>
          <div className="col-xs-6">
            <p className="current-content current-temp text-left" id="temp-today">
              {this.state.current && Math.round(this.state.current.Temperature.Metric.Value)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-real-feel text-center" id="real-feel">
              Feels like {this.state.current && Math.round(this.state.current.Temperature.Metric.Value)}
              {this.state.current && this.state.current.RealFeelTemperature.Metric.Unit}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-phrase text-center"
               id="current-phrase">{this.state.current && this.state.current.WeatherText}</p>
          </div>
        </div>
      </div>
    )
  }
}
