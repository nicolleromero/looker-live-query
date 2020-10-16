import React, { useState } from 'react';

export default function ClauseForm(props) {

  const CLAUSES = ['GROUP BY', 'ORDER BY', 'HAVING', 'LIMIT'];
  const COLUMN_HEADERS = props.columnData.map((header) => header.field);


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
          {props.type === "LIMIT" &&
            <input
              type="text"
              className="form-field"
              placeholder="Enter a number"
              value={props.header}
              onChange={(e) => props.onSelectHeader(e.target.value)}
            />
          }
          {props.type !== "LIMIT" &&
            <select
              placeholder="Select a column"
              value={props.header}
              className="form-field"
              id="fixed"
              onChange={(e) => props.onSelectHeader(e.target.value)}
            >
              <option className="form-field" value="">Select a column</option>
              {COLUMN_HEADERS.map((option, index) => {
                return (
                  <option key={index} value={option}>{option}</option>
                )
              })}
            </select>
          }
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
