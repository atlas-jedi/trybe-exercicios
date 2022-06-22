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

function clearDays() {
  const days = document.querySelectorAll('.day');
  days.forEach(element => {
    element.remove();
  });
}

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

// Exercício 2 - Função Feriados
function createBtn(name, id) {
  const btn_container = document.querySelector('.buttons-container');
  const btn = document.createElement('button');
  btn.innerText = name;
  btn.setAttribute('id', id);
  btn_container.appendChild(btn);
  return btn;
}

// Exercício 3 - Click btn
const btn_holiday = createBtn('Feriados', 'btn-holiday');
let bool_holiday = true;
btn_holiday.addEventListener('click', () => {
  const holiday_days = document.querySelectorAll('.holiday');
  if (bool_holiday){
    holiday_days.forEach((element) => {
      element.style.backgroundColor = 'rgb(196, 196, 196)';
    });
    bool_holiday = false;
  } else {
    holiday_days.forEach((element) => {
      element.style.backgroundColor = 'rgb(238,238,238)';
    });
    bool_holiday = true;
  }
})

// Exercício 4 - Btn friday
const btn_friday = createBtn('Sexta-feira', 'btn-friday');

// Exercício 5 - click btn friday
let bool_friday = true;
btn_friday.addEventListener('click', () => {
  const friday_days = document.querySelectorAll('.friday');
  if (bool_friday){
    friday_days.forEach((element) => {
      element.innerText = 'SEXTOU! /o/';
    });
    bool_friday = false;
  } else {
    clearDays();
    createDaysOfTheMonth();
    bool_friday = true;
  }
})

// Exercício 6 - Zoom
const days = document.querySelectorAll('.day');
days.forEach(element => {
  element.addEventListener('mouseover', zoomDayHigh);
  element.addEventListener('mouseout', zoomDayNormal);
});

function zoomDayHigh(event) {
  const day = event.target;
  day.style.fontSize = '25px';
  day.style.color = '#666';
}

function zoomDayNormal(event) {
  const day = event.target;
  day.style.fontSize = '20px';
  day.style.color = '#888';
}

function randomRGB() {
  const randomHexValue = () => Math.trunc(Math.random() * 255);
  return `${randomHexValue()}, ${randomHexValue()}, ${randomHexValue()}`;
}

// Exercício 7 - ToDo List
const btn_add = document.querySelector('#btn-add');
const taskContainer = document.querySelector('.my-tasks');
btn_add.addEventListener('click', () => {
  const textToDo = document.getElementById('task-input').value;
  const spanToDo = document.createElement('span');
  spanToDo.innerText = `${textToDo}:`;
  taskContainer.appendChild(spanToDo);
  createLegenda(`rgb(${randomRGB()})`);
});

// Exercício 8 - 
function createLegenda(cor) {
  const divLegenda = document.createElement('div');
  const hr = document.createElement('br');
  divLegenda.className = 'task';
  divLegenda.style.backgroundColor = cor;
  taskContainer.appendChild(divLegenda);
  taskContainer.appendChild(hr);
}