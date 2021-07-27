test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 })
});

test('count letters', () => {
  const letter = 'pineapple';
  var w = [];
  for(let l of letter) {
    w.push(l)
  }

  expect(w.length).toEqual(letter.length);
});