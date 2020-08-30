<template>
  <b-navbar @update:active="onActive">
    <template #start>
      <b-navbar-item
        v-for="(serie, index) of series"
        :key="index"
        tag="nuxt-link"
        class="series-img"
        :to="`/${serie.uuid}`"
        :active="selectedSerie.uuid === serie.uuid"
      >
        <img :src="getImageSmall(serie.picture)" :alt="serie.name" />
        <small class="ml-1">{{ serie.code }}</small>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({ series: 'series', selectedSerie: 'selected/serie' }),
  },
  methods: {
    onActive(active) {
      this.$store.commit('setMobileMenu', active);
    },
  },
};
</script>

<style scoped>
.navbar-item img {
  max-height: 3rem;
}
.series-img {
  padding: 0 1rem 0 1rem;
}
</style>
