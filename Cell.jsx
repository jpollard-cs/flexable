import React, { Component, PropTypes } from 'react';
import except from 'except';

class Cell extends Component {
    static propTypes = {
        cellClass: PropTypes.string,
        cellStyle: PropTypes.object,
        rowData: PropTypes.object,
        // propertyMap should be a function that
        // takes the object representing a row
        // and returns the data as you want to
        // represent it as `cellData`
        //
        // If there are no child elements, the
        // Cell will show the result of this function
        // "as is"
        // Otherwise, if the Cell has any child
        // elements, the Cell will pass the 'cellData'
        // to these child elements and leave it up
        // to these elements to represent this data
        // as they see fit
        propertyMap: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { cellClass, children, rowData, propertyMap, cellStyle } = this.props;
        const style = cellStyle ? cellStyle : Object.create(null);
        if (rowData === undefined || propertyMap === undefined) {
            return (
                <div style={style} className={ `${ cellClass ? `${cellClass} ` : '' }flexable-row-cell` }>
                </div>
            );
        }

        const cellData = propertyMap(rowData);
        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'cellClass']);
        const transformedChildren = React.Children.map(children, c => React.cloneElement(c, { ...passthroughProps, cellData }));

        return (
            <div style={style} className={ `${ cellClass ? `${cellClass} ` : '' }flexable-row-cell` }>
                { React.Children.count(children) > 0 ? transformedChildren : (<div>{cellData}</div>) }
            </div>
        );
    }
}

export default Cell;
