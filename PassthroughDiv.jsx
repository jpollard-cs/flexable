import React, { Component, PropTypes } from 'react';
import except from 'except';

class PassthroughDiv extends Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { className, children } = this.props;
        const style = this.props.style ? this.props.style : Object.create(null);

        const passthroughProps = except(this.props, ['id', 'key', 'children', 'form', 'className', 'style']);
        const transformedChildren = React.Children.map(children, c => React.cloneElement(c, passthroughProps));

        return (
            <div style={style} className={ `${ className ? `${className} ` : '' }` }>
                { transformedChildren }
            </div>
        );
    }
}

export default PassthroughDiv;
