/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let row of table.rows) {
        if (row.cells[3].getAttribute('data-available') === 'true') {
            row.classList.add('available');
         } else if (row.cells[3].getAttribute('data-available') === 'false') {
             row.classList.add('unavailable');
         } else {
             row.setAttribute('hidden',true);
         }
     
         if (row.cells[2].textContent === 'm') {
             row.classList.add('male');
         } else {
             row.classList.add('female');
         }
     
         if (+row.cells[1].textContent <18) {
             row.style="text-decoration: line-through";
         }
    }
}
