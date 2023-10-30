const matrix = require('.')

test('Test 1', () => {
  expect(
    matrix([
      [-1, 4, -5, -9, 3],
      [6, -4, -7, 4, -5],
      [3, 5, 4, -9, -1],
      [1, 5, -7, -8, -9],
      [-3, 2, 1, -5, 6],
    ])
  ).toEqual([
    [0, 4, -5, -9, 3],
    [6, 0, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 0, -9],
    [-3, 2, 1, -5, 1],
  ])
})

test('Test 2', () => {
  expect(
    matrix([
      [-1, 4, -5, -9, 3],
      [6, 8, -7, 4, -5],
      [3, 5, 1, -9, -1],
      [1, 5, -7, 15, -9],
      [-3, 2, 1, -5, -6],
    ])
  ).toEqual([
    [0, 4, -5, -9, 3],
    [6, 1, -7, 4, -5],
    [3, 5, 1, -9, -1],
    [1, 5, -7, 1, -9],
    [-3, 2, 1, -5, 0],
  ])
})

test('Test 3', () => {
  expect(
    matrix([
      [1, 1, -5, 5],
      [2, -4, 11, 2],
      [3, 1, -1, 4],
      [2, -6, 8, 10],
    ])
  ).toEqual([
    [1, 1, -5, 5],
    [2, 0, 11, 2],
    [3, 1, 0, 4],
    [2, -6, 8, 1],
  ])
})
