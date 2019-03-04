import './dropdown.js';

const dropdown = document.querySelector('x-dropdown');

dropdown.title = 'custom dropdown';
dropdown.addEventListener('visibleChange', e => console.log(e));
