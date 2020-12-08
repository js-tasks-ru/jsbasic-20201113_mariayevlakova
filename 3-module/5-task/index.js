/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let newStr = str
  .split(' ')
  .join(',')
  .split(',')
  .map (item => parseFloat(item))
  .filter (item => !isNaN(item));

  let max = Math.max(...newStr);
  let min = Math.min(...newStr);

  return result = {min, max};
  }

