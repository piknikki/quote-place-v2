<template>
  <div>
    <form @submit="onSubmit">
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
import { mapActions } from 'vuex'

export default {
  name: 'AddQuote',
  data () {
    return {
      title: '',
      favcolor: '',
      newColor: {
        background: this.$randomColor()
      }
    }
  },
  methods: {
    ...mapActions(['addQuote']),
    onSubmit (e) {
      e.preventDefault()
      this.addQuote(this.title)
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
