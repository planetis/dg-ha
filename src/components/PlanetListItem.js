import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetListItem extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    idx: PropTypes.number.isRequired
  }

  render() {
    const idx = this.props.idx;
    const text = this.props.text ? this.props.text : 'Button';

    return (
      <a
        className={`btn-planet planet${idx}`}
        key={`item-${idx}`}
        href={`/map/${idx}`}
      >
        <span>{text}</span>
      </a>
   )
  }
}

export default PlanetListItem;