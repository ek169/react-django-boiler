import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var axios = require('axios');


class App extends Component {

  constructor () {
        super();
        this.state = {
            name: ""
        }
  }

  componentDidMount() {
    // axios calls the relative url 'django' to access the index view of the Django App called, 'app'
    let _this = this;
    axios.get("/test/").then(function(response) {
        console.log(response.data);
        _this.setState({name: response.data.name});
    }).catch(function(error) {
        console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to react-django-boiler</h2>
        </div>
        <p className="App-intro">
          Hi {this.state.name}, to see how Django interacts with React go to views.py to change your name.
          To see how react interacts with Django, go to App.js to see the setup for this page.
        </p>
      </div>
    );
  }
}

export default App;
