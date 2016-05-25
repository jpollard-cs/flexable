import React, { Component, PropTypes } from 'react';
import except from 'except';

import FlexableElement from './FlexableElement';
import DefaultCell from './Cell';

export const RowHOC = (Cell) => ({
    _key,
    className,
    style,
    rowData,
    columnDefinitions,
    children,
    includeVerticalScrollbar,
    ...remainingProps
}) => {
    const _className = `${ className ? `${className} ` : '' }flexable-row`;
    const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
        if (!React.isValidElement(c)) {
           return c;
        }
        const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
        const props = except({..._passthroughProps, ...columnDefinition, rowData }, remainingProps.omitProps || []);
        return React.cloneElement(c, props);
    }));

    if(!children){
        return (
            <FlexableElement {...remainingProps}
                style={style}
                className={_className}
                transformChildren={transformChildren} >
                {columnDefinitions.map((d, i) => {
                    return (<Cell key={`${_key}-cell-${i}`} />)
                })}
                {includeVerticalScrollbar
                    ? <div className="flexable-scroll-cell"></div>
                    : undefined }
            </FlexableElement>
        );
    }

    return (
        <FlexableElement {...remainingProps}
            style={style}
            className={_className}
            transformChildren={transformChildren} >
            {children}
            {includeVerticalScrollbar === true &&
                <div className="flexable-scroll-cell"></div>}
        </FlexableElement>
    );

};

RowHOC.propTypes = {
    _key: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    rowData: PropTypes.object,
    columnDefinitions: PropTypes.array,
    includeVerticalScrollbar: PropTypes.bool
};

RowHOC.defaultProps = {
    includeVerticalScrollbar: true
};

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;