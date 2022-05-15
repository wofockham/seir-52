const { expect } = require('chai');
const RomanNumerals = require('../RomanNumerals');

describe('Roman Numerals', () => {
    it('should convert a roman numeral to its integer equivalent', () => {
        const input1 = 'XXVII';
        const result1 = RomanNumerals.hinduArabic(input1);
        expect(result1).to.equal(17);

        const input2 = 'DL';
        const result2 = RomanNumerals.hinduArabic(input2);
        expect(result2).to.equal(550);
    });
});
