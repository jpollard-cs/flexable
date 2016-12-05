'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToCsvString = convertToCsvString;
exports.defaultFormatRow = defaultFormatRow;
exports.defaultFormatHeaderRow = defaultFormatHeaderRow;
exports.safeConvertToCsvRecord = safeConvertToCsvRecord;

var _stringUtils = require('./stringUtils');

function convertToCsvString(columnDefinitions, data) {
    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
    var formatRows = arguments.length <= 3 || arguments[3] === undefined ? defaultFormatRow : arguments[3];
    var formatHeaderRow = arguments.length <= 4 || arguments[4] === undefined ? defaultFormatHeaderRow : arguments[4];
    var utf8Bom = options.utf8Bom;
    var delimeter = options.delimeter;

    delimeter = delimeter ? delimeter : ',';
    var result = utf8Bom === false ? '' : '﻿';
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
            cellDefinition = d.defineCell(row);
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
    var delimeter = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];

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