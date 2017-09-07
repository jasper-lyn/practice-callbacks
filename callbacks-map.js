var words = ["ground", "control", "to", "major", "tom"];


function map(array, fn) {
  let newArray = []

  function pushToNewArr(e) {
    newArray.push(fn(e))
  }

  array.forEach(pushToNewArr);

// array.forEach(function(e) {
//     newArray.push(fn(e))
//   });

  //for (i = 0; i < array.length; i++) {
  //newArray.push(fn(array[i]))
  //}
  return newArray
}

const lengthOfWords = map(words, function(word) {
  return word.length;
});

const upperCaseWords = map(words, function(word) {
  return word.toUpperCase();
});

const reverseWords = map(words, function(word) {
  return word.split('').reverse().join('');
});




console.log(lengthOfWords)
console.log(upperCaseWords)
console.log(reverseWords)

//console.log(lengthOfWords.toString() + '\n' + 'rest of functions here')


//console.log(`${lengthOfWords}
//${upperCaseWords}
//${reverseWords}`)


//EXPECTED OUTPUT
//[6, 7, 2, 5, 3]
//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

