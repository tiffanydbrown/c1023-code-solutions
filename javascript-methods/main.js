const num1 = 8;
const num2 = 16;
const num3 = 78;
const maximumValue = Math.max(num1, num2, num3);

console.log('Maximum Value:', maximumValue);

const heroes = ['Wolverine', 'Iron Man', 'Superman', 'Wonder Woman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);

console.log('Value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

const library = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J. K. Rowling',
  },
  {
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
  },
  {
    title: 'Red Rising',
    author: 'Pierce Brown',
  },
];

const lastBook = library.pop();
console.log('Last Book:', lastBook);

const firstBook = library.shift();
console.log('First Book:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of Library:', library);

const fullName = 'Tiffany Brown';
const firstAndLastName = fullName.split(' ');

console.log('First and Last Name:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
