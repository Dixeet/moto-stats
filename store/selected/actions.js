export default {
  async setSerie({ commit, rootState, dispatch }, serie) {
    commit(
      'setSerie',
      rootState.series.find((serieL) => serieL.uuid === serie),
    );
    await dispatch('initSeasons', serie, { root: true });
  },
};
