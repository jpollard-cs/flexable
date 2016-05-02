import React, { Component, PropTypes } from 'react';
import except from 'except';

import DefaultPassthroughProps from './DefaultPassthroughProps.jsx';

class FlexableElement extends Component {
    static propTypes = {
        class: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        omitProps: PropTypes.array
    }

    render() {
        const { columnHeaderClass, children, columnHeaderStyle, columnHeaderText } = this.props;
        const passthroughProps = except(this.props, [...DefaultPassthroughProps, ...omitProps]);
        const transformedChildren = React.Children.map(children, c => React.cloneElement(c, passthroughProps));

        return (
            <div style={columnHeaderStyle} className={ `${ columnHeaderClass ? `${columnHeaderClass} ` : '' }column-header flexable-row-cell` }>
                { React.Children.count(children) > 0 ? transformedChildren : columnHeaderText }
            </div>
        );
    }
}

ColumnHeader.defaultProps = {
    columnHeaderText: '',
    columnHeaderStyle: Object.create(null),
    omitProps: []
}

export default ColumnHeader;
