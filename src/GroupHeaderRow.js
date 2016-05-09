import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement';

const GroupHeaderRow = ({
    _key,
    style,
    className,
    text,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }group-header-row flexable-row`;
    const generateChildKey = (k, i) => `group-header-cell-${k}-${i}`;

    return (
        <FlexableElement {...remainingProps}
                         style={style}
                         _key={_key}
                         className={_className}
                         generateChildKey={generateChildKey}
                         text={text} />
    );
};

GroupHeaderRow.propTypes = {
    _key: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string
};

export default GroupHeaderRow;
