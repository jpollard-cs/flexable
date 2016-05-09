import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultRow from './Row.jsx';

export const TableBodyHOC = (Row) => ({
    className,
    style,
    tableData,
    columnDefinitions,
    rowClassName,
    rowStyle,
    includeVerticalScrollbar,
    ...remainingProps
}) => {
    const _className = `${includeVerticalScrollbar ? 'flexable-vertical-scroll-overlay' : ''}${ className ? ` ${className}`: '' }`;
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
                         id="flexable-table-body"
                         className={_className}
                         style={style}
                         transformChildren={transformRows('row')}>
            {!remainingProps.children && tableData.map(() => {
                return (<Row />)
            })}
        </FlexableElement>
    );
};

TableBodyHOC.propTypes = {
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    style: PropTypes.object,
    rowStyle: PropTypes.object,
    tableData: PropTypes.object,
    columnDefinitions: PropTypes.array,
    includeVerticalScrollbar: PropTypes.bool
};

TableBodyHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultTableBody = TableBodyHOC(DefaultRow);

export default DefaultTableBody;