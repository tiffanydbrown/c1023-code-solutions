# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that are only available while React is rendering.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hook can only be called at the top level of your components. You can't call them inside of conditions, loops, or other nested functions.

- What is the purpose of state in React?
  The purpose of state in React is to "remember" what the components are needed to do.

- Why can't we just maintain state in a local variable?
  We can't just maintain state in a local variable, because they don't persist between renders, and changes to them won't trigger renders.

- What two actions happen when you call a `state setter` function?
  It updates the variable and triggers React to render the component again.

- When does the local `state variable` get updated with the new value?
  When a user clicks the button after the component renders.

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
