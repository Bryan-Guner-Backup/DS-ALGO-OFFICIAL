
function fearNotLetter(str) {
//use unicode
var unicode = [];
var start = str.charCodeAt(str[0]);
  for (var i = 0; i<str.length; i++) {
    unicode.push(str.charCodeAt(i));
  }
  //check if unicode array is sequential
  for (var n = 0; n<unicode.length; n++){
    if ((unicode[n+1]-1) != unicode[n] && unicode[n] != unicode[unicode.length - 1]) {
      //fill in the gap (unicode[n+1] and unicode[n]+1 are different!)
      return String.fromCharCode(unicode[n]+1);
    }
  } //will return 'undefined' if str is not missing any letters
  }

console.log(fearNotLetter("abce"));