export default {
  currentSeason({ seasons }) {
    return seasons.find((season) => season.active);
  },
  currentRace({ races }) {
    return races.find((race) => !race.cancelled && !race.winner);
  },
  lastRace({ races }) {
    return races
      .slice()
      .reverse()
      .find((race) => !race.cancelled && race.winner);
  },
  series({ series }) {
    return series;
  },
  seasons({ seasons }) {
    return seasons;
  },
  races({ races }) {
    return races;
  },
  isMobile({ isMobile }) {
    return isMobile;
  },
  mobileMenuOpen({ mobileMenuOpen }) {
    return mobileMenuOpen;
  },
};
