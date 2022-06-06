function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1 - Dias do mês
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysList = document.querySelector('#days');
  let countDay = 1;
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.setAttribute('class', 'day');
    dayListItem.innerText = days;
    if (countDay === 6) {
      dayListItem.setAttribute('class', `${dayListItem.getAttribute('class')} friday`);
      countDay = 0;
    } else {
      countDay += 1;
    }
    if (days == 24 || days == 25 || days == 31) {
      dayListItem.setAttribute('class', `${dayListItem.getAttribute('class')} holiday`);
    }
    daysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();