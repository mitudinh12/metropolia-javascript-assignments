'use strict'

const items = ['First item', 'Second item', 'Third item'];
const target = document.getElementById('target');

for (let i= 0; i < items.length; i++) {
  target.appendChild(Object.assign(document.createElement('li'),
      {textContent: items[i]}))
  if (i === 1) {
    target.querySelectorAll('li')[i].classList.add('my-item');
  }
}