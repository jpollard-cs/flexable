import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import Row from './Row.jsx';

class Table extends Component {
    static propTypes = {
        tableData: PropTypes.array.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        columnDefinitions: PropTypes.array.isRequired,
        rowStyle: PropTypes.object,
        rowClassName: PropTypes.string
    }

    render() {
        const className = `${ this.props.className ? `${this.props.className} ` : '' }table flexable`;
        const transformChildren = (children, passthroughProps) => (React.Children.map(children, (c, i) => {
            return React.cloneElement(c, {
                key: `row-${i}`,
                style: this.props.rowStyle,
                className: this.props.rowClassName,
                columnDefinitions: this.props.columnDefinitions,
                rowData: this.props.tableData[i],
                ...passthroughProps
            });
        }));

        // TODO: add parameters to control pre-built options e.g. toggle default scrolling behavior, how certain things behave, etc... try to keep number of props to a minimum - use config object if necessary
        return (
            <FlexableElement style={this.props.style}
                             className={className}
                             transformChildren={transformChildren}>
                {this.props.children.length === 0 && data.map(() => {
                    return (<Row />)
                })}
            </FlexableElement>
        );
    }
}

export default Table;
