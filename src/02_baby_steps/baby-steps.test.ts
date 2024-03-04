const { sumArguments } = require('./sumArguments'); 

it('should return the correct sum of numerical arguments', () => {

  const arr = ['node', 'script.js', '2', '4', '6'];

  const result = sumArguments(arr);

  expect(result).toBe(2 + 4 + 6); // Assert that the result is equal to the sum of numerical arguments
});

