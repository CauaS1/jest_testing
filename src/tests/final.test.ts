import { arraysPractice, calculator } from "../final";

export const n1 = 5;
export const n2 = 10;

test('Create an loop to add four or more values in the array', () => {
  expect(arraysPractice(['eae', 'blz', 'fazendo', 'algo', '?'])).toBeGreaterThanOrEqual(4);
});

test('Only division & multiplication calculator ', () => {
  expect(calculator(n1, n2, '/')).toBe(n1 / n2);
  expect(calculator(n1, n2, '*')).toBe(n1 * n2);
})