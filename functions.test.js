const functions = require('./functions.js')

const { return2, greeting, add } = functions

test('make sure return2 returns 2', () => {
    expect(return2()).toBe(2)
})

describe('greeting tests', () => {
    test('greet James', () => {
        expect(greeting('James')).toBe('Hello, James')
    })

    test('Greet Jill', () => {
        expect(greeting('Jill')).toBe('Hello, Jill')
    })
})

describe('add tests', () => {
    test('add 3 to 4', () => {
        expect(add(3, 4)).toBe(7)
    })

    test('add 9 to 10', () => {
        expect(add(9, 10)).toBe(19)
    })
})