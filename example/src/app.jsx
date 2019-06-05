import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../lib/Table'
import '!style-loader!css-loader!../../dist/flexable.css';
import '!style-loader!css-loader!./example.css';
// TODO: figure out why isn't working to import { Table } from distributable

const data = [{
        name: 'Sally',
        age: 0
    }, {
        name: 'Fred',
        age: 68
    }, {
        name: 'Ted',
        age: 69
    }, {
        name: 'Donna',
        age: 44
    }, {
        name: 'Ted',
        age: 45
    }, {
        name: 'Frankie',
        age: 74
    }, {
        name: 'Bob',
        age: 68
    }, {
        name: 'Elmo',
        age: 69
    }, {
        name: 'Madison',
        age: 44
    }, {
        name: 'Jessica',
        age: 45
    }, {
        name: 'Amy',
        age: 74
    }, {
        name: 'Hillary',
        age: 68
    }, {
        name: 'Franklin',
        age: 69
    }, {
        name: 'Brian',
        age: 44
    }, {
        name: 'Mark',
        age: 45
    }, {
        name: 'Amelia',
        age: 74
    }, {
        name: 'Sam',
        age: 68
    }, {
        name: 'Donald',
        age: 69
    }];

const columnDefinitions = [{
    className: 'utility-flex-grow-3 row-name',
    style: {},
    propertyMap: (r) => r.name,
    columnHeaderClassName: 'utility-flex-grow-3',
    columnHeaderStyle: {},
    columnHeaderText: 'Name'
}, {
    // defining cell properties in context of row
    // you can use this to modify style, className,
    // etc.. of cell in context of the row data
    // e.g. show red if the value is negative or
    // blue if the value is positive
    defineCell: (row) => ({
        propertyMap: () => row.age
    }),
    columnHeaderText: 'Age',
    columnHeaderClassName : ''
}];

ReactDOM.render(
    <div>
        <Table tableData={data}
               includeVerticalScrollbar={true}
               columnDefinitions={columnDefinitions}
               tableBodyStyle={ { maxHeight: 200 } } />
    </div>,
    document.getElementById('example')
);
