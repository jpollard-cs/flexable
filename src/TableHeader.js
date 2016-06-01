import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';
import ColumnHeaderCell from './ColumnHeader';
import { RowHOC } from './Row';

export const TableHeaderHOC = (ColumnHeaderRow) => ({
    className,
    style,
    tableData,
    columnDefinitions,
    rowClassName,
    rowStyle,
    setRef,
    includeVerticalScrollbar,
    ...remainingProps
}) => {
    const transformRows = (keyPrefix) => (children, passthroughProps) => (React.Children.map(children, (c, i) => {
        if (!React.isValidElement(c)) {
            return c;
        }
        
        return React.cloneElement(c, {
            _key: `${keyPrefix}-${i}`,
            style: rowStyle,
            className: rowClassName,
            columnDefinitions: columnDefinitions,
            rowData: tableData[i],
            includeVerticalScrollbar,
            ...passthroughProps
        });
    }));

    if(!setRef) {
        return (
            <FlexableElement {...remainingProps}
                id="flexable-table-header"
                className={className}
                style={style}
                transformChildren={transformRows('header-row')}>
                {!remainingProps.children &&
                    <ColumnHeaderRow key={`header-row`}/>}
                {!!remainingProps.children &&
                    remainingProps.children}
            </FlexableElement>
        );
    }

    return (
        <FlexableComponent {...remainingProps}
            id="flexable-table-header"
            ref={setRef}
            className={className}
            style={style}
            transformChildren={transformRows('header-row')}>
            {!remainingProps.children &&
                <ColumnHeaderRow key={`header-row`}/>}
            {!!remainingProps.children &&
                remainingProps.children}
        </FlexableComponent>
    );
};

TableHeaderHOC.propTypes = {
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    style: PropTypes.object,
    rowStyle: PropTypes.object,
    tableData: PropTypes.object,
    columnDefinitions: PropTypes.array,
    setRef: PropTypes.func,
    includeVerticalScrollbar: PropTypes.bool
};

TableHeaderHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultColumnHeaderRow = RowHOC(ColumnHeaderCell);
const DefaultTableHeader = TableHeaderHOC(DefaultColumnHeaderRow);

export default DefaultTableHeader;