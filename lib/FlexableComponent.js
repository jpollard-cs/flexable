'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexableComponent = function (_Component) {
    (0, _inherits3.default)(FlexableComponent, _Component);

    function FlexableComponent() {
        (0, _classCallCheck3.default)(this, FlexableComponent);
        return (0, _possibleConstructorReturn3.default)(this, (FlexableComponent.__proto__ || (0, _getPrototypeOf2.default)(FlexableComponent)).apply(this, arguments));
    }

    (0, _createClass3.default)(FlexableComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                className = _props.className,
                children = _props.children,
                _children = _props._children,
                style = _props.style,
                transformChildren = _props.transformChildren,
                text = _props.text,
                omitProps = _props.omitProps,
                remainingProps = (0, _objectWithoutProperties3.default)(_props, ['id', 'className', 'children', '_children', 'style', 'transformChildren', 'text', 'omitProps']);

            var kids = children ? children : _children;
            var _transformChildren = transformChildren;
            var passthroughProps = (0, _except2.default)(remainingProps, omitProps);

            if (!_transformChildren) {
                _transformChildren = function _transformChildren() {
                    return _react2.default.Children.map(kids, function (c) {
                        // (trash) => trash;
                        if (!_react2.default.isValidElement(c)) {
                            return c;
                        }
                        return _react2.default.cloneElement(c, passthroughProps);
                    });
                };
            }

            var transformedChildren = _transformChildren(kids, passthroughProps);

            return _react2.default.createElement(
                'div',
                { id: id, style: style, className: className },
                _react2.default.Children.count(kids) > 0 ? transformedChildren : text
            );
        }
    }]);
    return FlexableComponent;
}(_react.Component);

;

FlexableComponent.propTypes = {
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    text: _react.PropTypes.any,
    omitProps: _react.PropTypes.array,
    transformChildren: _react.PropTypes.func
};

FlexableComponent.defaultProps = {
    text: '',
    style: (0, _create2.default)(null),
    omitProps: [],
    className: ''
};

exports.default = FlexableComponent;
module.exports = exports['default'];
//# sourceMappingURL=FlexableComponent.js.map