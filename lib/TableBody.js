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

var _FlexableComponent = require('./FlexableComponent');

var _FlexableComponent2 = _interopRequireDefault(_FlexableComponent);

var _FlexableElement = require('./FlexableElement');

var _FlexableElement2 = _interopRequireDefault(_FlexableElement);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBodyHOC = function TableBodyHOC(Row) {
    return function (_ref) {
        var className = _ref.className,
            style = _ref.style,
            tableData = _ref.tableData,
            columnDefinitions = _ref.columnDefinitions,
            rowClassName = _ref.rowClassName,
            rowStyle = _ref.rowStyle,
            includeVerticalScrollbar = _ref.includeVerticalScrollbar,
            setRef = _ref.setRef,
            remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'style', 'tableData', 'columnDefinitions', 'rowClassName', 'rowStyle', 'includeVerticalScrollbar', 'setRef']);

        var _className = '' + (includeVerticalScrollbar ? 'flexable-vertical-scroll-overlay' : '') + (className ? ' ' + className : '');
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
                    id: 'flexable-table-body',
                    className: _className,
                    style: style,
                    transformChildren: transformRows('row') }),
                !remainingProps.children && tableData.map(function (d, i) {
                    return _react2.default.createElement(Row, { key: 'row-' + i });
                }),
                !!remainingProps.children && remainingProps.children
            );
        }

        return _react2.default.createElement(
            _FlexableComponent2.default,
            (0, _extends3.default)({}, remainingProps, {
                id: 'flexable-table-body',
                ref: setRef,
                className: _className,
                style: style,
                transformChildren: transformRows('row') }),
            !remainingProps.children && tableData.map(function (d, i) {
                return _react2.default.createElement(Row, { key: 'row-' + i });
            }),
            !!remainingProps.children && remainingProps.children
        );
    };
};

exports.TableBodyHOC = TableBodyHOC;
TableBodyHOC.propTypes = {
    className: _react.PropTypes.string,
    rowClassName: _react.PropTypes.string,
    style: _react.PropTypes.object,
    rowStyle: _react.PropTypes.object,
    tableData: _react.PropTypes.object,
    columnDefinitions: _react.PropTypes.array,
    includeVerticalScrollbar: _react.PropTypes.bool,
    setRef: _react.PropTypes.func
};

TableBodyHOC.defaultProps = {
    includeVerticalScrollbar: true
};

var DefaultTableBody = TableBodyHOC(_Row2.default);

exports.default = DefaultTableBody;
//# sourceMappingURL=TableBody.js.map