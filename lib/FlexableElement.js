'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexableElement = function FlexableElement(_ref) {
    var _key = _ref._key;
    var id = _ref.id;
    var className = _ref.className;
    var children = _ref.children;
    var _children = _ref._children;
    var // since we React can override provided children props
    style = _ref.style;
    var transformChildren = _ref.transformChildren;
    var text = _ref.text;
    var generateChildKey = _ref.generateChildKey;
    var omitProps = _ref.omitProps;
    var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['_key', 'id', 'className', 'children', '_children', 'style', 'transformChildren', 'text', 'generateChildKey', 'omitProps']);

    var kids = children ? children : _children;
    var _transformChildren = transformChildren;
    var passthroughProps = (0, _except2.default)(remainingProps, [].concat((0, _toConsumableArray3.default)(omitProps)));

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
};

FlexableElement.propTypes = {
    _key: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    text: _react.PropTypes.any,
    omitProps: _react.PropTypes.array,
    transformChildren: _react.PropTypes.func,
    generateChildKey: _react.PropTypes.func
};

FlexableElement.defaultProps = {
    text: '',
    style: (0, _create2.default)(null),
    omitProps: [],
    className: ''
};

exports.default = FlexableElement;
module.exports = exports['default'];
//# sourceMappingURL=FlexableElement.js.map