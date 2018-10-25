import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import CreateCourse from './CreateCourse.js';
import ReadCourse from './ReadCourse.js';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />,
      <CreateCourse />,
      <ReadCourse />
      </div>
    );
  }
}

export default App;
