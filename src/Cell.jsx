import React, { Component, PropTypes } from 'react';
import except from 'except';

import FlexableElement from './FlexableElement.jsx';

class Cell extends Component {
    static propTypes = {
        key: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
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

    render() {
        const { className, children, rowData, propertyMap, style, key } = this.props;
        const _className = `${ className ? `${className} ` : '' }flexable-row-cell`;
        if (rowData === undefined || propertyMap === undefined) {
            return (
                <div style={style} className={_className}></div>
            );
        }

        const cellData = propertyMap(rowData);
        const passthroughProps = except(this.props, ['className', 'style']);

        return (
            <FlexableElement key={key}
                             style={style}
                             className={_className}
                             children={children}
                             cellData={cellData}
                             text={cellData}
                             {...passthroughProps}  />
        );
    }
}

export default Cell;
