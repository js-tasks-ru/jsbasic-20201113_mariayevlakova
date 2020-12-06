/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  return str.split('-')
  .map ( (word, index) => {
    if (index == 0) {
     return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  })
  .join ('')
}

