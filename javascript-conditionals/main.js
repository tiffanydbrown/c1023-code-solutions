/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
console.log('Value of isUnderFive:', isUnderFive(4));
console.log('Value of isUnderFive:', isUnderFive(10));
console.log('Value of isUnderFive:', isUnderFive(5));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log('Value of isEven:', isEven(4));
console.log('Value of isEven:', isEven(10));
console.log('Value of isEven:', isEven(5));

function startsWithJ(str) {
  if (str.charAt(0) === 'J') {
    return true;
  }
  return false;
}
console.log('Value of startsWithJ:', startsWithJ('JavaScript'));
console.log('Value of startsWithJ:', startsWithJ('PHP'));
console.log('Value of startsWithJ:', startsWithJ('HTML'));
console.log('Value of startsWithJ:', startsWithJ('Java'));
console.log('Value of startsWithJ:', startsWithJ('Kotlin'));
console.log('Value of startsWithJ:', startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log('Value of isOldEnoughToDrink:', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};

console.log('Value of isOldEnoughToDrive:', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 0) {
    return false;
  }
}
console.log(
  'Value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDrive(homer)
);
console.log(
  'Value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDrive(bart)
);

function categorizeAcidity(ph) {
  if (ph === 7) {
    return 'neutral';
  } else if (ph >= 0 && ph < 7) {
    return 'acid';
  } else if (ph > 7 && ph <= 14) {
    return 'base';
  } else {
    return 'invalid ph level';
  }
}
console.log('Value of ph:', categorizeAcidity(-1));
console.log('Value of ph:', categorizeAcidity(14.0000001));
console.log('Value of ph:', categorizeAcidity(7));
console.log('Value of ph:', categorizeAcidity(2));
console.log('Value of ph:', categorizeAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log('Yakko says:', "We're the warner brothers!");
      break;
    case 'wakko':
      console.log('Wakko says:', "We're the warner brothers!");
      break;
    case 'dot':
      console.log('Dot says:', "I'm cute~");
      break;
    default:
      console.log('Default value:', 'Goodnight everybody!');
      break;
  }
}
console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('cody'));
console.log(introduceWarnerBro('minerva'));

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Value of action:', 'Die Hard');
      break;
    case 'comedy':
      console.log('Value of comedy:', 'Hot Fuzz');
      break;
    case 'horror':
      console.log('Value of horror:', 'Alien');
      break;
    case 'drama':
      console.log('Value of Drama:', 'Gosford Park');
      break;
    case 'musical':
      console.log('Value of musical:', 'The Greatest Showman');
      break;
    case 'sci-fi':
      console.log('Value of Sci-Fi:', 'Star Wars');
      break;
    default:
      console.log('Value of default:', 'What do you want?');
      break;
  }
}
console.log(recommendMovie('action'));
console.log(recommendMovie('comedy'));
console.log(recommendMovie('random'));
