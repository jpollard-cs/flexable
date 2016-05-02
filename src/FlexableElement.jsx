import React, { Component, PropTypes } from 'react';
import except from 'except';

class FlexableElement extends Component {
    static propTypes = {
        key: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.any,
        omitProps: PropTypes.array,
        transformChildren: PropTypes.func,
        generateChildKey: PropTypes.func
    }

    render() {
        const { className, children, style, text, generateChildKey, omitProps } = this.props;
        let transformChildren = this.props.transformChildren;
        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'style', 'className', 'transformChildren', 'text', ...omitProps]);

        if (!transformChildren) {
            if (generateChildKey) {
                transformChildren = () => React.Children.map(children, (c,i) => React.cloneElement(c, {key: generateChildKey(this.props.key, i), ...passthroughProps}));
            } else {
                transformChildren = () => React.Children.map(children, c => React.cloneElement(c, passthroughProps))
            }
        }

        const transformedChildren = transformChildren(children, passthroughProps);

        return (
            <div key={key} style={style} className={ className }>
                { React.Children.count(children) > 0 ? transformedChildren : text }
            </div>
        );
    }
}

FlexableElement.defaultProps = {
    text: '',
    style: Object.create(null),
    omitProps: [],
    className: ''
}

export default FlexableElement;
