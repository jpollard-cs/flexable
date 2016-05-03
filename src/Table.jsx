/* import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultRow from './Row.jsx';

const Table = ({
    tableData,
    style,
    className,
    columnDefinitions,
    rowStyle,
    rowClassName,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }table flexable`;
    const transformChildren = (children, _passthroughProps) => (React.Children.map(children, (c, i) => {
        return React.cloneElement(c, {
            key: `row-${i}`,
            style: rowStyle,
            className: rowClassName,
            columnDefinitions: columnDefinitions,
            rowData: tableData[i],
            ..._passthroughProps
        });
    }));

    // TODO: add parameters to control pre-built options e.g. toggle default scrolling behavior, how certain things behave, etc... try to keep number of props to a minimum - use config object if necessary
    // TODO: need to implement column header row from RowHOC, but also need to handle column definitions mappings from columnHeaderStyle, columnHeaderClass, etc..
    return (
        <FlexableElement style={style}
                         className={_className}
                         transformChildren={transformChildren}
                         {...remainingProps}>
            {this.props.children.length === 0 && data.map(() => {
                return (<Row />)
            })}
        </FlexableElement>
    );
};

Table.propTypes = {
    tableData: PropTypes.array.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    columnDefinitions: PropTypes.array.isRequired,
    rowStyle: PropTypes.object,
    rowClassName: PropTypes.string
}

export const TableHOC = (Row) => Table;

const DefaultTable = TableHOC(DefaultRow);

export { DefaultTable as Table }; */

import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultRow from './Row.jsx';

export const TableHOC = (Row) => class Table extends Component {

    static propTypes = {
        tableData: PropTypes.array.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        columnDefinitions: PropTypes.array.isRequired,
        rowStyle: PropTypes.object,
        rowClassName: PropTypes.string
    }

    render() {
        const { tableData, style, className, columnDefinitions, rowStyle, rowClassName, children} = this.props;
        const _className = `${ className ? `${className} ` : '' }table flexable`;
        const transformChildren = (children, _passthroughProps) => (React.Children.map(children, (c, i) => {
            return React.cloneElement(c, {
                key: `row-${i}`,
                style: rowStyle,
                className: rowClassName,
                columnDefinitions: columnDefinitions,
                rowData: tableData[i],
                ..._passthroughProps
            });
        }));

        // TODO: add parameters to control pre-built options e.g. toggle default scrolling behavior, how certain things behave, etc... try to keep number of props to a minimum - use config object if necessary
        // TODO: need to implement column header row from RowHOC, but also need to handle column definitions mappings from columnHeaderStyle, columnHeaderClass, etc..
        return (
            <FlexableElement style={style}
                className={_className}
                transformChildren={transformChildren}>
                {!children && tableData.map(() => {
                    return (<Row />)
                })}
            </FlexableElement>
        );
    }
};

const DefaultTable = TableHOC(DefaultRow);

export default DefaultTable;
