import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';

const GroupHeaderRow = ({
    key,
    style,
    className,
    text,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }group-header-row flexable-row`;
    const generateChildKey = (_key, i) => `group-header-cell-${_key}-${i}`;

    return (
        <FlexableElement style={style}
                         key={key}
                         className={_className}
                         generateChildKey={generateChildKey}
                         text={text}
                         {...remainingProps} />
    );
};

GroupHeaderRow.propTypes = {
    key: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
    text: PropTypes.string
};

export default GroupHeaderRow;
