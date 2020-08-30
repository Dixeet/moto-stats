export default async function ({ route, store }) {
  if (
    route.params &&
    route.params.serie &&
    (!store.state.selected.serie || store.state.selected.serie.uuid !== route.params.series)
  ) {
    await store.dispatch('selected/setSerie', route.params.serie);
  }
  if (
    route.params &&
    route.params.uuid &&
    (!store.state.selected.raceUUID || store.state.selected.serie.raceUUID !== route.params.uuid)
  ) {
    await store.commit('selected/setRaceUUID', route.params.uuid);
  }
}
