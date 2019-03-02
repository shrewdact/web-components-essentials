class XCharacterList extends HTMLElement {
  get character() {
    return this._character;
  }

  set character(value) {
    this._character = value;
    this._render();
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  _render() {
    this.root.innerHTML = `
      <h2>${this.character.name}</h2>
      <ul>
        <li>Height: ${this.character.height}</li>
        <li>Mass: ${this.character.mass}</li>
        <li>Birth Year: ${this.character.birth_year}</li>
      </ul>
    `;
  }
}

customElements.define('x-character-detail', XCharacterList);
