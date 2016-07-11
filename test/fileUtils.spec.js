import {expect} from 'chai';
import {getEncodedDataUri} from '../src/utilities/fileUtils';

describe('fileUtils', () => {

    describe('getEncodedDataUri', () => {
        it('returns expected result', () => {
            expect(getEncodedDataUri('text/csv','utf-8','Name,X Dollars ($),Y Units\r\ntest 1,$24.00,12\r\ntest 2,$28.00,14'))
                .to.equal('data:text/csv;charset=utf-8,Name%2CX%20Dollars%20(%24)%2CY%20Units%0D%0Atest%201%2C%2424.00%2C12%0D%0Atest%202%2C%2428.00%2C14');
        });
    });
});