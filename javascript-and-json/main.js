const books = [
  {
    isbn: '9780385534253',
    title: 'Killers of the Flower Moon',
    author: 'David Grann',
  },
  {
    isbn: '9781668016138',
    title: 'Holly',
    author: 'Stephen King',
  },
  {
    isbn: '9780425285954',
    title: 'Dark Age',
    author: 'Pierce Brown',
  },
];

console.log('books:', books, typeof books);
console.log(
  'JSON Stringify:',
  JSON.stringify(books),
  typeof JSON.stringify(books)
);

const JSONString = '{"Number id": 123456789, "Name":"Tiffany Brown"}';
console.log('JSON String:', JSONString, typeof JSONString);

const JSONObj = JSON.parse(JSONString);
console.log('JSON Object:', JSONObj, typeof JSONObj);
