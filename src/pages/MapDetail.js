import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import PlanetMap from '../components/PlanetMap';
import PlanetList from '../components/PlanetList';
import AreaList from '../components/AreaList';

class MapDetail extends Component {
  static propTypes = {
  }

  componentDidMount() {
    const mapID = window.location.pathname.split('/').pop();//this.appStore.mapID;

    if (mapID !== this.props.appStore.mapID) {
      this.props.appStore.setMapChange(mapID);
    }
  }

  render() {
    const onAreaList = this.props.appStore.onAreaList ? 'list-open':'';

    return (
      <div className={`map-detail ${onAreaList}`}>
        <PlanetMap />
        <PlanetList />
        <AreaList />
      </div>
   );
  }
}

export default inject('appStore')(observer(MapDetail));