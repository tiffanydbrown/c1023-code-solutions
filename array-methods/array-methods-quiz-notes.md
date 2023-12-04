# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:

  - What does `Array.forEach` do?
    The method is iterative, and expects the this value to have a length property.

  - What should the callback function do?
    The callback function should execute each element in an array.

  - What is `Array.forEach` useful for?
    The method is useful as a loop in place of a for loop.

- `Array.map`:

  - What does `Array.map` do?
    The method creates a new array populated with the results of calling a provided function on every element in the calling array.

  - What should the callback function return?
    The callback function should execute for each element in an array.

  - What is `Array.map` useful for?
    `Array.map` is useful for creating a new array containing the result of the callback function on the array od the original function, without having to push the data into an empty array.

- `Array.filter`:

  - What does `Array.filter` do?
    The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

  - What should the callback function return?
    It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.

  - What is `Array.filter` useful for?
    It is useful for sorting information in an array according to certain parameters.

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
