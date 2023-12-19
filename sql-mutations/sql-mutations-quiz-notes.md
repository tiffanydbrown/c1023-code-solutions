# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  The SQL CRUD operations are: insert, select, update, and delete.

- How do you add a row to a SQL table?
  You add a row to a SQL table using an insert statement.

- How do you add multiple rows to a SQL table at once?
  You add multiple rows to a SQL table at once by specifying more than one tuple of values separated by commas.

- How do you update rows in a database table?
  You can update the rows in a database using the update statement.

- How do you delete rows from a database table?

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  It is important to include a `where` clause in your `update` and `delete` statements, because without one you will change your entire table.

- How do you accidentally delete or update all rows in a table?
  You can accidentally delete or update all rows in a table by forgetting to use the where statement.

- How do you get back the modified row without a separate `select` statement?
  You use the returning \* statement.

- Why did you get an error when trying to delete certain films?
  I got an error, because it violated foreign key constraint on another table.

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
