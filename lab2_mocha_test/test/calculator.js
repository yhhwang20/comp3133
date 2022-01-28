const assert = require('assert');
const { add, sub, mul, div } = require('../app/calculator');

describe('the add function', () => {
    it('add(5, 2) expected result 7 ', () => {
        const result = add(5, 2);
        assert.equal(result, 7);
    })
    it('add(5,2) expected result 8 ', () => {
        const result = add(5, 2);
        assert.equal(result, 8);
    })
})

describe('the sub function', () => {
    it('sub(5, 2) expected result 3', () => {
        const result = sub(5, 2);
        assert.equal(result, 3);
    })
    it('sub(5, 2) expected result 5', () => {
        const result = sub(5, 2);
        assert.equal(result, 5);
    })
})

describe('the mul function', () => {
    it('mul(5, 2) expected result 10', () => {
        const result = mul(5, 2);
        assert.equal(result, 10);
    })
    it('mul(5, 2) expected result 12', () => {
        const result = mul(5, 2);
        assert.equal(result, 12);
    })
})

describe('the div function', () => {
    it('div(10, 2) expected result 5', () => {
        const result = div(10, 2);
        assert.equal(result, 5);
    })
    it('div(10, 2) expected result 2', () => {
        const result = div(10, 2);
        assert.equal(result, 2);
    })
})