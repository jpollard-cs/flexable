import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';

class ColumnHeader extends Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string
    }

    render() {
        const { className, children, style, text } = this.props;
        const _className = `${ className ? `${className} ` : '' }column-header flexable-row-cell`;

        return (
            <FlexableElement style={style}
                         className={_className}
                         children={children}
                         text={text} />
        );
    }
}

ColumnHeader.defaultProps = {
    text: ''
}

export default ColumnHeader;
