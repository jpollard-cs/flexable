'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHOC = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableBody = require('./TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableHeader = require('./TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHOC = exports.TableHOC = function TableHOC(TableBody, TableHeader) {
    return function (_ref) {
        var tableData = _ref.tableData;
        var style = _ref.style;
        var className = _ref.className;
        var columnDefinitions = _ref.columnDefinitions;
        var rowStyle = _ref.rowStyle;
        var rowClassName = _ref.rowClassName;
        var tableBodyStyle = _ref.tableBodyStyle;
        var tableBodyClassName = _ref.tableBodyClassName;
        var tableHeaderStyle = _ref.tableHeaderStyle;
        var tableHeaderClassName = _ref.tableHeaderClassName;
        var includeVerticalScrollbar = _ref.includeVerticalScrollbar;
        var setTableBodyRef = _ref.setTableBodyRef;
        var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['tableData', 'style', 'className', 'columnDefinitions', 'rowStyle', 'rowClassName', 'tableBodyStyle', 'tableBodyClassName', 'tableHeaderStyle', 'tableHeaderClassName', 'includeVerticalScrollbar', 'setTableBodyRef']);

        var _className = (className ? className + ' ' : '') + 'table flexable';

        return _react2.default.createElement(
            'div',
            { style: style, className: _className },
            _react2.default.createElement(TableHeader, (0, _extends3.default)({}, remainingProps, {
                style: tableHeaderStyle,
                className: tableHeaderClassName,
                tableData: tableData,
                columnDefinitions: columnDefinitions,
                rowClassName: rowClassName,
                rowStyle: rowStyle,
                includeVerticalScrollbar: includeVerticalScrollbar })),
            _react2.default.createElement(TableBody, (0, _extends3.default)({}, remainingProps, {
                style: tableBodyStyle,
                className: tableBodyClassName,
                tableData: tableData,
                columnDefinitions: columnDefinitions,
                rowClassName: rowClassName,
                rowStyle: rowStyle,
                setRef: setTableBodyRef,
                includeVerticalScrollbar: includeVerticalScrollbar }))
        );
    };
};

TableHOC.propTypes = {
    tableData: _react.PropTypes.array.isRequired,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    columnDefinitions: _react.PropTypes.array.isRequired,
    rowStyle: _react.PropTypes.object,
    rowClassName: _react.PropTypes.string,
    tableBodyStyle: _react.PropTypes.object,
    tableBodyClassName: _react.PropTypes.string,
    tableHeaderStyle: _react.PropTypes.object,
    tableHeaderClassName: _react.PropTypes.string,
    includeVerticalScrollbar: _react.PropTypes.bool,
    setTableBodyRef: _react.PropTypes.func
};

TableHOC.defaultProps = {
    includeVerticalScrollbar: true
};

var DefaultTable = TableHOC(_TableBody2.default, _TableHeader2.default);

exports.default = DefaultTable;
//# sourceMappingURL=Table.js.map