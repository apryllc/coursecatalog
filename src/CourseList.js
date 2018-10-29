import React, { Component } from 'react';
import Navigation from './Navigation.js';
class CourseList extends Component {
  constructor() {
    super()

  this.state = {
   courses: []
 }
}

fetchCourses = () => {
  fetch('https://crudapi.codelouisville.org/users/apryllclark/classes/')
    .then(response => response.json())
    .then(data =>
      this.setState({courses: data.map(c => c.value)}))
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
          <li><b>COURSE TITLE: {course['Course Title']}</b></li>
          <li> <b>Program:</b> {course.Program} </li>
          <li><b>Credit Hours: </b>{course['Credit Hours']}</li>
          <li> <b> Description:</b> {course.Description} </li>
        </ul>))}
    </div>;
  }
};
export default CourseList;
