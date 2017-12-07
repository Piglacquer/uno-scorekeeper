<template lang="html">
  <div>
    <router-link :to="{ name: 'addPlayers', params: {} }" class="button start">Start Game!</router-link>
    <router-link :to="{ name: 'scores', params: {} }" class ="button scores">Scores</router-link>
  </div>
</template>

<script>
export default {
  name: "landingPage",
  methods: {
    startGame(){
    }
  },
}
</script>

<style lang="css">
</style>
