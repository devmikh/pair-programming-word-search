const transpose = require('./transpose');
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reverseStr(word))) return true;

  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reverseStr(word))) return true;
  }
  return false;
};

const reverseStr = (str) => {
  return str.split('').reverse().join('');
};

module.exports = wordSearch;