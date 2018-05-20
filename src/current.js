import React, { Component } from 'react'

import './current.scss'

export class Current extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-date text-right" id="current-date">Sunday, 15.09.2017</p>
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
              <img className="current-icon" src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
          <div className="col-xs-6">
            <p className="current-content current-temp text-left" id="temp-today">17C</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-real-feel text-center" id="real-feel">Feels like 20C</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="current-content current-phrase text-center" id="current-phrase">Sunny</p>
          </div>
        </div>
      </div>
    )
  }
}