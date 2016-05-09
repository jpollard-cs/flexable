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
    var className = _ref.className;
    var style = _ref.style;
    var rowData = _ref.rowData;
    var propertyMap = _ref.propertyMap;
    var remainingProps = (0, _objectWithoutProperties3.default)(_ref, ['_key', 'className', 'style', 'rowData', 'propertyMap']);

    var _className = (className ? className + ' ' : '') + 'flexable-row-cell';
    if (rowData === undefined || propertyMap === undefined) {
        return _react2.default.createElement('div', { style: style, className: _className });
    }

    var cellData = propertyMap(rowData);

    return _react2.default.createElement(_FlexableElement2.default, (0, _extends3.default)({ _key: _key,
        style: style,
        className: _className,
        cellData: cellData,
        text: cellData,
        rowData: rowData
    }, remainingProps));
};

Cell.propTypes = {
    _key: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    rowData: _react.PropTypes.object,
    // propertyMap should be a function that
    // takes the object representing a row
    // and returns the data as you want to
    // represent it as `cellData`
    //
    // If there are no child elements, the
    // Cell will show the result of this function
    // "as is"
    // Otherwise, if the Cell has any child
    // elements, the Cell will pass the 'cellData'
    // to these child elements and leave it up
    // to these elements to represent this data
    // as they see fit
    propertyMap: _react.PropTypes.func
};

exports.default = Cell;
module.exports = exports['default'];
//# sourceMappingURL=Cell.js.map