const slugify = require('slugify');


const slugifyString = (string) => {
  slugify(string);
};


const upperFirstLetterWord = (string) => {
 let words = string.split(' ');

  for(let i= 0; i < words.length; i++) {
    let newElement = words[i].charAt(0).toUpperCase() + string.slice(1);
    words[i] = newElement;
  }

  let newString = words.join(' ');
  return newString;
}


module.exports = {
  slugifyString,
  upperFirstLetterWord,
}