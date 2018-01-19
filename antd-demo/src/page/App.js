import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import PCIndex from './pc_index';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <PCIndex/>
      </div>
    );
  }
}
