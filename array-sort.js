/*var arrayOfNumbers = [1, 10, 2, 5, 9]

arrayOfNumbers.sort(function(a,b) {
  return a - b
})

console.log(arrayOfNumbers)*/



var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



students.sort(function(a, b) {
  var nameA = a.name.toUpperCase()
  var nameB = b.name.toUpperCase()
  var ageA = parseInt(a.age)
  var ageB = parseInt(b.age)
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
      return 1;
  } else if (nameA === nameB) {
    if (ageA > ageB) {
      return -1
    } else {
      return 1
    }
    }
})
