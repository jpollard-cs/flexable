import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const Cell = ({
    _key,
    className,
    style,
    rowData,
    propertyMap,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }flexable-row-cell`;
    if (rowData === undefined || propertyMap === undefined) {
        return (
            <div style={style} className={_className}></div>
        );
    }

    const cellData = propertyMap(rowData);

    return (
        <FlexableElement _key={_key}
                         style={style}
                         className={_className}
                         cellData={cellData}
                         text={cellData}
                         rowData={rowData}
                         {...remainingProps} />
    );
};

Cell.propTypes = {
    _key: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    rowData: PropTypes.object,
    // propertyMap should be a function that
    // takes the object representing a row
    // and returns the data as you want to
    // represent it as `cellData`
    //
    // If there are no child elements, the
    // Cell will show the result of this function
    // "as is"
    // Otherwise, if the Cell has any child
    // elements, the Cell will pass the 'cellData'
    // to these child elements and leave it up
    // to these elements to represent this data
    // as they see fit
    propertyMap: PropTypes.func
};

export default Cell;
