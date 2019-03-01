const template = document.createElement('template');
template.innerHTML = `
<style>
  P {
    color: red
  }
</style>
<p>
  I'm a red paragraph in a web component
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
