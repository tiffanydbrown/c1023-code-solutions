# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The `&&` operator is used to compare things, and both must be true for the code afterwards to have an effect. The `||` operator is used to comp[are two things, and only one of them has to be true in order for the code following to be implemented.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  A "short-circuit evaluation" is what happens when the `&&` or `||` operators are used and determine to be falsy. The function will short-circuit and go on to the next step.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It differs from `||`, because the logical OR operator returns the right-hand side operand if the left-hand is falsy.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The `?:` operator is used to make an `if/else` statement only using one line of code. It differs in that it doesn't use {}.

- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. You would use it to make shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The `...` is used in a parameter to indicate that you are using zero or more arguments (...args), or jumping from one parameter to the end of many parameters. (num1, num2, ...numN). It is
  used with objects and arrays to denote many/multiple too many to count. On the other hand, spreading in object literals enumerates the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

- What data types can be spread into an array? Into an object?
  Only iterable values, like Array and String, can be spread in array literals and argument lists. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method.

- How does spread syntax differ from rest syntax?
  The Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. spread syntax is used in parameters, while the rest is used in arguments.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
