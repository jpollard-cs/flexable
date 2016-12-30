import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from '../../dist/flexable.min';
import '!style-loader!css-loader!../../dist/flexable.css';
import '!style-loader!css-loader!./example.css';

const data = [{
        name: 'Bernie',
        age: 0
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
        age: 0
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