<template>
  <div id="card-container">
    <div id="card" v-for="quote in quotes" :key="quote.id">
      <div class="card-body" >
          <p v-bind:style="newColor">
            {{ quote.title }}
            <br>
            <span @click="deleteQuote(quote.id)" >
              <i class="fal fa-trash-alt fa-xs trash-icon" id="trash"></i>
            </span>
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Quotes',
  data () {
    return {
      newColor: {
        background: 'hsl(' + (360 * Math.random()).toString() + ',' +
          (25 + 70 * Math.random()).toString() + '%,' +
          (85 + 10 * Math.random()).toString() + '%)'
      }
    }
  },
  computed: {
    quotes () {
      return this.$store.getters.allQuotes
    }
  },
  methods: {
    ...mapActions(['deleteQuote'])
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
