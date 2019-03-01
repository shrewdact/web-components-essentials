const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    --color: red;
    --size: 16px;
  }

  p {
    color: var(--color);
    font-size: var(--size);
  }
</style>
<p>
  I'm a web component that can have custom styles thanks to CSS properties
</p>
`;

class XComponent extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('x-component', XComponent);
