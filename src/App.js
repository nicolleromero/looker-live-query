import React, { useRef, useState } from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';


import ProjectForm from './ProjectForm';
import ClauseForm from './ClauseForm';
import ClauseList from './ClauseList';
import Formatter from './Formatter';
import DataModal from './DataModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './prism.css';


const columnData = [
  {
    field: 'Overall rank', label: 'Overall rank', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  { field: 'Country or Region', label: 'Country or Region', type: 'string' },
  {
    field: 'Score', label: 'Score', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  {
    field: 'GDP per capita', label: 'GDP per capita', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  {
    field: 'Healthy life expectancy', label: 'Healthy life expectancy', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  {
    field: 'Freedom to make life choices', label: 'Freedom to make life choices', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  {
    field: 'Generosity', label: 'Generosity', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  },
  {
    field: 'Perceptions of corruption', label: 'Perceptions of corruption', type: 'number',
    operators: [{ key: 'equal', value: 'equal' },
    { key: 'greaterthan', value: 'greaterthan' }, { key: 'lessthan', value: 'lessthan' }]
  }
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
  const [type, setType] = useState('');
  const [header, setHeader] = useState('');
  const [descAsc, setDescAsc] = useState('');
  const [clauses, setClauses] = useState([]);

  const sql = queryBuilderRef.current?.getSqlFromRules(rule);

  console.log('RULE', rule);
  console.log('SQL', sql);

  const fullName = "" + project.trim() + "." + dataset.trim() + "." + table.trim();
  const select = "SELECT * FROM " + "'" + fullName + "'";
  const condition = "WHERE " + sql;

  function handleSetClause(newClause) {

    const updatedClauses = [...clauses, newClause];

    setClauses(updatedClauses);
    setType('');
    setHeader('');
    setDescAsc('');
  }

  function concatClauses(list) {
    let newString = '';
    for (let item of list) {
      let query = item.type + " " + item.header + " " + item.descAsc;
      newString = newString + " " + query;
    }
    return newString.trim();
  }

  let clauseQuery = concatClauses(clauses);

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
          <h1 className="h1">Live Query Builder ✌︎</h1>
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
                  columnData={columnData}
                  header={header}
                  type={type}
                  descAsc={descAsc}
                  onSelectHeader={setHeader}
                  onSelectType={setType}
                  onSelectDescAsc={setDescAsc}
                  onSubmitClause={handleSetClause}
                />
                <ClauseList
                  clauses={clauses}
                  onSetClauses={setClauses}
                />
              </Col>
            </Row>
            <Row>
              <Col className="middle preview">
                {project && dataset && table && (
                  <Formatter
                    query={select + condition + " " + clauseQuery}
                  />
                )}
                <a className="float-right pink" href="something"><p>Export LookerML</p></a>
              </Col>
            </Row>
            <Row>
              <Col className="middle preview">
                <DataModal
                 />
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}