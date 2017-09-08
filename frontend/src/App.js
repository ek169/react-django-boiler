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
        <div className="App-intro">
            <h3>
                Hi {this.state.name}!
            </h3>
            <p className="App-info">
                <strong>To see how Django interacts with React:</strong>
                <br/>
                Go to "react-django-boiler/backend/app/views.py" and
                change the value for "name" in the test view's JsonResponse
                <br/>
                <br/>
                <strong>To see how React interacts with Django:</strong>
                <br/>
                Go to "react-django-boiler/frontend/src/App.js" to see
                the setup for this page
            </p>
        </div>
      </div>
    );
  }
}

export default App;
