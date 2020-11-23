/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
 
    if (str.length >= 1) {
        return str[0].toUpperCase() + str.slice(1);
    } else {
        return str;
    }

}
