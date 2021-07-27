

test('there is no I in team', () => {
  expect('team').toMatch(/m/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});