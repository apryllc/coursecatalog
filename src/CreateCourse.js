import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Create extends Component {
  render() {
    return (
        <Form className="courseform">
            <FormGroup>
              <Label for="coursename">Course Name</Label>
          <Input type="textarea" name="coursename" id="coursename" width="50"/>
        </FormGroup>
        <FormGroup>
         <Label for="program">Program</Label>
         <Input type="select" name="program" id="program">
           <option>Basic Skills</option>
           <option>Community</option>
           <option>Computer Science</option>
           <option>General Education</option>
           <option>Other</option>
         </Input>
       </FormGroup>
        <FormGroup>
          <Label for="credithours">Credit Hours</Label>
      <Input type="textarea" name="credithours" id="credithours" width="50"/>
    </FormGroup>
    <FormGroup>
      <Label for="description">Course Description</Label>
  <Input type="textarea" name="description" id="description" width="50"/>
</FormGroup>

          <Button>Add to Catalog</Button>
        </Form>
    );
  }
}

export default Create;
