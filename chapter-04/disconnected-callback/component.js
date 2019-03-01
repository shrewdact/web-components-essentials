const template = document.createElement('template');
template.innerHTML = `
<h3> Hello There
</h3>
<div>I am a component!</div>
`

class XComponent extends HTMLElement {
  
  constructor(){
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    console.log('connectedCallback');
  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
}

customElements.define('x-component', XComponent);
