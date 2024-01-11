# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How can `useEffect` be used to load data for a component?
  `useEffect` is used to synchronize with an external system, and is only used when it is needed.

- What browser function can be used to make HTTP requests to a server in React?
  A fetch() can be used to make HTTP requests to a server in React.

- How do you use `useEffect` to load component data just once when the component mounts?
  To load the component just once when the component mounts, specify an array of dependencies as the second argument to the useEffect call.

- How do you use `useEffect` to load component data every time the data key changes?
  A cleanup function within useEffect will load component data every time the data key changes.

- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  Some better alternatives are React Query and Vercel SWR.

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
