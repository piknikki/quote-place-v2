<template>
  <div id="app">
  </div>
</template>

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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
