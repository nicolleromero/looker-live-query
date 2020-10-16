import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Clause from './Clause';

export default function ClauseList(props) {
  console.log("Clauses", props.clauses);
  // Only render if the clauses array includes a clause
  if (!props.clauses.length) {
    return null;
  }

  return (
    <ListGroup variant="flush list-box">
      {props.clauses.map((clause) => {
        return (
          <Clause
            clause={clause}
            clauses={props.clauses}
            key={clause.id}
            onSetClauses={props.onSetClauses}
          />
        )
      })}
    </ListGroup>
  );
}