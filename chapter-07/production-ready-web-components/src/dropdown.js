const template = document.createElement('template');
template.innerHTML = `
<button></button>
<div>
 <slot></slot> 
</div>
`;

class XDropdown extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

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
    this.buttonElement.addEventListener('click', () => this.toggle());

    this.contentElement = this.root.querySelector('div');
    this.contentElement.style.display = 'none';
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === 'title' && oldValue !== newValue) {
      this.title = newValue;
    }
  }

  toggle() {
    this.show = !this.show;
    this.contentElement.style.display = this.show ? 'block' : 'none';
    this.dispatchEvent(new CustomEvent('show', { detail: this.show }));
  }
}

customElements.define('x-dropdown', XDropdown);
