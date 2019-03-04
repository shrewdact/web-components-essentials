import { LitElement, html, property } from 'lit-element';

class XDropdown extends LitElement {
  static get properties() {
    return {
      visible: { type: Number },
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.visible = false;
    this.title = 'dropdown';
  }

  render() {
    return html`
      <style>
        .dropdown div {
          border: 1px solid #ccc;
          padding: 12px;
        }
      </style>

      <div class="dropdown">
        <button @click="${e => this.toggle(e)}">
          ${this.title}
        </button>
        ${this.visible
          ? html`
              <div><slot></slot></div>
            `
          : ''}
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    // trigger custom event;
    this.dispatchEvent(
      new CustomEvent('visibleChange', { detail: this.visible })
    );
  }
}

customElements.define('x-dropdown', XDropdown);
