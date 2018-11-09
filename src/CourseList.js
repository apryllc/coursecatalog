import React, { Component } from 'react';
import Navigation from './Navigation.js';
import Delete from './DeleteCourse.js';
import Update from './UpdateCourse.js';

class CourseList extends Component {
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
          <Update />
          <Delete
          value={course._id}
          />
        </ul>))}

    </div>;
  }
};
export default CourseList;
