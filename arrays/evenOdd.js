// Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator
function evenOdd(val){
  var myArray = [];
  for (var i = 0; i < val.length; i++) {
    if (val[i] % 2 === 0) {
        myArray.unshift("even");
  }
    else {
      myArray.unshift("odd");
    }
  }
  return myArray;
}

// DO NOT DELETE
module.exports = evenOdd;
