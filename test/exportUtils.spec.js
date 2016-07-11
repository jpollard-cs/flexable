import {expect} from 'chai';
import {safeConvertToCsvRecord, defaultFormatHeaderRow, defaultFormatRow, convertToCsvString} from '../src/utilities/exportUtils';

const data = [{ x: 24, y: 12, name: 'test 1' }, { x: 28, y: 14, name: 'test 2' }];
const columnDefinitions = [{
    columnHeaderText: 'Name',
    propertyMap: (row) => row.name
}, {
    columnHeaderText: 'X Dollars ($)',
    propertyMap: (row) => `$${row.x}.00`
}, {
    columnHeaderText: 'Y Units',
    propertyMap: (row) => row.y
}];

describe('exportUtils', () => {

    describe('safeConvertToCsvRecord', () => {

        it('escapes expected characters', () => {
            expect(safeConvertToCsvRecord('a sophisticated heat beam which we call "a laser"'))
                .to.equal('"a sophisticated heat beam which we call ""a laser"""');
            expect(safeConvertToCsvRecord('a , test')).to.equal('"a , test"');
            expect(safeConvertToCsvRecord('a \r\n test')).to.equal('"a \r\n test"');
            expect(safeConvertToCsvRecord('a \n test')).to.equal('"a \n test"');
            expect(safeConvertToCsvRecord('tab    test', '    ')).to.equal('"tab    test"');
        });

        it('does not escape alphanumeric characters', () => {
           expect(safeConvertToCsvRecord('abcdefghijklmnopqrstuvwxyz0123456789')).to.equal('abcdefghijklmnopqrstuvwxyz0123456789');
        });

        it('returns a string when given a number', () => {
            expect(safeConvertToCsvRecord(0)).to.equal('0');
        });
    });

    describe('defaultFormatHeaderRow', () => {
      it('returns expected result', () => {
          expect(defaultFormatHeaderRow(columnDefinitions)).to.equal('Name,X Dollars ($),Y Units');
      });
    });
    
    describe('defaultFormatRow', () => {
        it('returns expected result', () => {
            expect(defaultFormatRow(data[0], columnDefinitions)).to.equal('test 1,$24.00,12');
        });
    });

    describe('convertToCsvString', () => {
        it('returns expected result when utf8Bom option is true', () => {
            expect(convertToCsvString(columnDefinitions, columnDefinitions, data, { utf8Bom: true }))
                .to.equal('\ufeffName,X Dollars ($),Y Units\r\ntest 1,$24.00,12\r\ntest 2,$28.00,14');
        });

        it('returns expected result when utf8Bom option is false', () => {
            expect(convertToCsvString(columnDefinitions, columnDefinitions, data, { utf8Bom: false }))
                .to.equal('Name,X Dollars ($),Y Units\r\ntest 1,$24.00,12\r\ntest 2,$28.00,14');
        });

        it('returns expected result when delimeter option is tab', () => {
            expect(convertToCsvString(columnDefinitions, columnDefinitions, data, { utf8Bom: true, delimeter: '    ' }))
                .to.equal('\ufeffName    X Dollars ($)    Y Units\r\ntest 1    $24.00    12\r\ntest 2    $28.00    14');
        });
    });

});