const isTriangle = require('.')

test('Test 1', () => {
  expect(isTriangle(1, 2, 2)).toBeTrue()
})

test('Test 2', () => {
  expect(isTriangle(7, 2, 2)).toBeFalse()
})
