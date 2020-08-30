import Vue from 'vue';

export default async function ({ $api, store }) {
  await initState();
  initDefaultMixins();

  async function initState() {
    detectMobile();
    store.commit('addSeries', (await $api.series()).content);
  }

  function detectMobile() {
    if (process.client) {
      const isMobile = window.matchMedia('only screen and (max-width: 768px)').matches;
      store.commit('setIsMobile', isMobile);
    }
  }

  function initDefaultMixins() {
    const IMAGE_DOMAIN = 'https://cdn-images.motorsportstats.com/';

    function getImageURL(fakeURL, size = 'medium') {
      return `${IMAGE_DOMAIN}${size}/${fakeURL.split('/').slice(3).join('/')}`;
    }
    Vue.mixin({
      methods: {
        getImageSmall(fakeUrl) {
          return getImageURL(fakeUrl, 'small');
        },
        getImageMedium(fakeUrl) {
          return getImageURL(fakeUrl, 'medium');
        },
        getImageLarge(fakeUrl) {
          return getImageURL(fakeUrl, 'large');
        },
      },
    });
  }
}
