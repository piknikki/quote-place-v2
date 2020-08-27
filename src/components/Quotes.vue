<template>
  <div id="card-container">
    <div id="card" v-for="quote in quotes" :key="quote.id">
      <div class="card-body" >
          <p v-bind:style="newColor" >
            <span v-if="!editing">
              {{ quote.title }}
            </span>

            <span v-else-if="editing">
              <form @submit.prevent="updateQuote(quote)">
                <textarea
                  v-model="quote.title"
                  type="text"
                  required />
                <button type="submit" class="save-button">
                  <span class="icon">
                  <i class="fal fa-save"></i></span> Save </button>
              </form>
            </span>
            <br>
<!--            @click="updateQuote(quote)" -->
<!--    if editing, include a form to edit current        -->
            <span @click="editToggle">
              <i class="fal fa-edit fa-xs edit-icon" id="edit"></i>
            </span>
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
      editing: false,
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
    ...mapActions(['deleteQuote', 'updateQuote']),
    updateQuote (quote) {
      const editedQuote = {
        id: quote.id,
        title: quote.title
      }
      this.updateQuote(editedQuote)
    },
    editToggle () {
      this.editing = !this.editing
    }
  }
}
</script>

<style scoped>
#card-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

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

.edit-icon {
  flex-flow: column wrap;
  align-self: flex-start;
  float: left;
  padding: 25px 5px 5px 25px;
  font-size: 0.5em;
  cursor: pointer;
}

.trash-icon {
  flex-flow: column wrap;
  align-self: flex-end;
  float: right;
  padding: 25px 5px 5px 25px;
  font-size: 0.5em;
  cursor: pointer;
}

.save-button {
  flex-flow: row wrap;
  align-self: center;
  float: bottom;
}

</style>
