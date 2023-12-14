# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The `async` keyword is used in front of a function to make the function asynchronous. The `await` keyword is used inside an async function that returns a promise. This makes the
  code wait until the promise is settled.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  `async` is used for asynchronous functions, and `await` is used to return a promise inside the async function. `Promise.then` is used inside an asynchronous
  function to settle a promise, while `Promise.catch` is used inside an async function to settle an error in a promise.

- When do you use `async`?
  You use `async` to turn a function into an asynchronous function.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use `await` inside an async function to wait for a Promise and get its fulfillment value. If you use it in a sync function it will block the main thread of the function.

- How do you handle errors with `await`?
  You handle errors by chaining a catch() handler before awaiting the promise.

- What do `try`, `catch` and `throw` do? When do you use them?
  `throw` throws a user-defined exception. You use them to throe errors.
  `try` is usually paired with `catch` and is executed before the `catch`. The `try` is the code to be executed, while the `catch` is used if an exception is thrown in the `try` block.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you forget to use `await` on a Promise it will be returned. The Promise rejection won't get handled, and you'll receive an unhandled promise rejection error.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer callbacks, because I have a lot more experience with them.

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
