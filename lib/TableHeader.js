'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableHeaderHOC = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexableElement = require('./FlexableElement');

var _FlexableElement2 = _interopRequireDefault(_FlexableElement);

var _ColumnHeader = require('./ColumnHeader');

var _ColumnHeader2 = _interopRequireDefault(_ColumnHeader);

var _Row = require('./Row');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeaderHOC = exports.TableHeaderHOC = function TableHeaderHOC(ColumnHeaderRow) {
    return function (_ref) {
        var className = _ref.className;
        var style = _ref.style;
        var tableData = _ref.tableData;
        var columnDefinitions = _ref.columnDefinitions;
        var rowClassName = _ref.rowClassName;
        var rowStyle = _ref.rowStyle;
        var setRef = _ref.setRef;
        var includeVerticalScrollbar = _ref.includeVerticalScrollbar;
        var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'style', 'tableData', 'columnDefinitions', 'rowClassName', 'rowStyle', 'setRef', 'includeVerticalScrollbar']);

        var transformRows = function transformRows(keyPrefix) {
            return function (children, passthroughProps) {
                return _react2.default.Children.map(children, function (c, i) {
                    if (!_react2.default.isValidElement(c)) {
                        return c;
                    }

                    return _react2.default.cloneElement(c, (0, _extends3.default)({
                        _key: keyPrefix + '-' + i,
                        style: rowStyle,
                        className: rowClassName,
                        columnDefinitions: columnDefinitions,
                        rowData: tableData[i],
                        includeVerticalScrollbar: includeVerticalScrollbar
                    }, passthroughProps));
                });
            };
        };

        if (!setRef) {
            return _react2.default.createElement(
                _FlexableElement2.default,
                (0, _extends3.default)({}, remainingProps, {
                    id: 'flexable-table-header',
                    className: className,
                    style: style,
                    transformChildren: transformRows('header-row') }),
                !remainingProps.children && _react2.default.createElement(ColumnHeaderRow, { key: 'header-row' }),
                !!remainingProps.children && remainingProps.children
            );
        }

        return _react2.default.createElement(
            FlexableComponent,
            (0, _extends3.default)({}, remainingProps, {
                id: 'flexable-table-header',
                ref: setRef,
                className: className,
                style: style,
                transformChildren: transformRows('header-row') }),
            !remainingProps.children && _react2.default.createElement(ColumnHeaderRow, { key: 'header-row' }),
            !!remainingProps.children && remainingProps.children
        );
    };
};

TableHeaderHOC.propTypes = {
    className: _react.PropTypes.string,
    rowClassName: _react.PropTypes.string,
    style: _react.PropTypes.object,
    rowStyle: _react.PropTypes.object,
    tableData: _react.PropTypes.object,
    columnDefinitions: _react.PropTypes.array,
    setRef: _react.PropTypes.func,
    includeVerticalScrollbar: _react.PropTypes.bool
};

TableHeaderHOC.defaultProps = {
    includeVerticalScrollbar: true
};

var DefaultColumnHeaderRow = (0, _Row.RowHOC)(_ColumnHeader2.default);
var DefaultTableHeader = TableHeaderHOC(DefaultColumnHeaderRow);

exports.default = DefaultTableHeader;
//# sourceMappingURL=TableHeader.js.map