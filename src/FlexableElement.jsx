import React, { Component, PropTypes } from 'react';
import except from 'except';

const FlexableElement = ({
    key,
    id,
    className,
    children,
    style,
    transformChildren,
    text,
    ...remainingProps
}) => {
    let _transformChildren = transformChildren;
    const passthroughProps = except(remainingProps, [...omitProps]);

    if (!_transformChildren) {
        if (generateChildKey) {
            _transformChildren = () => React.Children.map(children, (c,i) => React.cloneElement(c, { key: generateChildKey(this.props.key, i), ...passthroughProps }));
        } else {
            _transformChildren = () => React.Children.map(children, c => React.cloneElement(c, passthroughProps))
        }
    }

    const transformedChildren = _transformChildren(children, passthroughProps);

    return (
        <div id={id} key={key} style={style} className={className}>
            { React.Children.count(children) > 0 ? transformedChildren : text }
        </div>
    );
};

FlexableElement.propTypes = {
    key: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.any,
    omitProps: PropTypes.array,
    transformChildren: PropTypes.func,
    generateChildKey: PropTypes.func
};

FlexableElement.defaultProps = {
    text: '',
    style: Object.create(null),
    omitProps: [],
    className: ''
};

export default FlexableElement;
