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

    commit('setQuotes', response.data)
  },
  async AddQuote ({ commit }, title) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title })

    commit('newQuote', response.data)
  }
}

const mutations = {
  // quotes here is the response.data being passed down to the component
  setQuotes: (state, quotes) => (state.quotes = quotes),
  newQuote: (state, quote) => state.quotes.unshift(quote)
}

export default {
  state,
  getters,
  actions,
  mutations
}
