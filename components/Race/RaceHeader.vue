<template>
  <div v-if="race.race">
    <h1 class="mt-5 title">{{ race.race.name }}</h1>
    <hr />
    <div class="columns is-vcentered">
      <div class="column is-narrow circuit-image">
        <img :src="circuitImage" :alt="race.venue.name" />
      </div>
      <div class="column">
        <h2 class="title is-4">{{ race.venue.name }}</h2>
        {{ raceDate }}
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  computed: {
    circuitImage() {
      return `https://cdn-images.motorsportstats.com/medium/${this.race.venue.picture.split('/').slice(3).join('/')}`;
    },
    raceDate() {
      return DateTime.fromMillis(this.race.date * 1000)
        .setLocale('fr')
        .toLocaleString(DateTime.DATE_HUGE);
    },
    race() {
      return { ...this.$store.state.races.find((rc) => rc.event.uuid === this.$route.params.uuid) };
    },
  },
};
</script>

<style lang="scss" scoped>
.circuit-image {
  height: 100px;
  overflow: hidden;
  img {
    margin-top: -30px;
  }
}
</style>
