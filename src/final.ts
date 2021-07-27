export function arraysPractice(total: Array<string>) {
  let all = [];
  for (let t of total) {
    all.push(t);
  }

  return all.length;
}


export function calculator(n1: number, n2: number, operation: string) {
  if (operation === '/') {
    return n1 / n2;
  } else if (operation === '*') {
    return n1 * n2;
  } else {
    return 'This operation doesn\'t exist';
  }
}