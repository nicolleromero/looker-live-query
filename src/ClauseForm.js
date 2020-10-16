import React, { useRef, useState } from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';

export default function ClauseForm(props) {

  const CLAUSES = ['GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT'];

  return (
    <Container>
      <Row className="center-children">
        <Form onSubmit={props.onSubmitClause}>
          <select
            name="region"
            placeholder="Select a clause"
            value={props.clause}
            className="form-field"
            id="fixed"
            onChange={(e) => props.onSelectClause(e.target.value)}
          >
            <option className="form-field" value="">Select a clause</option>
            {CLAUSES.map((clause, index) => {
              return (
                <option key={index} value={clause}>{clause}</option>
              )
            })}
          </select>
          <FormControl
            type="text"
            className="form-field"
            placeholder="Select a column"
            value={props.header}
            onChange={(e) => props.onSelectHeader(e.target.value)}
          />
          <button
            type="submit"
            className="add-button button"
            variant="outline-secondary"
          >
            Add Clause
          </button>
        </Form>
      </Row>
    </Container>
  );
}