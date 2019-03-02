const template = document.createElement('template');

template.innerHTML = `
  <h1>Examples - <slot></slot></h1>
  <a href="/">Back to examples </a>
  <hr/>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-header', Header);
