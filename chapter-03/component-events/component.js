const template = document.createElement('template');
template.innerHTML = `
<button>click me!</button>
`;

class XComponent extends HTMLElement {
  // ES2105 classes support Getters adn Setters
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.root
      .querySelector('button')
      // .addEventListener('click', () => console.log('button clicked'));
      .addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    this.dispatchEvent(
      new CustomEvent('customClick', { detail: Math.random() })
    );
  }
}

customElements.define('x-component', XComponent);
