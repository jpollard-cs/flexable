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

var ColumnHeader = function ColumnHeader(_ref) {
    var columnHeaderClassName = _ref.columnHeaderClassName;
    var columnHeaderStyle = _ref.columnHeaderStyle;
    var columnHeaderText = _ref.columnHeaderText;
    var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['columnHeaderClassName', 'columnHeaderStyle', 'columnHeaderText']);

    var className = (columnHeaderClassName ? columnHeaderClassName + ' ' : '') + 'column-header flexable-row-cell';
    return _react2.default.createElement(_FlexableElement2.default, (0, _extends3.default)({}, remainingProps, {
        style: columnHeaderStyle,
        className: className,
        text: columnHeaderText }));
};

ColumnHeader.propTypes = {
    columnHeaderClassName: _react.PropTypes.string,
    columnHeaderStyle: _react.PropTypes.object,
    columnHeaderText: _react.PropTypes.string
};

exports.default = ColumnHeader;
module.exports = exports['default'];
//# sourceMappingURL=ColumnHeader.js.map