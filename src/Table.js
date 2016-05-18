import React, { Component, PropTypes } from 'react';

import DefaultTableBody from './TableBody';
import DefaultTableHeader from './TableHeader';

export const TableHOC = (TableBody, TableHeader) => ({
    tableData,
    style,
    className,
    columnDefinitions,
    rowStyle,
    rowClassName,
    tableBodyStyle,
    tableBodyClassName,
    tableHeaderStyle,
    tableHeaderClassName,
    includeVerticalScrollbar,
    setTableBodyRef
}) => {
    const _className = `${ className ? `${className} ` : '' }table flexable`;

    return (
        <div style={style} className={_className}>
            <TableHeader style={tableHeaderStyle}
                         className={tableHeaderClassName}
                         tableData={tableData}
                         columnDefinitions={columnDefinitions}
                         rowClassName={rowClassName}
                         rowStyle={rowStyle}
                         includeVerticalScrollbar={includeVerticalScrollbar} />
            <TableBody style={tableBodyStyle}
                       className={tableBodyClassName}
                       tableData={tableData}
                       columnDefinitions={columnDefinitions}
                       rowClassName={rowClassName}
                       rowStyle={rowStyle}
                       setRef={setTableBodyRef}
                       includeVerticalScrollbar={includeVerticalScrollbar} />
        </div>
    );
};

TableHOC.propTypes = {
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
    includeVerticalScrollbar: PropTypes.bool,
    setTableBodyRef: PropTypes.func
};

TableHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultTable = TableHOC(DefaultTableBody, DefaultTableHeader);

export default DefaultTable;
