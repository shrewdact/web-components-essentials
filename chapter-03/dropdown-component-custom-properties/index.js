import './dropdown.js';

const dropdown = document.querySelector('x-dropdown');

dropdown.title = 'Custom Title';

// wait three seconds then update the property
setTimeout(() => (dropdown.title = 'New Custom Title'), 3000);
