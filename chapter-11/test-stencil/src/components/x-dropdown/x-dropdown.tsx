import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';

@Component({
  tag: 'x-dropdown',
  styleUrl: 'x-dropdown.css',
  shadow: true
})
export class XDropdown {
  @Prop() title = 'dropdown';
  @State() show = false;
  @Event() showChange: EventEmitter;

  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>{this.title}</button>
        {this.show ? <div class="x-dropdown__content" /> : <div />}
      </div>
    );
  }

  toggle() {
    this.show = !this.show;
    this.showChange.emit(this.show);
  }
}
