/* eslint-disable no-param-reassign */
export default {
  addSeasons(state, seasons) {
    state.seasons = [...state.seasons, ...seasons];
  },
  addRaces(state, races) {
    state.races = [...state.races, ...races];
  },
  addSeries(state, series) {
    state.series = [...state.series, ...series];
  },
  setSeasons(state, seasons) {
    state.seasons = seasons;
  },
  setRaces(state, races) {
    state.races = races;
  },
  setSeries(state, series) {
    state.series = series;
  },
  setIsMobile(state, isMobile) {
    state.isMobile = isMobile;
  },
  toggleMobileMenu(state) {
    state.mobileMenuOpen = !state.mobileMenuOpen;
  },
  setMobileMenu(state, open) {
    state.mobileMenuOpen = open;
  },
};
