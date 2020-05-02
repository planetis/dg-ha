import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import PlanetListItem from './PlanetListItem';

class PlanetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlanetList: false,
    }
  }
  static propTypes = {
  }

  toggleList(onPlanetList) {
    this.setState({onPlanetList});
  }

  renderPlanetList() {
    const data = this.props.appStore.planetData.list;

    return data.map((item, idx) => {
      return <PlanetListItem text={item.name} idx={idx} key={`plItem${idx}`} />
    });
  }

  render() {
    const onPlanetList = this.state.onPlanetList;

    return (
      <div className={`planet-list ${onPlanetList ? 'open' : ''}`}>
        <a className="btn-planet-tab" onClick={() => {this.toggleList(!onPlanetList)}}>
          <img src="/images/menu_img/baseline_arrow_drop_down_white_18dp.png" alt="" />
        </a>
        <div className="list-wrap">
          {this.renderPlanetList()}
        </div>
      </div>
   );
  }
}

export default inject('appStore')(observer(PlanetList));