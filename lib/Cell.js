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

var Cell = function Cell(_ref) {
    var _key = _ref._key;
    var rowData = _ref.rowData;
    var columnDefinition = _ref.columnDefinition;
    var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['_key', 'rowData', 'columnDefinition']);


    if (columnDefinition === null || columnDefinition === undefined) {
        return _react2.default.createElement('div', { className: 'flexable-row-cell' });
    }

    var definition = columnDefinition;
    if (typeof columnDefinition.defineCell === 'function') {
        // callers should be prepared to handle scenario where rowData is undefined
        // by still defining things like static styles and classNames (especially
        // if they affect layout)
        definition = (0, _extends3.default)({}, columnDefinition, columnDefinition.defineCell(rowData));
    }

    var className = (definition.className ? definition.className + ' ' : '') + 'flexable-row-cell';

    var _definition = definition;
    var propertyMap = _definition.propertyMap;


    if (rowData === undefined || propertyMap === undefined) {
        return _react2.default.createElement('div', { style: definition.style, className: className });
    }

    var children = propertyMap(rowData);

    // note order of props is important here (e.g. we want className to over-write
    // className in definition
    return _react2.default.createElement(
        _FlexableElement2.default,
        (0, _extends3.default)({}, remainingProps, {
            _key: _key
        }, definition, {
            className: className }),
        children
    );
};

Cell.propTypes = {
    _key: _react.PropTypes.string,
    rowData: _react.PropTypes.object,
    columnDefinition: _react.PropTypes.object
};

exports.default = Cell;
module.exports = exports['default'];
//# sourceMappingURL=Cell.js.map