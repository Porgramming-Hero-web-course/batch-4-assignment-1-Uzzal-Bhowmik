{
  //

  const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
    let flag: boolean = true;

    keys.forEach((key) => {
      if (!Object.keys(obj as object).includes(key as string)) {
        flag = false;
      }
    });

    return flag;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
