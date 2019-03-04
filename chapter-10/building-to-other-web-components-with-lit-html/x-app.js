import { LitElement, html, property } from 'lit-element';

import 'dropdown';

class XApp extends LitElement {
  render() {
    return html`
      <x-dropdown @visibleChange=${e => this.log(e)}>
        Hello From Lit-HTML!
      </x-dropdown>
    `;
  }
  log(e) {
    console.log(e);
  }
}

customElements.define('x-app', XApp);
