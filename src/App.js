import React, { useEffect, useRef, useState } from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';


import ProjectForm from './ProjectForm';
import ClauseForm from './ClauseForm';
import Formatter from './Formatter';
import Prism from './prism';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './prism.css';


const columnData = [
  {
    field: 'TaskID', label: 'TaskID', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  { field: 'Name', label: 'Name', type: 'string' },
  { field: 'Category', label: 'Category', type: 'string' },
  { field: 'SerialNo', label: 'SerialNo', type: 'string' },
  { field: 'InvoiceNo', label: 'InvoiceNo', type: 'string' },
  { field: 'Status', label: 'Status', type: 'string' }
];

const hardwareColumnData = [
  { field: 'TaskID', label: 'Task ID', type: 'number' },
  { field: 'Name', label: 'Name', type: 'string' },
  { field: 'Category', label: 'Category', type: 'string' },
  { field: 'SerialNo', label: 'Serial No', type: 'string' },
  { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
  { field: 'Status', label: 'Status', type: 'string' }
];

const employeeColumnData = [
  { field: 'EmployeeID', label: 'EmployeeID', type: 'number' },
  { field: 'FirstName', label: 'FirstName', type: 'string' },
  { field: 'TitleOfCourtesy', label: 'Title Of Courtesy', type: 'boolean', values: ['Mr.', 'Mrs.'] },
  { field: 'Title', label: 'Title', type: 'string' },
  { field: 'HireDate', label: 'HireDate', type: 'date', format: 'dd/MM/yyyy' },
  { field: 'Country', label: 'Country', type: 'string' },
  { field: 'City', label: 'City', type: 'string' }
];

export default function App() {
  const queryBuilderRef = useRef(null);
  const [rule, setRule] = useState(undefined);
  const [project, setProject] = useState('');
  const [dataset, setDataset] = useState('');
  const [table, setTable] = useState('');
  const [clause, setClause] = useState('');
  const [header, setHeader] = useState('');
  const [clauseQuery, setClauseQuery] = useState('');

  const sql = queryBuilderRef.current?.getSqlFromRules(rule);

  console.log('RULE', rule);
  console.log('SQL', sql);

  const fullName = "" + project + "." + dataset + "." + table;
  const select = "SELECT * FROM " + "'" + fullName + "'";
  const condition = "WHERE " + sql;

  function handleSetClause(event) {
    event.preventDefault();

    const newClause = "" + clause + " " + header;
    setClauseQuery(newClause);

    console.log("newClause", clauseQuery);

    setClause('');
    setHeader('');
  }

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" className="dark">
        <Navbar.Brand href="#home">JOIN Hackathon</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link className="pink" href="#pricing">Awesomeness</Nav.Link>
        </Nav>
        <Navbar.Text>
          Created by: <a href="#login">Stephanie & Nicolle</a>
        </Navbar.Text>
      </Navbar>
      <div className="site-wrapper">
        <Row className="center-children">
          <h1 className="h1">Live Query Builder</h1>
        </Row>
        <Container>
          <Row>
            <Col className="middle">
              <ProjectForm
                project={project}
                dataset={dataset}
                table={table}
                onSelectProject={setProject}
                onSelectDataset={setDataset}
                onSelectTable={setTable}
              />
            </Col>
          </Row>
          <Row>
            <Col className="middle">
              <QueryBuilderComponent
                ref={queryBuilderRef}
                columns={columnData}
                enableNotCondition={true}
                ruleChange={(e) => setRule(e.rule)}
              />
            </Col>
            <Row>
              <Col className="middle">
                <ClauseForm
                  clause={clause}
                  header={header}
                  onSelectClause={setClause}
                  onSelectHeader={setHeader}
                  onSubmitClause={handleSetClause}
                />
              </Col>
            </Row>
            <Row>
              <Col className="middle preview">
                {project && dataset && table && (
                  <Formatter
                    query={select + condition + clauseQuery}
                  />
                )}
                <a className="float-right pink" href="something"><p>Export LookerML</p></a>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}