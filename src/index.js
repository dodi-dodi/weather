import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Forecast } from './forecast'
import {Current} from "./current";

import './index.scss'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header">
            <Current/>
            <img className="waves" src="assets/images/waves.v2.svg" alt=""/>
          </div>
        </header>
      <div className="container space-section">
        <Forecast/>
      </div>
    </div>
    )
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
