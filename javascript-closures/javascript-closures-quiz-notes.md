# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  Scope is determined immediately in Javascript. Variables outside of a function are in the global execution context, and can be accessed anywhere in the program. However, if a variable is declared within a function, then it can only be accessed within that function because it was declared in the local execution context.

- What allows JavaScript functions to "remember" variables from their surroundings?
  Closure allows JavaScript to "remember" variables from their surroundings.

- What values does a closure contain?
  A closure contains all the variables that are in scope at the time of creation of the function.

- When is a closure created?
  A closure is created whenever you declare a new function and assign it to a variable.

- How can you tell if a function will be created with a closure?
  You can tell if a function will be created with a closure, because the function will have access to variables that were created outside its scope.

- In React, what is one important case where you need to know if a closure was created?
  One important case is when you are using async functions, because it's easy to end up with bugs in your code.

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
