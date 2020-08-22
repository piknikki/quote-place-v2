<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>hello there, this is straight css no extra help from bootstrap or bulma</h2>
    <form @submit.prevent="addQuote" v-bind:newColor="newColor">
      <input
        v-model="text"
        type="text"
        placeholder="Add a new quote..."
        required />
        <button type="submit" >
          <span class="icon">
          <i class="fal fa-comment-alt-smile"></i> </span> Add </button>
    </form>
    <br>
    <Quotes />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { v4 as uuidv4 } from 'uuid'

import Quotes from '@/components/Quotes'
export default {
  name: 'Home',
  data () {
    return {
      text: '',
      quoteList: [
        {
          id: 1,
          text: 'Sloths are the best kind of people'
        }
      ],
      noteColor: '',
      newColor: '#' + 'Math.random()*0xFFFFF<<0).toString(16)'
    }
  },
  components: {
    Quotes
  },
  methods: {
    addQuote () {
      console.log(this.text)
      this.noteColor = this.newColor
      const newQuote = {
        // id: uuidv4(),
        text: this.text
      }
      this.quoteList.unshift(newQuote)
      console.log(this.quoteList)
      this.text = ''
    }
  }
}
</script>

<style>
input {
  padding: 5px;
  margin: 10px;
}

button {
  padding: 5px 35px;
  margin: 10px;
}
</style>
