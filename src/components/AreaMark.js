import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class AreaMark extends Component {
  static propTypes = {
  }

  handleSetFocus() {
    const focusTarget = document.querySelector(`#haMarker${this.props.idx}`);
    focusTarget.classList.remove('on');
  }

  render() {
    const item = this.props.data;

    return (
      <button id={`haMarker${this.props.idx}`} onBlur={() => this.handleSetFocus()} className={`ha-marker h-a-${this.props.idx}`} style={{top: item.y, left: item.x}} >
        <img src="/images/ha-marker.png" alt={item.name} />
        <span>{item.name}</span>
      </button>
   );
  }
}
