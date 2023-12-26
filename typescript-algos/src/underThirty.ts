interface Person {
  name: {
    first: string;
    last: string;
  };
  age: number;
  id: number;
}

export function underThirty(people: Array<Person>): Array<Person> {
  const peopleUnderThirty = people.filter((person) => person.age < 30);

  return peopleUnderThirty;
}
