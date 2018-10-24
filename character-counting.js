countLetters = (input) => {
  input = input.split(' ').join(''); 
  let returnObject = {}
  for (i = 0; i < input.length; i++) {
    let characterToCheck = input[i];
    let characterCount = 0;
    for (j=0; j < input.length; j++) {
      if (input[j] === characterToCheck) {
        characterCount ++;
      }
    }
    returnObject[characterToCheck] = [characterCount];
  }

  return returnObject;
  // return to us all the unique characters that exist in a string that is passed into the function.
  // the function should also report back how many instances of each letter were found in the string.
}


console.log(countLetters("lighthouse in the house"));
