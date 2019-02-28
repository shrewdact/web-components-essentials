const template = document.createElement('template');
template.innerHTML = `
<button></button>
<div>
 <slot></slot> 
</div>
`;

class XDropdown extends HTMLElement {
  // ES2105 classes support Getters adn Setters
  set title(value) {
    this._title = value;
    this.buttonElement.innerText = this._title;
  }

  get title() {
    return this._title;
  }

  constructor() {
    super();
    this._title = 'dropdown';
    this.show = false;
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    this.buttonElement = this.root.querySelector('button');
    this.buttonElement.innerText = this.title;
    this.buttonElement.addEventListener('click', () => this.toggleAttribute());

    this.contentElement = this.root.querySelector('div');
    this.contentElement.style.display = 'none';
  }

  toggle() {
    this.show = !this.show;
    this.contentElement.style.display = this.show ? 'blcok' : 'none';
  }
}

customElements.define('x-dropdown', XDropdown);
