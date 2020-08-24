<template>
  <div id="card-container">
    <div id="card" v-for="quote in allQuotes" :key="quote.id">
      <div class="card-body" >
          <p v-bind:style="newColor">
            {{ quote.title }}
            <br>
            <span>
              <i @click="deleteQuote(quote.id)" class="fal fa-trash-alt fa-xs trash-icon" id="trash"></i>
            </span>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Quotes',
  data () {
    return {
      newColor: {
        background: this.$randomColor()
      }
    }
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteQuote'])
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
  justify-content: space-around;
}

/*#card {*/
/*  width: 300px;*/
/*  height: 1em;*/
/*  margin: 20px;*/
/*  padding: 20px;*/
/*}*/

.card-body {
  font-family: 'Architects Daughter', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  font-size: 2em;
  margin: 0 auto;
}

p {
  padding:10px;
}

.trash-icon {
  flex-flow: column wrap;
  align-self: flex-end;
  float: right;
  padding: 25px 5px 5px 25px;
  font-size: 0.5em;
  cursor: pointer;
}

</style>
