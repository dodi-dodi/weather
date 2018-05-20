import React, { Component } from 'react'
import './forecast.scss'

export class Forecast extends Component {
  render() {
    return (
      <div className="row forecast" id="forecast">
        <div className="forecast-content text-center">
          <span className="forecast-day">Mon</span>
          <span className="sprite accu-${icon}-s"/>
          <div>
            <span className="forecast-temp-day">29C</span>
            <span className="forecast-temp-night">10C</span>
            <span className="forecast-icon">
              <img src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
        </div>
        <div className="forecast-content text-center">
          <span className="forecast-day">Mon</span>
          <span className="sprite accu-${icon}-s"/>
          <div>
            <span className="forecast-temp-day">29C</span>
            <span className="forecast-temp-night">10C</span>
            <span className="forecast-icon">
              <img src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
        </div>
        <div className="forecast-content text-center">
          <span className="forecast-day">Mon</span>
          <span className="sprite accu-${icon}-s"/>
          <div>
            <span className="forecast-temp-day">29C</span>
            <span className="forecast-temp-night">10C</span>
            <span className="forecast-icon">
              <img src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
        </div>
        <div className="forecast-content text-center">
          <span className="forecast-day">Mon</span>
          <span className="sprite accu-${icon}-s"/>
          <div>
            <span className="forecast-temp-day">29C</span>
            <span className="forecast-temp-night">10C</span>
            <span className="forecast-icon">
              <img src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
        </div>
        <div className="forecast-content text-center">
          <span className="forecast-day">Mon</span>
          <span className="sprite accu-${icon}-s"/>
          <div>
            <span className="forecast-temp-day">29C</span>
            <span className="forecast-temp-night">10C</span>
            <span className="forecast-icon">
              <img src="assets/images/accu-icons/accu-1-s.png" alt=""/>
            </span>
          </div>
        </div>
      </div>
    )
  }
}