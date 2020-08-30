<template>
  <b-sidebar position="static" :open="!isMobile || mobileMenuOpen" type="is-dark" mobile="fullwidth" fullheight>
    <div class="px-3 py-3">
      <b-menu>
        <b-menu-list v-if="currentRace" label="Course">
          <b-menu-item tag="nuxt-link" :to="raceTo(currentRace)">
            <template #label><RaceMenuItem :race="currentRace" /></template>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list v-if="currentRace" label="Course Precedente">
          <b-menu-item tag="nuxt-link" :to="raceTo(lastRace)">
            <template #label><RaceMenuItem :race="lastRace" /></template>
          </b-menu-item>
        </b-menu-list>
        <b-menu-list>
          <template #label>
            <b-field horizontal label="Calendrier">
              <b-select :value="season.season.uuid" placeholder="Choisir une saison" @input="chooseSeason">
                <option v-for="(seas, index) in seasons" :key="index" :value="seas.season.uuid">
                  {{ seas.year }}
                </option>
              </b-select>
            </b-field>
          </template>
          <b-menu-item
            v-for="(race, index) in races"
            :key="index"
            tag="nuxt-link"
            :to="raceTo(race)"
            :active="race.event.uuid === raceUUID"
          >
            <template #label><RaceMenuItem :race="race" /></template>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      raceUUID: 'selected/raceUUID',
      serie: 'selected/serie',
      season: 'selected/season',
      seasons: 'seasons',
      races: 'races',
      currentRace: 'currentRace',
      lastRace: 'lastRace',
      isMobile: 'isMobile',
      mobileMenuOpen: 'mobileMenuOpen',
    }),
  },
  methods: {
    async chooseSeason(seasonUUID) {
      await this.$store.dispatch(
        'chooseSeason',
        this.seasons.find((seasonL) => seasonL.season.uuid === seasonUUID),
      );
    },
    raceTo(race) {
      return { name: 'serie-races-uuid', params: { serie: this.serie.uuid, uuid: race.event.uuid } };
    },
  },
};
</script>

<style scoped lang="scss">
.b-sidebar.column {
  padding: 0;
  /deep/ .sidebar-content {
    padding: 0.75rem;
  }
}
/deep/ {
  div.field {
    align-items: center;
  }
  select {
    background-color: transparent;
    border: none;
    color: #dee5ed;
  }
  .field-label {
    label.label {
      color: #8694a4;
      letter-spacing: 0.1em;
    }
  }
  .menu-list a.is-active {
    background-color: #1f2d3b;
  }
}
</style>
