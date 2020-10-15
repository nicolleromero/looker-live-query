import React, { useRef, useState } from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

import './App.css';

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
  const [rule, setRule] = useState({});

  const sql = queryBuilderRef.current?.getSqlFromRules(rule);

  console.log('RULE', rule);
  console.log('SQL', sql);

  return (
    <div className="site-wrapper">
      <Container>
        <Navbar id="cover-image">
          <Row className="d-none d-lg-block justify-content-between offset-2">
            <h1 className="h1">Looker Live Query</h1>
          </Row>
        </Navbar>
      </Container>
      <Container>
        <Row>
          <Col className="middle">
            <QueryBuilderComponent
              ref={queryBuilderRef}
              rule={rule}
              columns={columnData}
              enableNotCondition={true}
              ruleChange={(e) => setRule(e.rule)}
            />
          </Col>
          <Col className="middle preview">
            <p>{sql}</p>
            {/* <Formatter /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
