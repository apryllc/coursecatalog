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
//this captures event changes on the form inputs
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
  }

// this keeps the page from reloading on button submit
  newClassSubmit = (e) => {
      e.preventDefault();

//initial api call, then on submit takes content of form, turns into JSON object and adds to api JSON
      fetch('https://crudapi.codelouisville.org/users/apryllclark/classes/', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "value":{
//these correspond to the form input values so that state can be updated and passed to the api
                  "Course Title": this.state.newCourseTitle,
                   Program: this.state.newProgram,
                  "Credit Hours": this.state.newCreditHours,
                  Description: this.state.newDescription
               }
          })
      })
  }

//state is unchangable directly, so the values here needed this.props and not this.state otherwise you can't type in the form
  render() {
    return (
        <Form className="courseform">
        <FormGroup>
          <Label for="Course Title"><b>Course Title:</b></Label>
          <Input type="text" name="Course Title" id="Course Title" width="50" value={this.props.newCourseTitle} onChange={(e) => this.handleChange(e)} />
        </FormGroup>
        <FormGroup>
         <Label for="Program"><b>Program</b>:</Label>
         <Input type="select" name="Program" id="Program" value={this.props.newProgram} onChange={(e) => this.handleChange(e)}>
           <option>Basic Skills</option>
           <option>Community</option>
           <option>Computer Science</option>
           <option>General Education</option>
         </Input>
       </FormGroup>
        <FormGroup>
          <Label for="Credit Hours"><b>Credit Hours</b>:</Label>
      <Input type="text" name="Credit Hours" id="Credit Hours" width="50" value={this.props.newCreditHours} onChange={(e) => this.handleChange(e)}/>
    </FormGroup>
    <FormGroup>
      <Label for="Description"><b>Description</b>:</Label>
  <Input type="text" name="Description" id="Description" width="50" value={this.props.newDescription} onChange={(e) => this.handleChange(e)}/>
</FormGroup>

//this is a click handler for the data in the form
          <Button type="button" onClick={(e) => this.newClassSubmit(e)}>Add to Catalog</Button>
        </Form>
    );
  }
}

export default Create;
