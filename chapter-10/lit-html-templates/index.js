import { LitElement, html } from 'lit-element';

class XDropdown extends LitElement {
  render() {
    return html`
      Hello from lit-element
    `;
  }
}

customElements.define('x-dropdown', XDropdown);
