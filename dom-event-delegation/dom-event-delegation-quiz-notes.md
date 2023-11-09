# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The `event.target` is the most deeply nested element that caused the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is possible to listen for events on one element because of bubbling.

- What DOM element property tells you what type of element it is?
  The DOM element that tells you what type of element it is is the `document.getElementById`.

- What does the `element.closest()` method take as its argument and what does it return?
  The `element.closest()` method takes selectors as its argument. It returns the closest ancestor element or itself. If nothing matches the selector, then it will return null.

- How can you remove an element from the DOM?
  You can remove an element from the DOM with the `remove` method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

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
