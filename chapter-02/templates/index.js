const template = document.createElement('template');
template.innerHTML = `<p>Hello World from Template</p>`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-component', XComponent);
