# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.

- What values can be stored in context?
  You can store any kind of value, even an object.

- How do you create context and make it available to the components?
  You export it from a file to make it available to the components. To create context you name a variable and assign to it createContext().

- How do you access the context values?
  To access the values you import the useContext hook from React and your context.

- When would you use context? (in addition to the best answer: "rarely")
  You can use context when you want to level your headings, the color theme, the logged user, etc.

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
