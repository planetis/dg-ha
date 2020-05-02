import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import AreaMark from './AreaMark';

class PlanetMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapSrcArr: [
        '/images/maps/0.jpg',
        '/images/maps/1.jpg',
        '/images/maps/2.jpg',
        '/images/maps/3.jpg',
        '/images/maps/4.jpg',
        '/images/maps/5.jpg',
        '/images/maps/6.jpg',
        '/images/maps/7.jpg',
      ]
    }
  }
  static propTypes = {
  }

  scrollCenter() {
    const scrollTarget = document.querySelector('.planet-map');
    const target = document.querySelector(`.map-wrapper img`);

    if (!!target) {
      let x = target.offsetWidth;
      let y = target.offsetHeight;

      scrollTarget.scrollTo(x, y);
      scrollTarget.scrollTo(scrollTarget.scrollLeft / 2, scrollTarget.scrollTop / 2);
    }
  }

  getPoint(event) {
    const scrollTarget = document.querySelector(`.planet-map`);
    console.log (
      event.clientX + scrollTarget.scrollLeft,
      event.clientY + scrollTarget.scrollTop
    );
  }

  render() {
    let areaList = toJS(this.props.appStore.hiddenAreaData);
    areaList = areaList[this.props.appStore.mapID];

    return (
      <div className="planet-map">
        <div className="map-wrapper">
          <img src={this.state.mapSrcArr[ this.props.appStore.mapID ]} onClick={this.getPoint} onLoad={() => this.scrollCenter()} alt=""/>
        </div>
        <div className="marker-list">
          {
            areaList.map((item, idx) => {
              return <AreaMark key={`haItem${idx}`} idx={idx} data={item} />
            })
          }
        </div>
      </div>
    );
  }
}

export default inject('appStore')(observer(PlanetMap));