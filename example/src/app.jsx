import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '../../lib/Table'
import '!style-loader!css-loader!../../dist/flexable.css';
import '!style-loader!css-loader!./example.css';
import axios from 'axios';
// TODO: figure out why isn't working to import { Table } from distributable

const columnDefinitions = [{
    className: 'utility-flex-grow-3 row-name',
    style: {},
    propertyMap: (r) => r.Title,
    columnHeaderClassName: 'utility-flex-grow-3',
    columnHeaderStyle: {},
    columnHeaderText: 'TITLE'
}, {
    // defining cell properties in context of row
    // you can use this to modify style, className,
    // etc.. of cell in context of the row data
    // e.g. show red if the value is negative or
    // blue if the value is positive
    defineCell: (row) => ({
        propertyMap: () => row.Year
    }),
    columnHeaderText: 'YEAR',
    columnHeaderClassName : ''
}, {
    className: 'utility-flex-grow-2 row-name',
    style: {},
    propertyMap: (r) => r.imdbID,
    columnHeaderClassName: 'utility-flex-grow-2',
    columnHeaderStyle: {},
    columnHeaderText: 'IMDB ID'
}, {
    className: 'utility-flex-grow-2 row-name',
    style: {},
    propertyMap: (r) => r.Type,
    columnHeaderClassName: 'utility-flex-grow-2',
    columnHeaderStyle: {},
    columnHeaderText: 'Type'
}, {
    className: 'utility-flex-grow-3 row-name',
    style: { }, //TODO: this should be passed down to child elements
    propertyMap: (r) => (<div><img src={r.Poster} style={{ maxWidth: '200px', height: 'auto' }} /></div>),
    columnHeaderClassName: 'utility-flex-grow-3',
    columnHeaderStyle: {},
    columnHeaderText: 'Poster'
}];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (!this.state.data) {
            return axios.get('http://www.omdbapi.com/?s=football')
                .then(({ data }) => this.setState({ data: data.Search }));
        }
    }

    render() {
        return (
            <div>
                {this.state.data && <Table tableData={this.state.data}
                    includeVerticalScrollbar={true}
                    columnDefinitions={columnDefinitions}
                    tableBodyStyle={ { maxHeight: 500 } } />}
            </div>
        );
    }
}

ReactDOM.render(
    <Example />,
    document.getElementById('example')
);