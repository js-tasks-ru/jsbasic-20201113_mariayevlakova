/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (key in salaries) {
    if (typeof salaries[key] == "number") {
      sum += salaries[key];
    } 
  } return sum;
}
