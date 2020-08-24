import axios from 'axios'

const state = {
  quotes: []
}

const getters = {
  allQuotes: (state) => state.quotes
}

const actions = {
  // make a request, get a response, and then call a mutation
  async fetchTodos ({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // console.log(response.data)
    commit('setQuotes', response.data)
  },
  async addQuote ({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title })

    commit('newQuote', response.data)
  },
  async deleteQuote ({ commit }, id) {
    console.log(id)
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    commit('removeQuote', id)
  }
}

const mutations = {
  // quotes here is the response.data being passed down to the component
  setQuotes: (state, quotes) => (state.quotes = quotes),
  newQuote: (state, quote) => state.quotes.unshift(quote),
  removeQuote: (state, id) => (state.quotes = state.quotes.filter(quote => quote.id !== id))
}

export default {
  state,
  getters,
  actions,
  mutations
}
