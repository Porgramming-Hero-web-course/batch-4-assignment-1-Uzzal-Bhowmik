{
  //

  const countWordOccurrences = (sentence: string, word: string) => {
    let occurrenceCount: number = 0;

    sentence.split(" ").forEach((w) => {
      if (w.toLocaleLowerCase() === word.toLocaleLowerCase()) occurrenceCount++;
    });

    return occurrenceCount;
  };

  console.log(countWordOccurrences("I love typescript", "typescript"));

  //
}
