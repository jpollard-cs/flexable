import React, { Component, PropTypes } from 'react';

import FlexableComponent from './FlexableComponent';
import FlexableElement from './FlexableElement';
import DefaultRow from './Row';

export const TableBodyHOC = (Row) => ({
    className,
    style,
    tableData,
    columnDefinitions,
    rowClassName,
    rowStyle,
    includeVerticalScrollbar,
    setRef,
    ...remainingProps
}) => {
    const _className = `${includeVerticalScrollbar ? 'flexable-vertical-scroll-overlay' : ''}${ className ? ` ${className}`: '' }`;
    const transformRows = (keyPrefix) => (children, passthroughProps) => (React.Children.map(children, (c, i) => {
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

    if (!setRef) {
        return (
            <FlexableElement {...remainingProps}
                id="flexable-table-body"
                className={_className}
                style={style}
                transformChildren={transformRows('row')}>
                {!remainingProps.children && tableData.map((d, i) => {
                    return (<Row key={`row-${i}`}/>)
                })}
            </FlexableElement>
        )
    }

    return (
        <FlexableComponent {...remainingProps}
                         id="flexable-table-body"
                         ref={setRef}
                         className={_className}
                         style={style}
                         transformChildren={transformRows('row')}>
            {!remainingProps.children && tableData.map((d, i) => {
                return (<Row key={`row-${i}`}/>)
            })}
        </FlexableComponent>
    );
};

TableBodyHOC.propTypes = {
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    style: PropTypes.object,
    rowStyle: PropTypes.object,
    tableData: PropTypes.object,
    columnDefinitions: PropTypes.array,
    includeVerticalScrollbar: PropTypes.bool,
    setRef: PropTypes.func
};

TableBodyHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultTableBody = TableBodyHOC(DefaultRow);

export default DefaultTableBody;