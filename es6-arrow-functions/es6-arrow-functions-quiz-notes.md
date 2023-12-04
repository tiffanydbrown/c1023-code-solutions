# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The syntax of an arrow function is: keyword variable = (parameter(s)) => {function};

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  If you don't use curly braces, the function will still return the result of the function, but if you use curly braces, you need to use the return keyword in order to get the same result.

- When using _concise body syntax_, how do you return an object literal?
  When using _concise body syntax_, you need to wrap the object literal in parentheses.

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    The arrow function is: () => 42.

  - How many arguments does the arrow function take?
    There are no arguments in this arrow function.

  - What value does it return?
    It returns the value of 42.

  - How many arguments are passed to the function `foo`?
    In function `foo` there are no arguments.

  - What type of argument is passed to the function `foo`?

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    The arrow function is: (y) => {console.log(`4y = ${4 * y}`)};

  - How many arguments does the arrow function take?
    The function takes one argument.

  - What value does it return?
    4y = ${4 \* y}

  - How many arguments are passed to the function `bar`?
    The function takes one argument.

  - What type of argument is passed to the function `bar`?
    y

  - When does the arrow function's code get executed?
    The arrow function's code gets executed inside the function since it's logged to the console.

- How does the value of `this` differ between standard functions and arrow functions?
  The value of `this` can only be used with standard functions.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
