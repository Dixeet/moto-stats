import moto from '@/api/moto';

export default function (ctx, inject) {
  const api = {
    series() {
      return ctx.$axios.$get('/series/collection?category=Motorcycle&page=0&size=10');
    },
    moto: moto(ctx),
  };
  inject('api', api);
}
