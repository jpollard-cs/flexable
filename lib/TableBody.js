'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TableBodyHOC = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlexableElement = require('./FlexableElement');

var _FlexableElement2 = _interopRequireDefault(_FlexableElement);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBodyHOC = exports.TableBodyHOC = function TableBodyHOC(Row) {
    return function (_ref) {
        var className = _ref.className;
        var style = _ref.style;
        var tableData = _ref.tableData;
        var columnDefinitions = _ref.columnDefinitions;
        var rowClassName = _ref.rowClassName;
        var rowStyle = _ref.rowStyle;
        var includeVerticalScrollbar = _ref.includeVerticalScrollbar;
        var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'style', 'tableData', 'columnDefinitions', 'rowClassName', 'rowStyle', 'includeVerticalScrollbar']);

        var _className = '' + (includeVerticalScrollbar ? 'flexable-vertical-scroll-overlay' : '') + (className ? ' ' + className : '');
        var transformRows = function transformRows(keyPrefix) {
            return function (children, passthroughProps) {
                return _react2.default.Children.map(children, function (c, i) {
                    return _react2.default.cloneElement(c, (0, _extends3.default)({
                        key: keyPrefix + '-' + i,
                        style: rowStyle,
                        className: rowClassName,
                        columnDefinitions: columnDefinitions,
                        rowData: tableData[i],
                        includeVerticalScrollbar: includeVerticalScrollbar
                    }, passthroughProps));
                });
            };
        };

        return _react2.default.createElement(
            _FlexableElement2.default,
            (0, _extends3.default)({}, remainingProps, {
                id: 'flexable-table-body',
                className: _className,
                style: style,
                transformChildren: transformRows('row') }),
            !remainingProps.children && tableData.map(function () {
                return _react2.default.createElement(Row, null);
            })
        );
    };
};

TableBodyHOC.propTypes = {
    className: _react.PropTypes.string,
    rowClassName: _react.PropTypes.string,
    style: _react.PropTypes.object,
    rowStyle: _react.PropTypes.object,
    tableData: _react.PropTypes.object,
    columnDefinitions: _react.PropTypes.array,
    includeVerticalScrollbar: _react.PropTypes.bool
};

TableBodyHOC.defaultProps = {
    includeVerticalScrollbar: true
};

var DefaultTableBody = TableBodyHOC(_Row2.default);

exports.default = DefaultTableBody;
//# sourceMappingURL=TableBody.js.map