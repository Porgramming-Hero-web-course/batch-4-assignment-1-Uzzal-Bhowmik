{
  //

  interface Person {
    name: string;
    age: number;
  }

  const getProperty = <X, Y extends keyof X>(person: X, prop: Y) => {
    return person[prop];
  };

  const person: Person = { name: "Alice", age: 30 };
  console.log(getProperty<Person, "name">(person, "name"));

  //
}
