{
  //

  const removeDuplicates = (numbers: number[]): number[] => {
    const numbersSet = new Set(numbers);
    const uniqueNumbersArray = [...numbersSet];

    return uniqueNumbersArray;
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

  //
}
