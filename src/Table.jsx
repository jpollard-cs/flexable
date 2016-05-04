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
        rowClassName: PropTypes.string,
        tableBodyStyle: PropTypes.object,
        tableBodyClassName: PropTypes.string,
        tableHeaderStyle: PropTypes.object,
        tableHeaderClassName: PropTypes.string,
        includeVerticalScrollbar: PropTypes.bool
    }

    render() {
        const { tableData, style, className, columnDefinitions, rowStyle, rowClassName, children, 
            tableBodyStyle, tableBodyClassName, tableHeaderStyle, tableHeaderClassName, includeVerticalScrollbar } = this.props;
        const _tableBodyClassName = `${includeVerticalScrollbar ? 'flexable-vertical-scroll-overlay' : ''}${ tableBodyClassName ? ` ${tableBodyClassName}`: '' }`;
        const _className = `${ className ? `${className} ` : '' }table flexable`;
        const transformChildren = (children, _passthroughProps) => (React.Children.map(children, (c, i) => {
            return React.cloneElement(c, {
                key: `row-${i}`,
                style: rowStyle,
                className: rowClassName,
                columnDefinitions: columnDefinitions,
                rowData: tableData[i],
                includeVerticalScrollCell: includeVerticalScrollbar, // todo: move to a settings object
                ..._passthroughProps
            });
        }));

        // TODO: add parameters to control pre-built options e.g. toggle default scrolling behavior, how certain things behave, etc... try to keep number of props to a minimum - use config object if necessary
        // TODO: need to implement column header row from RowHOC, but also need to handle column definitions mappings from columnHeaderStyle, columnHeaderClass, etc..
        // TODO: wire up option for includeVerticalScrollCell,
        return (
            <div id="flexable-table-body" className={_tableBodyClassName} style={tableBodyStyle}>
                <FlexableElement style={style}
                    className={_className}
                    transformChildren={transformChildren}>
                    {!children && tableData.map(() => {
                        return (<Row />)
                    })}
                </FlexableElement>
            </div>
        );
    }
};

TableHOC.defaultProps = {
    includeVerticalScrollbar: true
}

const DefaultTable = TableHOC(DefaultRow);

export default DefaultTable;
