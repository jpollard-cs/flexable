'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.convertToCsvString = convertToCsvString;
exports.defaultFormatRow = defaultFormatRow;
exports.defaultFormatHeaderRow = defaultFormatHeaderRow;
exports.safeConvertToCsvRecord = safeConvertToCsvRecord;

var _stringUtils = require('./stringUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertToCsvString(columnDefinitions, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var formatRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultFormatRow;
    var formatHeaderRow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultFormatHeaderRow;
    var utf8Bom = options.utf8Bom,
        delimeter = options.delimeter;

    delimeter = delimeter ? delimeter : ',';
    var result = utf8Bom === false ? '' : '\uFEFF';
    var header = formatHeaderRow(columnDefinitions, delimeter) + '\r\n';
    var rows = data.map(function (r) {
        return formatRows(r, columnDefinitions, delimeter);
    }).join('\r\n');
    result = '' + result + header + rows;
    return result;
}

function defaultFormatRow(row, columnDefinitions, delimeter) {
    return columnDefinitions.map(function (d) {
        var cellDefinition = d;
        if (typeof d.defineCell === 'function') {
            cellDefinition = (0, _extends3.default)({}, d, d.defineCell(row));
        }
        return safeConvertToCsvRecord(cellDefinition.propertyMap(row), delimeter);
    }).join(delimeter);
}

function defaultFormatHeaderRow(columnDefinitions, delimeter) {
    return columnDefinitions.map(function (d) {
        return safeConvertToCsvRecord(d.columnHeaderText, delimeter);
    }).join(delimeter);
}

// according to https://tools.ietf.org/html/rfc4180
function safeConvertToCsvRecord(record) {
    var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

    var result = record;
    var quote = '"';
    var escapedQuote = '""';
    var charsToEscape = [delimeter, quote, '\n', '\r\n'];
    result = String(result).replace(new RegExp('' + quote, 'g'), escapedQuote);

    if ((0, _stringUtils.stringContainsAny)(result, charsToEscape)) {
        result = '' + quote + result + quote;
    }

    return result;
}
//# sourceMappingURL=exportUtils.js.map