export default {
  async initSeasons({ commit, state, dispatch }, serieUUID) {
    commit('setSeasons', await this.$api.moto.seasons(serieUUID));
    commit(
      'selected/setSeason',
      state.seasons.find((seasonL) => seasonL.active),
    );
    await dispatch(
      'chooseSeason',
      state.seasons.find((seasonL) => seasonL.active),
    );
  },
  async chooseSeason({ commit }, season) {
    commit('selected/setSeason', season);
    commit('setRaces', await this.$api.moto.season(season.season.uuid).races());
  },
};
