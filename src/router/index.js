import Vue from 'vue';
import Router from 'vue-router';
import landingPage from '@/components/landingPage';
import addPlayers from '@/components/addPlayers';
import gameTime from '@/components/gameTime';
import scores from '@/components/scores';
import playerInputs from '@/components/playerInputs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: landingPage,
    },
    {
      path: '/addPlayers',
      name: 'addPlayers',
      component: addPlayers,
    },
    {
      path: '/gameTime',
      name: 'gameTime',
      component: gameTime,
    },
    {
      path: '/scores',
      name: 'scores',
      component: scores,
    },
    {
      path: '/players',
      name: 'playerInputs',
      component: playerInputs,
    },
  ],
});
