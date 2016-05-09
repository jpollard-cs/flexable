import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../src/Table.jsx';
import Row from '../../src/Row.jsx';
import '!style!css!../../dist/flexable.css';
import '!style!css!./example.css';
// TODO: figure out why isn't working to import { Table } from distributable

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
    }, {
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
    }, {
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
    }, {
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
    columnHeaderClassName: 'utility-flex-grow-3',
    columnHeaderStyle: {},
    columnHeaderText: 'Name'
}, {
    propertyMap: (r) => r.age,
    columnHeaderText: 'Age',
    columnHeaderClassName : ''
}];

ReactDOM.render(
    <div>
        <Table tableData={data}
               includeVerticalScrollbar={true}
               columnDefinitions={columnDefinitions}
               tableBodyStyle={ { maxHeight: 400 } } />
    </div>,
    document.getElementById('example')
);