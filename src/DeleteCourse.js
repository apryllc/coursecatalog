import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Delete extends Component {

//fetches course id from button click, adds it to the fetch URL, and deletes it
  deleteItem = (id) => {
   fetch(`https://crudapi.codelouisville.org/users/apryllclark/classlist/${id}`, { method: 'DELETE' })
     .then(res => this.props.fetchCourses())
 }

//on click, this triggers the deleteItem function with the course id argument attached
  render() {
    return (
      <Button color= "danger" onClick={() => this.deleteItem(this.props.value)}>Delete</Button>
    );
  }
}
export default Delete;
