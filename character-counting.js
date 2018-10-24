countLetters = (input) => {
  input = input.split(' ').join('');
  let returnObject = {}
  for (i = 0; i < input.length; i++) {
    let characterToCheck = input[i];
    let characterCount = 0;
    for (j = 0; j < input.length; j++) {
      if (input[j] === characterToCheck) {
        characterCount++;
      }
    }
    returnObject[characterToCheck] = characterCount;
  }

  return returnObject;
}


console.log(countLetters("lighthouse in the house"));
