{
  //

  const validateKeys = <T>(obj: T, keys: (keyof T)[]) => {
    let flag: boolean = true;

    for (const key of keys) {
      if (key in (obj as object) === false) {
        flag = false;
        break;
      }
    }

    return flag;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
