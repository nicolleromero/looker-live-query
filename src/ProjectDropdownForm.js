import React, { useEffect } from 'react';

export default function ProjectDropdownForm(props) {
  const { sdk } = props;

  useEffect(() => {
    sdk.ok(sdk.all_projects()).then((data) => console.log('projects', data))
  }, [sdk]);

  return (
    <div>
      <div className="center-children">
        <div>
          <input
            type="text"
            className="form-field"
            placeholder="Select a project"
            value={props.project}
            onChange={(e) => props.onSelectProject(e.target.value)}
          />
          <input
            type="text"
            className="form-field"
            placeholder="Select a dataset"
            value={props.dataset}
            onChange={(e) => props.onSelectDataset(e.target.value)}
          />
          <input
            type="text"
            className="form-field"
            placeholder="Select a table"
            value={props.table}
            onChange={(e) => props.onSelectTable(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}