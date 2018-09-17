import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Current} from "./current";
import {Forecast} from './forecast'
import './index.scss'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isStatic: false};
    this.isStatic = this.isStatic.bind(this);
  }

  isStatic(val = false) {
    this.setState({isStatic: val});
  }

  showStaticWarning() {
    if (this.state.isStatic === true) {
      return <div style={{display: "block"}}>Notice! Todays AccuWeather request quota has been exhausted. Data you are seeing has been loaded statically.</div>
    }
  }

  render() {
    return (
      <div>
        {this.showStaticWarning()}
        <header>
          <div className="header">
            <Current onStaticChange={this.isStatic}/>
            <img className="waves" src="assets/images/waves.v2.png"
                 alt="Beautiful section separator which looks like wave on the ocean."/>
          </div>
        </header>
        <div className="container space-section">
          <Forecast onStaticChange={this.isStatic}/>
        </div>
      </div>
    )
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App/>, root);
