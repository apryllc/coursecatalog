import React, { Component } from 'react';
import './App.css';
import CreateCourse from './CreateCourse.js';

//these are the components to be rendered on the main front page
class Home extends Component {
  render() {
    return (
      <div>
      <CreateCourse />
      </div>
    );
  }
}
export default Home;
