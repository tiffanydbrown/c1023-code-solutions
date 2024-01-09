# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  A component is "mounted" to the DOM during the initial render.

- What is a React Effect?
  A React Effect lets you specify side effects that are caused by rendering itself, rather than by a particular event.

- When should you use an Effect and when should you not use an Effect?
  You should not use an Effect if your Effect nly adjusts some state based on other state. You
  should use an Effect when you need something to happen no matter which interaction caused the component to appear.

- When do Effects run?
  Effects run at the end of a commit after the screen updates.

- What function is used to declare an Effect?
  You declare an Effect in the top-level of your component.

- What are Effect dependencies and how do you declare them?
  Effect dependencies are declared in an array right inside the closing parenthesis of the useEffect declaration. They declare when to stop running the Effect.

- Why would you want to clean up from an Effect?
  You would want to clean up from an Effect, because if you don't they will keep remounting and piling them up. Cleaning helps you unmount an Effect so that the next time the function is called you won't have the ame Effects already running.

- How do you clean up from an Effect?
  To clean up from an Effect, return a cleanup function from the Effect.

- When does the cleanup function run?
  The cleanup function will run each time before the Effect runs again.

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
