import { stringContainsAny } from './stringUtils';

export function convertToCsvString(columnDefinitions, data, options = {}, formatRows = defaultFormatRow, formatHeaderRow = defaultFormatHeaderRow) {
    let { utf8Bom, delimeter } = options;
    delimeter = delimeter ? delimeter : ',';
    let result = utf8Bom === false  ? '': '\ufeff';
    const header = `${formatHeaderRow(columnDefinitions, delimeter)}\r\n`;
    const rows = data.map(r => formatRows(r, columnDefinitions, delimeter)).join('\r\n');
    result = `${result}${header}${rows}`;
    return result;
}

export function defaultFormatRow(row, columnDefinitions, delimeter) {
    return columnDefinitions
        .map(d => {
            let cellDefinition = d;
            if (typeof d.defineCell === 'function') {
                cellDefinition = { ...d, ...d.defineCell(row) };
            }
            return safeConvertToCsvRecord(cellDefinition.propertyMap(row), delimeter)
        })
        .join(delimeter);
}

export function defaultFormatHeaderRow(columnDefinitions, delimeter) {
    return columnDefinitions
        .map(d => safeConvertToCsvRecord(d.columnHeaderText, delimeter))
        .join(delimeter);
}

// according to https://tools.ietf.org/html/rfc4180
export function safeConvertToCsvRecord(record, delimeter = ',') {
    let result = record;
    const quote = '"';
    const escapedQuote = '""';
    const charsToEscape = [delimeter, quote, '\n', '\r\n'];
    result = String(result).replace(new RegExp(`${quote}`, 'g'), escapedQuote);

    if (stringContainsAny(result, charsToEscape)) {
        result = `${quote}${result}${quote}`;
    }

    return result;
}
