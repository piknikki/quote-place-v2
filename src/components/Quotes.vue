<template>
  <div id="card-container">
    <div id="card" v-for="quote in allQuotes" :key="quote.id">
      <div class="card-body">
          <p>{{ quote.title }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'quotes',
  methods: {
    ...mapActions(['fetchTodos'])
  },
  computed: mapGetters(['allQuotes']),
  created () {
    this.fetchTodos()
  }
}
</script>

<style scoped>
#card-container {
  display: flex;
  flex-flow: row wrap;
}

#card {
  background-color: lightskyblue;
  width: 300px;
  height: auto;
  border: 1px solid grey;
  margin: 20px;
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
