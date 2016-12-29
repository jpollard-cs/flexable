import React, { Component, PropTypes } from 'react';
import except from 'except';

/**
 *
 * @param id
 * @param className
 * @param children
 * @param _children
 * @param style
 * @param transformChildren
 * @param text
 * @param omitProps
 * @param remainingProps
 * @returns {XML}
 * @constructor
 */
const FlexableElement = ({
    id,
    className,
    children,
    _children, // since React can override provided children props
    style,
    transformChildren,
    text,
    omitProps,
    ...remainingProps
}) => {
    let kids = typeof children !== 'undefined' ? children : _children;
    let _transformChildren = transformChildren;
    const passthroughProps = except(remainingProps, [...omitProps]);

    if (!_transformChildren) {
        _transformChildren = () => React.Children.map(kids, c => {
            // in trash, out trash
            if (!React.isValidElement(c)) {
                return c;
            }
            return React.cloneElement(c, passthroughProps);
        })
    }

    const transformedChildren = _transformChildren(kids, passthroughProps);

    return (
        <div id={id} style={style} className={className}>
            { React.Children.count(kids) > 0 ? transformedChildren : text }
        </div>
    );
};

FlexableElement.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.any,
    omitProps: PropTypes.array,
    transformChildren: PropTypes.func,
};

FlexableElement.defaultProps = {
    text: '',
    style: Object.create(null),
    omitProps: [],
    className: ''
};

export default FlexableElement;
