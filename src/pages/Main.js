import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

class Main extends Component {
  static propTypes = {
  }

  render() {
    const data = toJS(this.props.appStore.planetData);

    return (
      <div className="home" style={{backgroundImage: '../resource/clanprofilebackgroundsmall.jpg'}}>
        {
          data.list.map((item, idx) => {
            return <a className={`menu${idx}`} key={`mapItem${idx}`} href={`/map/${idx}`}>
                     <span>{ item.name }</span>
                   </a>
          })
        }
      </div>
   );
  }
}

export default inject('appStore')(observer(Main));