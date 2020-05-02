import { observable, decorate, action } from 'mobx';

export default class AppStore {
  onAreaList = false;
  loading = false;
  mapID = 0;
  planetData = [];
  hiddenAreaData = [];

  init() {
    this.onAreaList = false;
    this.loading = false;
    this.mapID = 0;
    this.planetData = require('../resource/pdata.json');
    this.hiddenAreaData = require('../resource/hdata.json');
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setMapChange(num) {
    this.mapID = num;
  }

  setOnAreaList(bool) {
    this.onAreaList = bool;
  }
}

decorate(AppStore, {
  onAreaList: observable,
  loading: observable,
  mapID: observable,
  planetData: observable,
  hiddenAreaData: observable,
  init: action,
  setLoading: action,
  setMapChange: action,
  setOnPlanetList: action,
  setOnAreaList: action,
});
