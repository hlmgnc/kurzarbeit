import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
  state: {
    countHome: 0,
    countAbout: 0
  },
  mutations: {
    [Mutations.INCREMENT] (state, type) {
      type === 'countHome' ? state.countHome++ : state.countAbout++
    },
    [Mutations.DECREMENT] (state, type) {
      if (state[type] === 0) return

      type === 'countHome' ? state.countHome-- : state.countAbout--
    }
  },
  actions: {
    increment ({ commit }, type) {
      commit(Mutations.INCREMENT, type)
    },
    decrement ({ commit }, type) {
      commit(Mutations.DECREMENT, type)
    },
    async fetchClients () {
      const request = await axios.get('/clients')
      return request.data
    },
    async fetchExperts () {
      const request = await axios.get('/experts')
      return request.data
    },
    async fetchClient ({ state }, clientId) {
      const request = await axios.get(`/clients/${clientId}`)
      return request.data
    },
    async matchExpert ({ dispatch }, { clientId, expertId, origin, destination }) {
      const request = await axios.post(`/clients/${clientId}/matchings`, {
        expertId, origin, destination
      })

      return request.data
    }
  }
})
