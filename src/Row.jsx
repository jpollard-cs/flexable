import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultCell from './Cell.jsx';

export const RowHOC = (Cell) => ({
    _key,
    className,
    style,
    rowData,
    columnDefinitions,
    children,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }flexable-row`;
    const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
        const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
        return React.cloneElement(c, { key: `${_key}-cell-${i}`, ..._passthroughProps, ...columnDefinition, rowData });
    }));

    return (
        <FlexableElement _key={_key}
                     style={style}
                     className={_className}
                     transformChildren={transformChildren}
                     {...remainingProps}>
            {!children && columnDefinitions.map(() => {
                return (<Cell />)
            })}
        </FlexableElement>
    );
}

RowHOC.propTypes = {
    _key: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    rowData: PropTypes.object,
    columnDefinitions: PropTypes.array
};

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;

/*import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultCell from './Cell.jsx';

export const RowHOC = (Cell) => class Row extends Component {

    static propTypes = {
        key: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
        rowData: PropTypes.object,
        columnDefinitions: PropTypes.array
    };

    render() {
        const _className = `${ className ? `${className} ` : '' }flexable-row`;
        const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
            const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
            return React.cloneElement(c, { key: `${_key}-cell-${i}`, ..._passthroughProps, ...columnDefinition, rowData });
        }));

        return (
            <FlexableElement key={_key}
                style={style}
                className={_className}
                transformChildren={transformChildren}
                {...remainingProps}>
                {children.length === 0 && columnDefinitions.map(() => {
                    return (<Cell />)
                })}
            </FlexableElement>
        );
    }
}

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;*/
