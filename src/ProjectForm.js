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
            placeholder="Select a project"
            value={props.project}
            onChange={(e) => props.onSelectProject(e.target.value)}
          />
          <FormControl
            type="text"
            className="form-field"
            placeholder="Select a dataset"
            value={props.dataset}
            onChange={(e) => props.onSelectDataset(e.target.value)}
          />
          <FormControl
            type="text"
            className="form-field"
            placeholder="Select a table"
            value={props.table}
            onChange={(e) => props.onSelectTable(e.target.value)}
          />
          {/* <Button
            type="submit"
            className="add-button"
            variant="outline-secondary"
            disabled={!props.project.trim()}
          >
            Submit
          </Button> */}
        </Form>
      </div>
    </div>
  );
}