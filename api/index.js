import motogp from '~/api/motogp';

export default async function (ctx, inject) {
  const api = {
    motogp: motogp(ctx),
  };
  ctx.$api = api;
  inject('api', api);
  const currentSeason = (await api.motogp.seasons()).find((season) => season.active);
  const context = {
    currentSeason,
  };
  ctx.$context = context;
  inject('context', context);
  const currentRace = (await api.motogp.season().races(currentSeason.season.uuid)).find(
    (race) => !race.cancelled && !race.winner,
  );
  const lastRace = (await api.motogp.season().races(currentSeason.season.uuid))
    .reverse()
    .find((race) => !race.cancelled && race.winner);
  ctx.$context.currentRace = currentRace;
  ctx.$context.lastRace = lastRace;
}
