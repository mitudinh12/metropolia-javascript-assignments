'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');
students.forEach((student) => {
    let newElement = document.createElement('option');
    newElement.innerHTML = student['name'];
    newElement.value = student['id'];
    target.appendChild(newElement);
})
