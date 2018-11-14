import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation.js';
import Enroll from './Enroll.js';
import Unenroll from './Unenroll.js';

//this is the same as the courselist component 
class StudentView extends Component {
  constructor(props) {
    super(props)

  this.state = {
   courses: []
 }
}

fetchCourses = () => {
  fetch('https://crudapi.codelouisville.org/users/apryllclark/classlist/')
    .then(response => response.json())
    .then(data =>
      this.setState({
        courses: data.filter(course => course.deleted === false)
      }));
    };

componentDidMount() {
  this.fetchCourses();
}

render() {
    return <div>
    <Navigation />
    {this.state.courses
      .map(course =>
        (<ul>
          <li><b>COURSE TITLE: {course.value['Course Title']}</b></li>
          <li> <b>Program:</b> {course.value.Program} </li>
          <li><b>Credit Hours: </b>{course.value['Credit Hours']}</li>
          <li> <b> Description:</b> {course.value.Description} </li>
          <Enroll />
          <Unenroll />
        </ul>))}

    </div>;
  }
};

export default StudentView;
