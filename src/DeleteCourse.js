//IF a user clicks on the delete button
//THEN the course is removed from the JSON/API

//listen for clicks on the delete button
//event handler triggers GET request to API?
//component is removed from course list
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Delete extends Component {
  render() {
    return (
    <Button className="Delete">Delete</Button>
    );
  }
}
export default Delete;
