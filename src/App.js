import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Churras App</h1>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(connect()(App));
