import { takeAChance } from './take-a-chance.js';

takeAChance('Tiffany')
  .then((resolve: string) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error.message);
  });
