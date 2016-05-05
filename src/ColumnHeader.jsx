import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';

const ColumnHeader = ({
    className,
    style,
    text,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }column-header flexable-row-cell`;

    return (
        <FlexableElement style={style}
                         className={_className}
                         text={text}
                         {...remainingProps} />
    );
}

ColumnHeader.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string
};

export default ColumnHeader;
