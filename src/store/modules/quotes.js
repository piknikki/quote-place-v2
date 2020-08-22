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
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?limit=10')

    commit('setQuotes', response.data)
  }
}

const mutations = {
  // quotes here is the response.data being passed down to the component
  setQuotes: (state, quotes) => (state.quotes = quotes)
}

export default {
  state,
  getters,
  actions,
  mutations
}
