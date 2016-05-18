'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FlexableComponent).apply(this, arguments));
    }

    (0, _createClass3.default)(FlexableComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var _key = _props._key;
            var id = _props.id;
            var className = _props.className;
            var children = _props.children;
            var _children = _props._children;
            var style = _props.style;
            var transformChildren = _props.transformChildren;
            var text = _props.text;
            var generateChildKey = _props.generateChildKey;
            var omitProps = _props.omitProps;
            var remainingProps = (0, _objectWithoutProperties3.default)(_props, ['_key', 'id', 'className', 'children', '_children', 'style', 'transformChildren', 'text', 'generateChildKey', 'omitProps']);

            var kids = children ? children : _children;
            var _transformChildren = transformChildren;
            var passthroughProps = (0, _except2.default)(remainingProps, omitProps);

            if (!_transformChildren) {
                if (generateChildKey) {
                    _transformChildren = function _transformChildren() {
                        return _react2.default.Children.map(kids, function (c, i) {
                            return _react2.default.cloneElement(c, (0, _extends3.default)({ key: generateChildKey(_key, i) }, passthroughProps));
                        });
                    };
                } else {
                    _transformChildren = function _transformChildren() {
                        return _react2.default.Children.map(kids, function (c) {
                            return _react2.default.cloneElement(c, passthroughProps);
                        });
                    };
                }
            }

            var transformedChildren = _transformChildren(kids, passthroughProps);

            return _react2.default.createElement(
                'div',
                { id: id, key: _key, style: style, className: className },
                _react2.default.Children.count(kids) > 0 ? transformedChildren : text
            );
        }
    }]);
    return FlexableComponent;
}(_react.Component);

;

FlexableComponent.propTypes = {
    _key: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    text: _react.PropTypes.any,
    omitProps: _react.PropTypes.array,
    transformChildren: _react.PropTypes.func,
    generateChildKey: _react.PropTypes.func
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