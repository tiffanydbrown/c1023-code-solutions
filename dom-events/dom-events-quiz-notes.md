# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We log things to the console so we can see what our code does.

- What is the purpose of events and event handling?
  The purpose of events is to send a signal of an action to be taken. Event handling is a block of code that runs when an event fires.

- Are all possible parameters required to use a JavaScript method or function?
  No, parameters aren't required to use a JS method or function.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The method is the `.querySelector`.

- What is a callback function?
  A callback function is a function that is called within another function.

- What object is passed into an event listener callback when the event fires?
  The object that is passed into an event listener callback is the action you want to occur.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The `event.target` is the target property of the event object, which is a reference to the element the event occurred upon.

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The difference is that the first JS code causes the element to be clicked when a callback function is being called. In the second piece of code, the click will occur when a function is called.

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
