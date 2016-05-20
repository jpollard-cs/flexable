import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const GroupHeaderRow = ({
    style,
    className,
    text,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }group-header-row flexable-row`;

    return (
        <FlexableElement {...remainingProps}
                         style={style}
                         className={_className}
                         text={text} />
    );
};

GroupHeaderRow.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string
};

export default GroupHeaderRow;
