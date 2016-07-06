import React, { Component, PropTypes } from 'react';
import except from 'except';

class FlexableComponent extends Component  {
    render() {
        const { id, className, children, _children, style, transformChildren, text, omitProps, ...remainingProps } = this.props;
        let kids = children ? children : _children;
        let _transformChildren = transformChildren;
        const passthroughProps = except(remainingProps, omitProps);

        if (!_transformChildren) {
            _transformChildren = () => React.Children.map(kids, c => {
                // (trash) => trash;
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
    }
};

FlexableComponent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.any,
    omitProps: PropTypes.array,
    transformChildren: PropTypes.func,
};

FlexableComponent.defaultProps = {
    text: '',
    style: Object.create(null),
    omitProps: [],
    className: '',
};

export default FlexableComponent;
