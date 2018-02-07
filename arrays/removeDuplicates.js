// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.
function removeDuplicates(arr){
  var newArray = []
  for (var i = 0; i < arr.length; i++){
    if (newArray.indexOf(arr[i]) == -1) {
      newArray.push(arr[i])
    }
  }
  return newArray
}
var removeDuplicates;

// DO NOT DELETE
module.exports = removeDuplicates;
