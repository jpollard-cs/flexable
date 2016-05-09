import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import ColumnHeaderCell from './ColumnHeader.jsx';
import { RowHOC } from './Row.jsx';

export const TableHeaderHOC = (ColumnHeaderRow) => ({
    className,
    style,
    tableData,
    columnDefinitions,
    rowClassName,
    rowStyle,
    includeVerticalScrollbar,
    ...remainingProps
}) => {
    const transformRows = (keyPrefix) => (children, passthroughProps) => (React.Children.map(children, (c, i) => {
        return React.cloneElement(c, {
            key: `${keyPrefix}-${i}`,
            style: rowStyle,
            className: rowClassName,
            columnDefinitions: columnDefinitions,
            rowData: tableData[i],
            includeVerticalScrollbar,
            ...passthroughProps
        });
    }));

    return (
        <FlexableElement {...remainingProps}
            id="flexable-table-header"
            className={className}
            style={style}
            transformChildren={transformRows('header-row')}>
            {!remainingProps.children &&
                <ColumnHeaderRow />}
        </FlexableElement>
    );
};

TableHeaderHOC.propTypes = {
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    style: PropTypes.object,
    rowStyle: PropTypes.object,
    tableData: PropTypes.object,
    columnDefinitions: PropTypes.array,
    includeVerticalScrollbar: PropTypes.bool
};

TableHeaderHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultColumnHeaderRow = RowHOC(ColumnHeaderCell);
const DefaultTableHeader = TableHeaderHOC(DefaultColumnHeaderRow);

export default DefaultTableHeader;