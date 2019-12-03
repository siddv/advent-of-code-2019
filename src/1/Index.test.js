import calculateTotalFuel, { calculateFuelForModule, stringToArrayOfNumbers } from './'

[
  {input: 12, expected: 2},
  {input: 14, expected: 2},
  {input: 1969, expected: 654},
  {input: 100756, expected: 33583}
].map(({ input, expected }) => {
  test(`calculateFuelForModule should return ${expected} when provided ${input}`, () => {
    expect(calculateFuelForModule(input)).toEqual(expected)
  })
})

test('stringToArrayOfNumbers should return an array of numbers, given a newline seperated string', () => {
  expect(stringToArrayOfNumbers(`5
  10
  50`)).toEqual([5, 10, 50])
})

test('calculateTotalFuel should return the correct fuel, given a collection of known modules', () => {
  expect(calculateTotalFuel([100,200,300,400])).toEqual(324)
})