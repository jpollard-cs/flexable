import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultCell from './Cell.jsx';

export const RowHOC = (Cell) => class Row extends Component {
    static propTypes = {
        key: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
        rowData: PropTypes.object,
        columnDefinitions: PropTypes.array
    }
    
    render() {
        const { className, children, style, key, columnDefinitions } = this.props;
        const _className = `${ className ? `${className} ` : '' }flexable-row`;
        const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
            const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
            return React.cloneElement(c, { key: `${key}-cell-${i}`, ..._passthroughProps, ...columnDefinition });
        }));

        return (
            <FlexableElement key={_key}
                         style={style}
                         className={_className}
                         transformChildren={transformChildren}>
                {children.length === 0 && columnDefinitions.map((d,i) => {
                    return (<Cell />)
                })}
            </FlexableElement>
        );
    }
}

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;
