/* exported pick */
function pick(source, keys) {
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
console.log(pick({ qux: 4, corge: 5 }, ['bar', 'grault']));
console.log(pick({ bar: 2 }, ['foo', 'bar', 'baz']));
