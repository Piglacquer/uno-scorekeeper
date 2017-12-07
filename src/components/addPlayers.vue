<template lang="html">
  <div>
    <h1>select # of players</h1>
    <div class = "playerNumbers">
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(1)" class="button playerNumber">1</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(2)" class="button playerNumber">2</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(3)" class="button playerNumber">3</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(4)" class="button playerNumber">4</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(5)" class="button playerNumber">5</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(6)" class="button playerNumber">6</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(7)" class="button playerNumber">7</router-link>
        <router-link :to="{ name: 'playerInputs', params: {} }" tag= "button" @click.native="howManyPlayers(8)" class="button playerNumber">8</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'addPlayers',
  // data() {
  //   return {
  //     msg: 'Welcome to Your Vue.js App',
  //   }
  methods: {
    howManyPlayers: function(number){
      console.log(number)
      // router.push({ path: '/playerInputs', query: { number: '' }})
      },
    }
  }
</script>

<style lang="css">
.button {
  height: 100px;
  width: 100px;
  background-color: purple;
  color: white;
}
</style>
