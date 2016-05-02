import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultCell from './Cell.jsx';

const Row = ({
    key,
    className,
    style,
    rowData,
    columnDefinitions,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }flexable-row`;
    const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
        const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
        return React.cloneElement(c, { key: `${key}-cell-${i}`, ..._passthroughProps, ...columnDefinition, rowData });
    }));

    return (
        <FlexableElement key={_key}
                     style={style}
                     className={_className}
                     transformChildren={transformChildren}
                     {...remainingProps}>
            {children.length === 0 && columnDefinitions.map(() => {
                return (<Cell />)
            })}
        </FlexableElement>
    );
}

Row.propTypes = {
    key: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    rowData: PropTypes.object,
    columnDefinitions: PropTypes.array
};

export const RowHOC = (Cell) => Row;

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;
