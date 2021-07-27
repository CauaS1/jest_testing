test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('using floating number', () => {
  const value = 0.2 + 0.1;
  
  // expect(value).toBe(0.3); // This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works
});