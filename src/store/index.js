import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas: [],
    teams: [],
    areasById : [],
    team : {},
    player: {},
    number: 0
  },
  mutations,
  // getters: {
  //   filteredAlbums: (state) => (val) => {
  //     return state.photos.filter(photos => {return val.toLowerCase().split(' ').every(v => photos.title.toLowerCase().includes(v))})
  //   }
  // },
  actions,
  modules: {
  }
})
