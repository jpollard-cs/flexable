import React, { Component, PropTypes } from 'react';
import except from 'except';

class Table extends Component {
    static propTypes = {
        tableClass: PropTypes.string,
        columnDefinitions: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { tableClass, children } = this.props;
        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'tableClass']);
        const transformedChildren = React.Children.map(children, c => React.cloneElement(c, passthroughProps));
        
        // todo: if children defined then don't auto-render table otherwise auto-render
        return (
            <div className={ `${ tableClass ? `${tableClass} ` : '' }table flexable` }>
                { transformedChildren }
            </div>
        );
    }
}

export default Table;
