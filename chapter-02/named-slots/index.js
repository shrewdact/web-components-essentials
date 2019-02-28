const template = document.createElement('template');
template.innerHTML = `
<style>
  .card {
    padding: 12px;
    border: 1px solid #ccc;
  }
  .title {
    border-bottom: 1px solid #ccc;
    margin-bottom: 12px;
  }
</style>
<div class="card">
  <div class="title">
    <slot name="title"></slot>
  </div>
  <slot></slot>
</div>
`;

class XDetailCard extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-detail-card', XDetailCard);
