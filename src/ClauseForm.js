import React, { useState } from 'react';

export default function ClauseForm(props) {

  const CLAUSES = ['GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT'];

  function handleNewClause(event) {
    event.preventDefault();

    const newClause = { id: Date.now(), type: props.type, header: props.header };
    props.onSubmitClause(newClause);
    console.log("New Clause:", newClause);

  }

  return (
    <div>
      <div className="center-children">
        <form onSubmit={handleNewClause}>
          <select
            name="region"
            placeholder="Select a clause"
            value={props.type}
            className="form-field"
            id="fixed"
            onChange={(e) => props.onSelectType(e.target.value)}
          >
            <option className="form-field" value="">Select a clause</option>
            {CLAUSES.map((clause, index) => {
              return (
                <option key={index} value={clause}>{clause}</option>
              )
            })}
          </select>
          <input
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
        </form>
      </div>
    </div>
  );
}
