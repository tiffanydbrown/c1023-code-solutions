/* exported omit */
function omit(source, keys) {
  const result = {};

  for (const key in source) {
    let shouldInclude = true;
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        shouldInclude = false;
        break;
      }
    }
    if (shouldInclude) {
      result[key] = source[key];
    }
  }
  return result;
}
console.log(omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
console.log(omit({ qux: 4, corge: 5 }, ['bar', 'grault']));
console.log(omit({}, ['foo', 'bar', 'baz']));
