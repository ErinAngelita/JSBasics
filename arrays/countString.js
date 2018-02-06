// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
function countString(school, o) {
  var count = 0;
  school = school.toLowerCase();
  o = o.toLowerCase();
  for(var i = 0; i < school.length; ++i) {
    if(school[i] == o)
    count++;
  }
  return count;
};

// DO NOT DELETE
module.exports = countString;
