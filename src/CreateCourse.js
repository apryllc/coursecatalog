import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Create extends Component {
//props here allows the value to passed down to the form, constructor intializes state
  constructor(props) {
    super(props)

//sets default state
    this.state = {
      newCourseTitle: '',
      newProgram: '',
      newCreditHours: '',
      newDescription: ''
   }
  }
//this captures event changes on the form inputs and sets the state, then those items are included in the post to the API
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

// this keeps the page from reloading on button submit
  newClassSubmit = (e) => {
      e.preventDefault();

//initial api call, then on submit takes content of form, updates state, turns into JSON object and posts
      fetch('https://crudapi.codelouisville.org/users/apryllclark/classlist/', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "value":{
//these correspond to the form input values so that state can be updated and passed to the api
//the first key pair value needs to match the values in the api objects
//the second key pair value needs to match the values in the form so those can be updated
                  "Course Title": this.state.newCourseTitle,
                   Program: this.state.newProgram,
                  "Credit Hours": this.state.newCreditHours,
                  Description: this.state.newDescription
               }
          })
      })
      .then(alert("Course Added. Please check Full Catalog page."))
  }

//props can only be passed down so this is a state change
//when a user submits, the state is set to the name of input and the value of the input defined in the form
  render() {
    return (
        <Form className="courseform">
        <FormGroup>
          <Label for="newCourseTitle"><b>Course Title:</b></Label>
          <Input type="text" name="newCourseTitle" id="newCourseTitle" value={this.state.newCourseTitle} onChange={(e) => this.handleChange(e)} required/>
        </FormGroup>
        <FormGroup>
         <Label for="newProgram"><b>Program</b>:</Label>
         <Input type="select" name="newProgram" id="newProgram" value={this.state.newProgram} onChange={(e) => this.handleChange(e)} required>
           <option>Basic Skills</option>
           <option>Community</option>
           <option>Computer Science</option>
           <option>General Education</option>
         </Input>
       </FormGroup>
        <FormGroup>
          <Label for="newCreditHours"><b>Credit Hours</b>:</Label>
      <Input type="text" name="newCreditHours" id="newCreditHours" value={this.state.newCreditHours} onChange={(e) => this.handleChange(e)} required />
    </FormGroup>
    <FormGroup>
      <Label for="newDescription"><b>Description</b>:</Label>
  <Input type="text" name="newDescription" id="newDescription" width="50" value={this.state.newDescription} onChange={(e) => this.handleChange(e)} required/>
</FormGroup>
          <Button type="button" onClick={(e) => this.newClassSubmit(e)}>Add to Catalog</Button>
        </Form>
//this is a click handler for the data in the form
    );
  }
}

export default Create;
