const template = document.createElement('template');
template.innerHTML = `
<p></p>
`;

class XComponent extends HTMLElement {
  // ES2105 classes support Getters adn Setters
  set name(value) {
    this._name = value;
    this.nameElement.innerHTML = this._name;
  }

  get name() {
    return this._name;
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.nameElement = this.root.querySelector('p');
  }
}

customElements.define('x-component', XComponent);
