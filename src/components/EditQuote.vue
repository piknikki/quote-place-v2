<template>
  <span>
<!--    <form @submit.prevent="updateQuote(quote)">-->
<!--                <textarea-->
<!--                  v-model="quote.title"-->
<!--                  type="text"-->
<!--                  required />-->
<!--      <button type="submit" class="save-button">-->
<!--                  <span class="icon">-->
<!--                  <i class="fal fa-save"></i></span> Save </button>-->
<!--    </form>-->
  </span>
</template>

<script>
export default {
  name: 'edit-quote',
  props: ['quote'],
  data () {
    return {
      title: '',
      id: 100
    }
  },
  methods: {
    updateQuote (quote) {
      const editedQuote = {
        id: quote.id,
        title: quote.title
      }
      this.updateQuote(editedQuote)
    }
  }
}
</script>

<style scoped>

</style>
