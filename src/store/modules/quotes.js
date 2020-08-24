const state = {
  quotes: [
    {
      id: 1,
      title: 'Poop-Tart!!!'
    },
    {
      id: 2,
      title: 'Can you don\'t??'
    }
  ]
}

const getters = {
  allQuotes: (state) => state.quotes
}

const actions = {
  // make a request, get a response, and then call a mutation
  async addQuote ({ commit }, payload) {
    commit('ADD_QUOTE', payload)
  },
  async deleteQuote ({ commit }, payload) {
    commit('DELETE_QUOTE', payload)
  }
}

const mutations = {
  ADD_QUOTE: (state, payload) => {
    var newQuote = {
      id: payload.newId,
      title: payload.title
    }
    state.quotes.unshift(newQuote)
  },
  DELETE_QUOTE: (state, id) => {
    console.log(state.quotes)
    const index = state.quotes.findIndex(quote => quote.id === id)
    state.quotes.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
