/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  let userArr = users.filter (user => user.age <= age);
  let arr = userArr.map (user => user.name + ", " + user.balance);
  return arr.join ('\n');
  }
