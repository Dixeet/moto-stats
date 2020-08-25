export default (ctx) => {
  const currentSeason = () => {
    return ctx.$context.currentSeason.season.uuid;
  };
  const currentRace = () => {
    return ctx.$context.currentRace.event.uuid;
  };
  return {
    seasons() {
      return ctx.$axios.$get('/series/motogp/seasons');
    },
    season(uuid = currentSeason()) {
      return {
        races() {
          return ctx.$axios.$get(`seasons/${uuid}/races`);
        },
        entries() {
          return ctx.$axios.$get(`seasons/${uuid}/entries`);
        },
        rookies() {
          return ctx.$axios.$get(`seasons/${uuid}/debutants`);
        },
        constructors() {
          return ctx.$axios.$get(`seasons/${uuid}/standings/constructors`);
        },
        drivers() {
          return ctx.$axios.$get(`seasons/${uuid}/standing/pilotes`);
        },
      };
    },
    race(uuid = currentRace()) {
      return {
        lastRace() {
          // eslint-disable-next-line no-param-reassign
          uuid = ctx.$context.lastRace.event.uuid;
          return this;
        },
        description() {
          return ctx.$axios.$get(`/events/${uuid}/short`);
        },
        entries() {
          return ctx.$axios.$get(`/events/${uuid}/entries`);
        },
        sessions() {
          return ctx.$axios.$get(`/events/${uuid}/sessions`);
        },
      };
    },
    session(uuid) {
      return {
        classification() {
          return ctx.$axios.$get(`/sessions/${uuid}/classifications`);
        },
        fastestLap() {
          return ctx.$axios.$get(`/sessions/${uuid}/fastestLap`);
        },
        lapChart() {
          return ctx.$axios.$get(`/sessions/${uuid}/lapChart`);
        },
        maxSpeeds() {
          return ctx.$axios.$get(`/sessions/${uuid}/maxSpeeds`);
        },
        lapTimes() {
          return ctx.$axios.$get(`/sessions/${uuid}/lapTimes`);
        },
      };
    },
  };
};
