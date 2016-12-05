import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const Cell = ({
    _key,
    rowData,
    columnDefinition,
    ...remainingProps
}) => {

    if (columnDefinition === null || columnDefinition === undefined) {
        return (<div className="flexable-row-cell"/>);
    }

    let definition = columnDefinition;
    if (typeof columnDefinition.defineCell === 'function') {
        // callers should be prepared to handle scenario where rowData is undefined
        // by still defining things like static styles and classNames (especially
        // if they affect layout)
        definition = { ...columnDefinition, ...columnDefinition.defineCell(rowData) };
    }

    const className = `${ definition.className ? `${definition.className} ` : '' }flexable-row-cell`;

    const { propertyMap } = definition;

    if (rowData === undefined || propertyMap === undefined) {
        return (
            <div style={definition.style} className={className}></div>
        );
    }

    const children = propertyMap(rowData);

    // note order of props is important here (e.g. we want className to over-write
    // className in definition
    return (
        <FlexableElement {...remainingProps}
                         _key={_key}
                         {...definition}
                         className={className}>
            {children}
         </FlexableElement>
    );
};

Cell.propTypes = {
    _key: PropTypes.string,
    rowData: PropTypes.object,
    columnDefinition: PropTypes.object
};

export default Cell;
