import React, { Component } from 'react';
import Dropdown from './Dropdown';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: 'project-react'
    };
    this.handleShow = this.handleShow.bind(this);
  }

  render() {
    return (
      <div className="App">
        <h1>React Application Using Web Components</h1>
        <p>{this.state.show ? 'open' : 'closed'}</p>
        <Dropdown title={this.state.title} onShow={this.handleShow}>
          Hello from dropdown
        </Dropdown>
      </div>
    );
  }
  handleShow(e) {
    this.setState({ show: e.detail });
  }
}

export default App;
