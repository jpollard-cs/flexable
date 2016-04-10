import React, { Component, PropTypes } from 'react';
import except from 'except';

// simply a collection of columns
// a row is just a virtual object which is given
// ability to override things like sorting logic
// thus allowing rows to contain groupings
class Row extends Component {
    static propTypes = {
        rowClass: PropTypes.string,
        rowData: PropTypes.object,
        columnDefinitions: PropTypes.array
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { rowClass, children } = this.props;

        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'rowClass', 'columnDefinitions']);
        // TODO: key will need to be more robust in case there are multiple tables (maybe pass down the flexable and row keys and aggregate or is React smart enough to figure out if the parent key is different)?
        const transformedChildren = React.Children.map(children, (c, i) => {
            const columnDefinition = this.props.columnDefinitions ? this.props.columnDefinitions[i] : Object.create(null);
            return React.cloneElement(c, { key: `cell-${i}`, ...passthroughProps, ...columnDefinition });
        });

        return (
            <div className={ `${ rowClass ? `${rowClass} ` : '' }flexable-row` }>
                { transformedChildren }
            </div>
        );
    }
}

export default Row;
