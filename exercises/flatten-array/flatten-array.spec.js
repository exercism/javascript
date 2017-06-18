import flattenArray from './flatten-array.js';

describe('flattenArray', () => {

    it("handles no nesting", () => {
        const result = flattenArray([0,1,2]);
        expect(result).toEqual([0,1,2]);
    });

    xit("flattens array with just integers present", () => {
        const result = flattenArray([1, [2, 3, 4, 5, 6, 7], 8]);
        expect(result).toEqual([1,2,3,4,5,6,7,8]);
    });

    xit("5 level nesting", () => {
        const result = flattenArray([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]);
        expect(result).toEqual([0,2,2,3,8,100,4,50,-2]);
    });

    xit("6 level nesting", () => {
        const result = flattenArray([1, [2, [[3]], [4, [[5]]], 6, 7], 8]);
        expect(result).toEqual([1,2,3,4,5,6,7,8]);
    });

    xit("6 level nest list with null values", () => {
        const result = flattenArray([0, 2, [[2, 3], 8, [[100]], null, [[null]]], -2]);
        expect(result).toEqual([0,2,2,3,8,100,-2]);
    });

    xit("all values in nested list are null", () => {
        const result = flattenArray([null, [[[null]]], null, null, [[null, null], null], null]);
        expect(result).toEqual([]);
    });

});
