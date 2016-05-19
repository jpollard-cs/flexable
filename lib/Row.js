'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RowHOC = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _except = require('except');

var _except2 = _interopRequireDefault(_except);

var _FlexableElement = require('./FlexableElement');

var _FlexableElement2 = _interopRequireDefault(_FlexableElement);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowHOC = exports.RowHOC = function RowHOC(Cell) {
    return function (_ref) {
        var _key = _ref._key;
        var className = _ref.className;
        var style = _ref.style;
        var rowData = _ref.rowData;
        var columnDefinitions = _ref.columnDefinitions;
        var children = _ref.children;
        var includeVerticalScrollbar = _ref.includeVerticalScrollbar;
        var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['_key', 'className', 'style', 'rowData', 'columnDefinitions', 'children', 'includeVerticalScrollbar']);

        var _className = (className ? className + ' ' : '') + 'flexable-row';
        var transformChildren = function transformChildren(_children, _passthroughProps) {
            return _react2.default.Children.map(_children, function (c, i) {
                var columnDefinition = columnDefinitions ? columnDefinitions[i] : (0, _create2.default)(null);
                var props = (0, _except2.default)((0, _extends3.default)({}, _passthroughProps, columnDefinition, { rowData: rowData }), remainingProps.omitProps || []);
                return _react2.default.cloneElement(c, (0, _extends3.default)({ key: _key + '-cell-' + i }, props));
            });
        };

        if (!children) {
            return _react2.default.createElement(
                _FlexableElement2.default,
                (0, _extends3.default)({}, remainingProps, {
                    _key: _key,
                    style: style,
                    className: _className,
                    transformChildren: transformChildren }),
                !children && columnDefinitions.map(function () {
                    return _react2.default.createElement(Cell, null);
                }),
                includeVerticalScrollbar && _react2.default.createElement('div', { className: 'flexable-scroll-cell' })
            );
        }

        return _react2.default.createElement(
            _FlexableElement2.default,
            (0, _extends3.default)({}, remainingProps, {
                _key: _key,
                style: style,
                className: _className,
                transformChildren: transformChildren }),
            includeVerticalScrollbar && children,
            includeVerticalScrollbar && _react2.default.createElement('div', { className: 'flexable-scroll-cell' })
        );
    };
};

RowHOC.propTypes = {
    _key: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    rowData: _react.PropTypes.object,
    columnDefinitions: _react.PropTypes.array,
    includeVerticalScrollbar: _react.PropTypes.bool
};

RowHOC.defaultProps = {
    includeVerticalScrollbar: true
};

var DefaultRow = RowHOC(_Cell2.default);

exports.default = DefaultRow;

/*import React, { Component, PropTypes } from 'react';

import FlexableElement from './FlexableElement.jsx';
import DefaultCell from './Cell.jsx';

export const RowHOC = (Cell) => class Row extends Component {

    static propTypes = {
        key: PropTypes.string.isRequired,
        className: PropTypes.string,
        style: PropTypes.object,
        rowData: PropTypes.object,
        columnDefinitions: PropTypes.array
    };

    render() {
        const _className = `${ className ? `${className} ` : '' }flexable-row`;
        const transformChildren = (_children, _passthroughProps) => (React.Children.map(_children, (c, i) => {
            const columnDefinition = columnDefinitions ? columnDefinitions[i] : Object.create(null);
            return React.cloneElement(c, { key: `${_key}-cell-${i}`, ..._passthroughProps, ...columnDefinition, rowData });
        }));

        return (
            <FlexableElement key={_key}
                style={style}
                className={_className}
                transformChildren={transformChildren}
                {...remainingProps}>
                {children.length === 0 && columnDefinitions.map(() => {
                    return (<Cell />)
                })}
            </FlexableElement>
        );
    }
}

const DefaultRow = RowHOC(DefaultCell);

export default DefaultRow;*/
//# sourceMappingURL=Row.js.map