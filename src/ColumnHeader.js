import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const ColumnHeader = ({
    columnHeaderClassName,
    columnHeaderStyle,
    columnHeaderText,
    ...remainingProps
}) => {
    const className = `${ columnHeaderClassName ? `${columnHeaderClassName} ` : '' }column-header flexable-row-cell`;
    return (
        <FlexableElement {...remainingProps}
                         style={columnHeaderStyle}
                         className={className}
                         text={columnHeaderText} />
    );
}

ColumnHeader.propTypes = {
    columnHeaderClassName: PropTypes.string,
    columnHeaderStyle: PropTypes.object,
    columnHeaderText: PropTypes.string
};

export default ColumnHeader;
