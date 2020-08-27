const state = {
  quotes: [
    {
      id: 1,
      title: 'Don\'t facilitate other people\'s bullsh!t.'
    },
    {
      id: 2,
      title: 'F*ck that sh!t.'
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
  },
  async updateQuote ({ commit }, payload) {
    commit('UPDATE_QUOTE', payload)
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
  },
  UPDATE_QUOTE: (state, payload) => {
    // var updatedQuote = state.quotes.find(quote => quote.id === payload)
    // updatedQuote.title = payload.title
    const idx = state.quotes.findIndex(quote => quote.id === payload.id)
    if (idx !== -1) {
      state.quotes.splice(idx, 1, payload)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
