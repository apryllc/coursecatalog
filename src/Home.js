import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import CreateCourse from './CreateCourse.js';

class Home extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <CreateCourse />
      </div>
    );
  }
}
export default Home;
