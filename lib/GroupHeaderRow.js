'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexableElement = require('./FlexableElement');

var _FlexableElement2 = _interopRequireDefault(_FlexableElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupHeaderRow = function GroupHeaderRow(_ref) {
    var _key = _ref._key;
    var style = _ref.style;
    var className = _ref.className;
    var text = _ref.text;
    var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['_key', 'style', 'className', 'text']);

    var _className = (className ? className + ' ' : '') + 'group-header-row flexable-row';
    var generateChildKey = function generateChildKey(k, i) {
        return 'group-header-cell-' + k + '-' + i;
    };

    return _react2.default.createElement(_FlexableElement2.default, (0, _extends3.default)({}, remainingProps, {
        style: style,
        _key: _key,
        className: _className,
        generateChildKey: generateChildKey,
        text: text }));
};

GroupHeaderRow.propTypes = {
    _key: _react.PropTypes.string.isRequired,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    text: _react.PropTypes.string
};

exports.default = GroupHeaderRow;
module.exports = exports['default'];
//# sourceMappingURL=GroupHeaderRow.js.map