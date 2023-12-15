# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  Express middleware are functions that have access to the request object, the response object, and the next middleware function in the applications request-response cycle.

- What is Express middleware useful for?
  Express middleware is useful for executing code, making changes to the request and response objects, ending the request-response cycle, and calling the next middleware
  function in the stack.

- How do you mount a middleware with an Express application?
  You mount a middleware with an express application by mounting to a path like /user/:id.

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  It uses next().

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
