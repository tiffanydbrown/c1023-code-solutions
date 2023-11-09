# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No, you need to set `appendChild` to that element in order to insert it into the page.

- How do you add an element as a child to another element?
  You use `appendChild()` to set an element as a child to another element.

- What do you pass as the arguments to the `element.setAttribute()` method?
  You pass the attributes of the name and the value to the `element.setAttribute()` method.

- What steps do you need to take in order to insert a new element into the page?
  To set a new element into a page you need to use `document.createElement(tag)`, then you need to append the new element to another element.

- What is the `textContent` property of an element object for?
  The `textContent` property of an element object is t set the text for an element in the DOM tree.

- Name two ways to set the `class` attribute of a DOM element.
  One way is to use `setAttribute()`, and another way is to use the `className` property or `classList` property.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  One advantage is to make the code reusable, and easier to maintain.

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
