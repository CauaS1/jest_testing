import sum from '../sum';
import name from '../name';  

test('adds 1 + 2 to equal 3', () => { 
  expect(sum(1,2)).toBe(3);
});

test('type the owner\'s name', () => {
  expect(name('CauaS1')).toBe('CauaS1');
});