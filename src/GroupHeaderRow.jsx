import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';

class GroupHeaderRow extends Component {
    static propTypes = {
        key: PropTypes.string.isRequired,
        style: PropTypes.object,
        className: PropTypes.string,
        text: PropTypes.string
    }
    
    render() {
        const { className, text, children, style, key } = this.props;
        const _className = `${ className ? `${className} ` : '' }group-header-row flexable-row`;
        const generateChildKey = (key, i) => `group-header-cell-${key}-${i}`;

        return (
            <FlexableElement style={style} 
                             className={_className} 
                             children={children}
                             generateChildKey={generateChildKey}
                             transformChildren={transformChildren} 
                             text={text} />
        );
    }
}

export default GroupHeaderRow;
