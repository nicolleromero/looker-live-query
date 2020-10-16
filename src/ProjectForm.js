import React, { useContext } from 'react';
import { ExtensionContext } from '@looker/extension-sdk-react';
import ProjectDropdownForm from './ProjectDropdownForm';

export default function ProjectForm(props) {
  const extension = useContext(ExtensionContext);

  if (extension) {
    console.log({ extension })
    return <ProjectDropdownForm {...props} sdk={extension.core40SDK} />;
  }

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