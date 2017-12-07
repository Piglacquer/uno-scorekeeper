<template lang="html">
  <div class='body'>
    <h1>naming all dem players</h1>
<!-- need to get the number the user clicked on from previous page to pass into createPlayerInput function. Buttons are there for testing -->
    <button v-on:click='createPlayerInput(3)'>click me</button>
    <button v-on:click='maxCharacters'>dont me</button>
    <div>
      <router-link :to="{ name: 'gameTime', params: {} }" @click.native='maxCharacters'>Next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'playerInputs',
  methods: {
    createPlayerInput: function(number){
      // number will be the number passed in from the previous page
      let body = document.querySelector('.body')
      for (var i = 0; i < number; i++) {
        var label = document.createElement('label')
        label.innerHTML = 'player'+[i]
        body.appendChild(label)
        var input = document.createElement('input')
        input.type = 'text'
        label.appendChild(input)
      }
    },
    maxCharacters: function(){
      let inputArray = document.querySelectorAll('input')
      inputArray.forEach(function(player){
        if(player.value.length > 8){
          alert(player.value + ' is too long')
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
