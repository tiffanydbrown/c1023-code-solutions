import { underThirty } from './underThirty';

// // Your code goes here
describe('underThirty', () => {
  it('returns an array', () => {
    const people = [
      {
        name: {
          first: 'Shawn',
          last: 'Kost',
        },
        age: 99,
        id: 1,
      },
      {
        name: {
          first: 'Joe',
          last: 'Schmoe',
        },
        age: 17,
        id: 2,
      },
    ];
    const result = underThirty(people);
    expect(result).toEqual([
      { name: { first: 'Joe', last: 'Schmoe' }, age: 17, id: 2 },
    ]);
  });
  it('returns an array', () => {
    const people = [
      {
        name: {
          first: 'Trevor',
          last: 'James',
        },
        age: 30,
        id: 1,
      },
      {
        name: {
          first: 'Ellen',
          last: 'Garcia',
        },
        age: 30,
        id: 2,
      },
      {
        name: {
          first: 'Benny',
          last: 'Duncan',
        },
        age: 27,
        id: 3,
      },
    ];
    const result = underThirty(people);
    expect(result).toEqual([
      { name: { first: 'Benny', last: 'Duncan' }, age: 27, id: 3 },
    ]);
  });
});
