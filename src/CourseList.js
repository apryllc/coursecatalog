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

//this fetches the data from the api, formats the response to json, then sets the state by filtered through the resulting array and only including undeleted courses
fetchCourses = () => {
  fetch('https://crudapi.codelouisville.org/users/apryllclark/classlist/')
    .then(response => response.json())
    .then(data =>
      this.setState({
        courses: data.filter(course => course.deleted === false)
      }));
    };

//when the component mounts the api call starts
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
          fetchCourses={this.fetchCourses}
          />
        </ul>))}
    </div>;
  }
};
// renders basic list and also passes properties to the delete button
export default CourseList;
