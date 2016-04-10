import React, { Component, PropTypes } from 'react';
import except from 'except';

class ColumnHeader extends Component {
    static propTypes = {
        columnHeaderClass: PropTypes.string,
        columnHeaderStyle: PropTypes.object,
        columnHeaderText: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { columnHeaderClass, children, columnHeaderStyle } = this.props;
        const style = columnHeaderStyle ? columnHeaderStyle : Object.create(null);
        const columnHeaderText = this.props.columnHeaderText !== undefined ? `${this.props.columnHeaderText}` : '';
        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'columnHeaderClass']);
        const transformedChildren = React.Children.map(children, c => React.cloneElement(c, passthroughProps));

        return (
            <div style={style} className={ `${ columnHeaderClass ? `${columnHeaderClass} ` : '' }column-header flexable-row-cell` }>
                { React.Children.count(children) > 0 ? transformedChildren : columnHeaderText }
            </div>
        );
    }
}

export default ColumnHeader;
