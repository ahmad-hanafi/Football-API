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
    team : {}
  },
  mutations,
  getters: {
    filteredAreas: (state) => (val) => {
      return state.areas.filter(areas => {return val.toLowerCase().split(' ').every(v => areas.name.toLowerCase().includes(v))})
    },
    filteredTeams: (state) => (val) => {
      return state.teams.filter(teams => {return val.toLowerCase().split(' ').every(v => teams.name.toLowerCase().includes(v))})
    },
    
  },
  actions,
  modules: {
  }
})
