import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ScoreKeeper from '@/components/ScoreKeeper';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScoreKeeper',
      component: ScoreKeeper,
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
