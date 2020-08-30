<template>
  <div v-if="race.event" :style="{ 'text-decoration': race.cancelled ? 'line-through' : 'none' }">
    <div class="mb-1">
      <span class="date is-size-7">{{ formatDate(race.date) }}</span>
    </div>
    <div>
      <strong>{{ race.event.name }}</strong>
    </div>
    <div>
      <small>{{ race.venue.name }}</small>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  props: {
    race: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatDate(date) {
      return DateTime.fromMillis(date * 1000)
        .setLocale('fr')
        .toLocaleString(DateTime.DATE_SHORT);
    },
  },
};
</script>

<style scoped>
.date {
  background-color: #2b3e50;
  padding: 3px;
}
</style>
