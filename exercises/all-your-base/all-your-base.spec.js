import Converter from './all-your-base';

const converter = new Converter();

describe('Converter', () => {

    it('single bit one to decimal', () => {
        expect(converter.convert([1], 2, 10)).toEqual([1]);
    });

    xit('binary to single decimal', () => {
        expect(converter.convert([1, 0, 1], 2, 10)).toEqual([5]);
    });

    xit('single decimal to binary', () => {
        expect(converter.convert([5], 10, 2)).toEqual([1, 0, 1]);
    });

    xit('binary to multiple decimal', () => {
        expect(converter.convert([1, 0, 1, 0, 1, 0], 2, 10)).toEqual([4, 2]);
    });

    xit('decimal to binary', () => {
        expect(converter.convert([4, 2], 10, 2)).toEqual([1, 0, 1, 0, 1, 0]);
    });

    xit('trinary to hexadecimal', () => {
        expect(converter.convert([1, 1, 2, 0], 3, 16)).toEqual([2, 10]);
    });

    xit('hexadecimal to trinary', () => {
        expect(converter.convert([2, 10], 16, 3)).toEqual([1, 1, 2, 0]);
    });

    xit('15-bit integer', () => {
        expect(converter.convert([3, 46, 60], 97, 73)).toEqual([6, 10, 45]);
    });

    xit('empty list', () => {
        expect(() => {
            converter.convert([], 2, 10);
        }).toThrowError(new Error('Input has wrong format'));
    });

    xit('single zero', () => {
        expect(converter.convert([0], 10, 2)).toEqual([0]);
    });

    xit('multiple zeros', () => {
        expect(() => {
            converter.convert([0, 0, 0], 10, 2);
        }).toThrowError(new Error('Input has wrong format'));
    });

    xit('leading zeros', () => {
        expect(() => {
            converter.convert([0, 6, 0], 7, 10);
        }).toThrowError(new Error('Input has wrong format'));
    });

    xit('negative digit', () => {
        expect(() => {
            converter.convert([1, -1, 1, 0, 1, 0], 2, 10);
        }).toThrowError(new Error('Input has wrong format'));
    });

    xit('invalid positive digit', () => {
        expect(() => {
            converter.convert([1, 2, 1, 0, 1, 0], 2, 10);
        }).toThrowError(new Error('Input has wrong format'));
    });

    xit('first base is one', () => {
        expect(() => {
            converter.convert([], 1, 10);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('second base is one', () => {
        expect(() => {
            converter.convert([1, 0, 1, 0, 1, 0], 2, 1);
        }).toThrowError(new Error('Wrong output base'));
    });

    xit('first base is zero', () => {
        expect(() => {
            converter.convert([], 0, 10);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('second base is zero', () => {
        expect(() => {
            converter.convert([7], 10, 0);
        }).toThrowError(new Error('Wrong output base'));
    });

    xit('first base is negative', () => {
        expect(() => {
            converter.convert([1], -2, 10);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('second base is negative', () => {
        expect(() => {
            converter.convert([1], 2, -7);
        }).toThrowError(new Error('Wrong output base'));
    });

    xit('both bases are negative', () => {
        expect(() => {
            converter.convert([1], -2, -7);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('missing input base throws an error', () => {
        expect(() => {
            converter.convert([0]);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('wrong input_base base not integer', () => {
        expect(() => {
            converter.convert([0], 2.5);
        }).toThrowError(new Error('Wrong input base'));
    });

    xit('missing output base throws an error', () => {
        expect(() => {
            converter.convert([0], 2);
        }).toThrowError(new Error('Wrong output base'));
    });

    xit('wrong output_base base not integer', () => {
        expect(() => {
            converter.convert([0], 3, 2.5);
        }).toThrowError(new Error('Wrong output base'));
    });

});
