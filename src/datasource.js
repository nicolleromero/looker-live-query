/**
 * QueryBuilder datasource
 */
export let employeeData = [
  {
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Seattle',
    'Country': 'USA',
    'EmployeeID': 1,
    'FirstName': 'Nancy',
    'HireDate': '22/07/2001',
    'LastName': 'Davolio',
    'PostalCode': '98122',
    'Region': 'WA',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.'
  },
  {
    'Address': '908 W. Capital Way',
    'City': 'Tacoma',
    'Country': 'USA',
    'EmployeeID': 2,
    'FirstName': 'Andrew',
    'HireDate': '21/04/2003',
    'LastName': 'Fuller',
    'PostalCode': '98401',
    'Region': 'WA',
    'Title': 'Vice President',
    'TitleOfCourtesy': 'Dr.'
  },
  {
    'Address': '722 Moss Bay Blvd.',
    'City': 'Kirkland',
    'Country': 'USA',
    'EmployeeID': 3,
    'FirstName': 'Janet',
    'HireDate': '22/07/2001',
    'LastName': 'Leverling',
    'PostalCode': '98033',
    'Region': 'WA',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.'
  },
  {
    'Address': '4110 Old Redmond Rd.',
    'City': 'Redmond',
    'Country': 'USA',
    'EmployeeID': 4,
    'FirstName': 'Margaret',
    'HireDate': '22/07/2004',
    'LastName': 'Peacock',
    'PostalCode': '98052',
    'Region': 'WA',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.'
  },
  {
    'Address': '14 Garrett Hill',
    'City': 'London',
    'Country': 'UK',
    'EmployeeID': 5,
    'FirstName': 'Steven',
    'HireDate': '02/04/2001',
    'LastName': 'Buchanan',
    'PostalCode': 'SW1 8JR',
    'Region': null,
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.'
  },
  {
    'Address': 'Coventry House\r\nMiner Rd.',
    'City': 'London',
    'Country': 'UK',
    'EmployeeID': 6,
    'FirstName': 'Michael',
    'HireDate': '22/01/2003',
    'LastName': 'Suyama',
    'PostalCode': 'EC2 7JR',
    'Region': null,
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.'
  },
  {
    'Address': 'Edgeham Hollow\r\nWinchester Way',
    'City': 'London',
    'Country': 'UK',
    'EmployeeID': 7,
    'FirstName': 'Robert',
    'HireDate': '22/07/2001',
    'LastName': 'King',
    'PostalCode': 'RG1 9SP',
    'Region': null,
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.'
  },
  {
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Seattle',
    'Country': 'USA',
    'EmployeeID': 8,
    'FirstName': 'Laura',
    'HireDate': '22/07/2001',
    'LastName': 'Callahan',
    'PostalCode': '98105',
    'Region': 'WA',
    'Title': 'Inside Sales Coordinator',
    'TitleOfCourtesy': 'Ms.'
  },
  {
    'Address': '7 Houndstooth Rd.',
    'City': 'London',
    'Country': 'UK',
    'EmployeeID': 9,
    'FirstName': 'Anne',
    'HireDate': '22/07/2001',
    'LastName': 'Dodsworth',
    'PostalCode': 'WG2 7LT',
    'Region': null,
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.'
  }
];
export let expenseData = [
  {
    'Amount': '7',
    'Category': 'Food',
    'Description': 'Boiled peanuts',
    'FormattedDate': '06/01/2017 09:12 AM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Credit Card',
    'TransactionType': 'Expense',
    'UniqueId': 'T100001'
  },
  {
    'Amount': '8',
    'Category': 'Food',
    'Description': 'Peanuts in Coke',
    'FormattedDate': '06/04/2017 02:43 PM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'UniqueId': 'T100024'
  },
  {
    'Amount': '11',
    'Category': 'Food',
    'Description': 'Palmetto Cheese, Mint julep',
    'FormattedDate': '06/04/2017 08:35 PM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'UniqueId': 'T100025'
  },
  {
    'Amount': '9',
    'Category': 'Transportation',
    'Description': 'Cars and trucks, used',
    'FormattedDate': '06/04/2017 10:25 AM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Debit Card',
    'TransactionType': 'Expense',
    'UniqueId': 'T100026'
  },
  {
    'Amount': '8',
    'Category': 'Transportation',
    'Description': 'Public and other transportation',
    'FormattedDate': '06/04/2017 03:55 PM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Debit Card',
    'TransactionType': 'Expense',
    'UniqueId': 'T100027'
  },
  {
    'Amount': '160',
    'Category': 'Shopping',
    'Description': 'Household things & Utilities',
    'FormattedDate': '06/04/2017 10:22 AM',
    'MonthFull': 'June, 2017',
    'MonthShort': 'Jun',
    'PaymentMode': 'Cash',
    'TransactionType': 'Expense',
    'UniqueId': 'T100028'
  },
  {
    'Amount': '110',
    'Category': 'Extra income',
    'Description': 'Income from Sale',
    'FormattedDate': '11/30/2017 02:42 PM',
    'MonthFull': 'November, 2017',
    'MonthShort': 'Nov',
    'PaymentMode': 'Cash',
    'TransactionType': 'Income',
    'UniqueId': 'T101284'
  }
];
export let hardwareData = [
  {
    'AssignedTo': 'John Doe',
    'Category': 'Laptop',
    'DOP': '04/10/2018',
    'InvoiceNo': 'INV-2878',
    'Name': 'Lenovo Yoga',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB27932009',
    'Status': 'Assigned',
    'TaskID': 1,
    'WEO': '05/01/2021'
  },
  {
    'AssignedTo': '',
    'Category': 'Others',
    'DOP': '02/12/2018',
    'InvoiceNo': 'INV-3456',
    'Name': 'Acer Aspire',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB35728290',
    'Status': 'In-repair',
    'TaskID': 2,
    'WEO': '03/01/2023'
  },
  {
    'AssignedTo': '',
    'Category': 'Laptop',
    'DOP': '04/10/2018',
    'InvoiceNo': 'INV-2763',
    'Name': 'Apple MacBook',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB35628728',
    'Status': 'In-repair',
    'TaskID': 3,
    'WEO': '04/03/2021'
  },
  {
    'AssignedTo': '',
    'Category': 'Laptop',
    'DOP': '03/09/2018',
    'InvoiceNo': 'INV-2980',
    'Name': 'Lenovo ThinkPad',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB56209872',
    'Status': 'Pending',
    'TaskID': 4,
    'WEO': '05/12/2021'
  },
  {
    'AssignedTo': 'David Anto',
    'Category': 'Laptop',
    'DOP': '01/10/2018',
    'InvoiceNo': 'INV-3782',
    'Name': 'Dell Inspiron',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB56289036',
    'Status': 'Assigned',
    'TaskID': 5,
    'WEO': '04/01/2021'
  },
  {
    'AssignedTo': 'Mary Saveley',
    'Category': 'Laptop',
    'DOP': '04/10/2018',
    'InvoiceNo': 'INV-2712',
    'Name': 'HP Pavilion',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB56289305',
    'Status': 'Assigned',
    'TaskID': 6,
    'WEO': '05/01/2021'
  },
  {
    'AssignedTo': '',
    'Category': 'Laptop',
    'DOP': '06/16/2018',
    'InvoiceNo': 'INV-0984',
    'Name': 'Asus ZenBook',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB25637891',
    'Status': 'Pending',
    'TaskID': 7,
    'WEO': '09/01/2021'
  },
  {
    'AssignedTo': '',
    'Category': 'Laptop',
    'DOP': '02/19/2018',
    'InvoiceNo': 'INV-2561',
    'Name': 'HP EliteBook',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB27819726',
    'Status': 'Ordered',
    'TaskID': 8,
    'WEO': '05/21/2021'
  },
  {
    'AssignedTo': '',
    'Category': 'Laptop',
    'DOP': '02/12/2018',
    'InvoiceNo': 'INV-8970',
    'Name': 'Apple MacBook Air',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB05262880',
    'Status': 'Pending',
    'TaskID': 9,
    'WEO': '03/01/2023'
  },
  {
    'AssignedTo': '',
    'Category': 'Tablet',
    'DOP': '04/10/2018',
    'InvoiceNo': 'INV-4555',
    'Name': 'Apple iPad Air',
    'Note': 'Remarks are noted',
    'SerialNo': 'CB45262777',
    'Status': 'Pending',
    'TaskID': 10,
    'WEO': '05/01/2021'
  }
];