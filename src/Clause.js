import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Clause(props) {

  // Delete a clause from the array
  function handleDeleteClause(clauseId) {
    const updatedClauses = props.clauses.filter((clause) => clause.id !== clauseId);

    props.onSetClauses(updatedClauses);
  }

  return (
    <ListGroup.Item>
      <div className="center-children">
        <span className="item">{props.clause.type} {props.clause.header} {props.clause.descAsc}</span>
        <button
          className="btn btn-sm delete-button"
          onClick={() => handleDeleteClause(props.clause.id)}
        >
          ✕
      </button>
      </div>
    </ListGroup.Item>
  );
}