import React, { Component } from 'react';
import 'web-component-essentials';

class Dropdown extends Component {
  componentDidMount() {
    this.refs['dropdown'].title = this.props.title;
    this.refs['dropdown'].addEventListener('show', e => {
      if (this.props.onShow) {
        this.props.onShow(e);
      }
    });
  }

  componentWillReceiveProps(props) {
    if (props.title !== this.props.title) {
      this.refs['dropdown'].title = props.title;
    }
    if (props.show !== this.props.show) {
      this.refs['dropdown'].show = props.show;
    }
  }

  render() {
    return <x-dropdown ref="dropdown">{this.props.children}</x-dropdown>;
  }
}

export default Dropdown;
