import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import CreateCourse from './CreateCourse.js';
import Home from './Home.js';
import CourseList from './CourseList.js';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={CourseList} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
