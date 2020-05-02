import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

class AreaList extends Component {
  static propTypes = {
  }

  toggleList(bool) {
    this.props.appStore.setOnAreaList(bool);
  }

  handleSetFocus(target) {
    const focusTarget = document.querySelector(`#${target}`);
    focusTarget.classList.add('on');
  }

  renderContents() {
    const data = this.props.appStore.hiddenAreaData[this.props.appStore.mapID];

    let result = data.map((item, idx) => {
      return <li className="item" key={`item-${idx}`}>
               <label htmlFor={`haMarker${idx}`}>
                 {`[${item.name}] ${item.boss}`}
               </label>
             </li>
    });

    return data.length > 0 ? <ul>{result}</ul> : '';
  }

  render() {
    const onList = this.props.appStore.onAreaList;

    return (
      <div className="area-list">
        <button className="btn-area-list-toggle" onClick={() => this.toggleList(!onList) } aria-label="숨겨진 구역 목록">
          <img src="/images/menu_img/baseline_dehaze_black_18dp.png" alt="" />
        </button>
        <div className="hidden-area-list">
          { this.renderContents() }
        </div>
      </div>
   )
  }
}

export default inject('appStore')(observer(AreaList));