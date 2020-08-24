<template>
  <div>
    <form @submit.prevent="addQuote">
      <input
        v-model="title"
        type="text"
        placeholder="Add a new quote..."
        required />
<!--      <input type="color" id="favcolor" name="favcolor" v-bind:style="favcolor">-->
      <button type="submit" >
          <span class="icon">
          <i class="fal fa-comment-alt-smile"></i> </span> Add </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddQuote',
  data () {
    return {
      newId: 3,
      title: '',
      // favcolor: '',
      newColor: {
        background: 'hsl(' + (360 * Math.random()).toString() + ',' +
          (25 + 70 * Math.random()).toString() + '%,' +
          (85 + 10 * Math.random()).toString() + '%)'
      }
    }
  },
  methods: {
    addQuote () {
      this.$store.dispatch('addQuote', this)
      this.newId++
      this.title = ''
    }
  }
}
</script>

<style scoped>
input[type="text"] {
  flex: 10;
  padding: 5px;
  margin: 10px;
}

button {
  padding: 5px 35px;
  margin: 10px;
}

</style>
