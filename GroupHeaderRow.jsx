import React, { Component, PropTypes } from 'react';
import except from 'except';

class GroupHeaderRow extends Component {
    static propTypes = {
        groupHeaderRowClass: PropTypes.string,
        groupHeaderRowText: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    // TODO: maybe there's a way to get this to work with a HOC Row model if callers can provide a custom row render model to override
    // row rendering?
    render() {
        const { groupHeaderRowClass, groupHeaderRowText, children } = this.props;

        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'groupHeaderRowClass']);
        const transformedChildren = React.Children.map(children, (c, i) => React.cloneElement(c, { key: `group-header-cell-${i}`, ...passthroughProps }));

        return (
            <div className={ `${ groupHeaderRowClass ? `${groupHeaderRowClass} ` : '' }group-header-row flexable-row` }>
                { React.Children.count(children) > 0 ? transformedChildren : groupHeaderRowText }
            </div>
        );
    }
}

export default GroupHeaderRow;
