import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const ColumnHeader = ({
    columnDefinition,
    ...remainingProps
}) => {
    const className = `${ columnDefinition.columnHeaderClassName ? `${columnDefinition.columnHeaderClassName} ` : '' }column-header flexable-row-cell`;
    return (
        <FlexableElement {...remainingProps}
                         style={columnDefinition.columnHeaderStyle}
                         className={className}
                         text={columnDefinition.columnHeaderText} />
    );
}

ColumnHeader.propTypes = {
    columnDefinition: PropTypes.object
};

export default ColumnHeader;
