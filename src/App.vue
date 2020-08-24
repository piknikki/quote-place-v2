<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/logo.png">
    <h2>hello there, this is straight css no extra help from bootstrap or bulma</h2>
    <AddQuote />
    <br>
    <div class="quote-container">
      <Quotes />
    </div>
  </div>
</template>

<script>
import Quotes from '@/components/Quotes'
import AddQuote from '@/components/AddQuote'

export default {
  name: 'Home',
  components: {
    Quotes,
    AddQuote
  },
  data () {
    return {
      quote: {
        id: '',
        title: ''
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  //font-family: 'Amatic SC', cursive;
  //font-family: 'Architects Daughter', cursive;
  //font-family: 'Caveat', cursive;
  //font-family: 'Cedarville Cursive', cursive;
  //font-family: 'Mrs Saint Delafield', cursive;
  //font-family: 'Over the Rainbow', cursive;
  //font-family: 'Reenie Beanie', cursive;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  padding: 50px;
}

</style>
