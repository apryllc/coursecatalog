import React, { Component } from 'react';

class CourseList extends Component {
  constructor() {
    super()

  this.state = {
   courses: []
 }
}

fetchCourses = () => {
  fetch('/courses.json')
    .then(response => response.json())
    .then(data =>
      this.setState({courses: data}))
    };

componentDidMount() {
  this.fetchCourses();
}

render() {
    return <div>
    {this.state.courses
      .map(course =>
        (<li> {course.Description} </li>))}</div>;
  }
};
export default CourseList;
