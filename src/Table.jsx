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
import DefaultColumnHeader from './ColumnHeader.jsx';

export const TableHOC = (Row, ColumnHeader) => class Table extends Component {

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
        const otherProps = {};
        if (children) {
            // is there a better way around this hack?
            otherProps._children = children; // also need to address this for column header, but should address once break out into separate
            // column header row element
        }

        //todo this should actually be in a special React element called ColumnHeaderRow & have header style/className in column definition
        const transformHeaderRow = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
            const columnDefinition = columnDefinitions[i];
            //TODO: why is this finding three children - also this seems to be missing a class / wrapper
            if (!columnDefinition) { return null; }
            return React.cloneElement(c, {
                key: `header-row-${i}`,
                text: columnDefinition.columnHeaderText,
                includeVerticalScrollCell: includeVerticalScrollbar,
                ..._passthroughProps
            });
        }));

        const transformRows = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
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
        // TODO: table body & header row should be their own elements so users can more easily replace with their own implementation
        // TODO: should actually have logic in ColumnHeaderRow that combines className with columnHeaderClassName and same with style/columnHeaderStyle rather than having style={c.style} className={c.className} text={c.columnHeaderText} like below
        return (
            <div style={style} className={_className}>
                <div id="flexable-table-header" className={tableHeaderClassName} style={tableHeaderStyle}>
                    <FlexableElement transformChildren={transformHeaderRow}>
                        <Row>
                            {columnDefinitions && columnDefinitions.map((c) => {
                                return (<ColumnHeader style={c.style} className={c.className} text={c.columnHeaderText}  />)
                            })}
                        </Row>
                    </FlexableElement>
                </div>
                <div id="flexable-table-body" className={_tableBodyClassName} style={tableBodyStyle}>
                    <FlexableElement transformChildren={transformRows} {...otherProps}>
                        {!children && tableData.map(() => {
                            return (<Row />)
                        })}
                    </FlexableElement>
                </div>
            </div>
        );
    }
};

TableHOC.defaultProps = {
    includeVerticalScrollbar: true
}

const DefaultTable = TableHOC(DefaultRow, DefaultColumnHeader);

export default DefaultTable;
