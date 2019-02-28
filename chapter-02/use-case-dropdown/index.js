const template = document.createElement('template');
template.innerHTML = `
<button>Dropdown</button>
<div><slot></slot></div>
`;

class XDropdown extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // Root also gives us access to the inner template of our component
    this.button = this.root.querySelector('button');
    this.button.addEventListener('click', () => this.toggle());

    // Set the initial dropdown content to be hidden
    this.content = this.root.querySelector('div');
    this.content.style.display = 'none';
  }

  toggle() {
    const show = this.content.style.display === 'block';
    this.content.style.display = show ? 'none' : 'block';
  }
}

customElements.define('x-dropdown', XDropdown);
