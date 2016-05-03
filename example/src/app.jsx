import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../src/Table.jsx';
import '!style!css!../../dist/flexable.css';
// TODO: figure out why isn't working to import { Table } from distributable
// figure out why either way css isn't being included

const data = [{
    name: 'Bernie',
    age: 74
}, {
    name: 'Hillary',
    age: 68
}, {
    name: 'Donald',
    age: 69
}, {
    name: 'Marco',
    age: 44
}, {
    name: 'Ted',
    age: 45
}];

const columnDefinitions = [{
    className: 'utility-flex-grow-3 row-name',
    style: {},
    propertyMap: (r) => r.name,
    columnHeaderClass: 'utility-flex-grow-3',
    columnHeaderStyle: {},
    columnHeaderText: 'Name'
}, {
    propertyMap: (r) => r.age,
    columnHeaderText: 'Age'
}];

ReactDOM.render(
    <div>
        <Table tableData={data} columnDefinitions={columnDefinitions} />
    </div>,
    document.getElementById('example')
);