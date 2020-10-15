import React, { useRef, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

export default function ProjectForm(props) {

  return (
    <div>
      <div className="center-children">
        <Form>
          <FormControl
            type="text"
            className="form-field"
            placeholder="Select a database"
            value={props.project}
            onChange={(e) => props.onSearch(e.target.value)}
          />
          <FormControl
            type="text"
            className="form-field"
            placeholder="Select a table"
            value={props.search}
            onChange={(e) => props.onSelectProject(e.target.value)}
          />
          <Button
            type="submit"
            className="add-button"
            variant="outline-secondary"
            disabled={!props.project.trim()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}