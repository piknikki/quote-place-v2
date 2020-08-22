<template>
  <div>
    quotes
    <div id="card" v-for="quote in quoteList" :key="quote.text">
      <div class="card-body">
          <p>{{ quote.text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quotes',
  props: ['quoteList']
}
</script>

<style scoped>
#card {
  background-color: lightskyblue;
  width: 300px;
  height: auto;
  border: 1px solid grey;
}

.card-body {
  font-family: 'Architects Daughter', cursive;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

</style>
