import React, { useEffect, useState } from 'react';
import TABLES from './tables.json';

const PROJECTS = [
  { id: 'lookerdata', name: 'lookerdata' }
];

export default function ProjectDropdownForm(props) {
  const { sdk } = props;

  // For demo...
  const table = TABLES.find(t => t.name === props.dataset);
  const tables = [{ name: 'world-happiness' }, ...(table?.tables || [])];

  return (
    <div>
      <div className="center-children">
        <div>
          <select
            placeholder="Select a project"
            value={props.project}
            className="form-field"
            id="fixed"
            onChange={(e) => props.onSelectProject(e.target.value)}
          >
            <option className="form-field" value="">Select a project</option>
            {PROJECTS.map((option) => {
              return (
                <option key={option.id} value={option.name}>{option.name}</option>
              )
            })}
          </select>
          <select
            placeholder="Select a dataset"
            value={props.dataset}
            className="form-field"
            id="fixed"
            onChange={(e) => props.onSelectDataset(e.target.value)}
          >
            <option className="form-field" value="">Select a dataset</option>
            {TABLES.map((option) => {
              return (
                <option key={option.name} value={option.name}>{option.name}</option>
              )
            })}
          </select>
          <select
            placeholder="Select a table"
            value={props.table}
            className="form-field"
            id="fixed"
            onChange={(e) => props.onSelectTable(e.target.value)}
          >
            <option className="form-field" value="">Select a table</option>
            {tables.map((option) => {
              return (
                <option key={option.name} value={option.name}>{option.name}</option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  );
}