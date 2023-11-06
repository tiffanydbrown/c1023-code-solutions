# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

- What is a "model"?
  A "model" represents all page content as objects that can be modified.

- Which "document" is being referred to in the phrase Document Object Model?
  The document is the main "entry point" to the page.

- What is the word "object" referring to in the phrase Document Object Model?
  The word "object" refers to the fact that the page content are considered to be objects which are accessible using JavaScript, and can be used to modify the page.

- What is a DOM Tree?
  A DOM tree represents HTML as a tree structure of tags.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  A 'document' method is 'id', which allows you to use the `.getElementById()` method.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  One example of a `document` method that retrieves multiple elements from the DOM at once is the `.querySelectorAll()` method.

- Why might you want to assign the return value of a DOM query to a variable?
  You might assign the return value of a DOM query to a variable so that you can use it later in your code.

- What `console` method allows you to inspect the properties of a DOM element object?
  You can use the `getElementsBy*` method.

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  A `<script>` tag needs to be placed at the bottom of the HTML content, because it allows the browser to load faster.

- What does `document.querySelector()` take as its argument and what does it return?
  The argument `document.querySelector()` takes is css, and it returns the first element for the given CSS selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  CSS is the argument that `document.querySelectorAll()` takes and it returns all elements inside the elem matching the given CSS selector.

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
