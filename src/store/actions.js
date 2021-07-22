import axios from 'axios'
const baseURL = 'http://api.football-data.org/v2/'
const APIKey = 'dd47430c4cf447efb59f917dc78eeafa'

export function getPlayer ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/players/${id}`, {
        headers: {
            'X-Auth-Token': APIKey
        }
    })
    .then((response) => {
        commit('SET_PLAYER', response.data)
        router.push(`/players/${id}`)
    })
}


export function getPlayer({ commit }) {
    axios
        .get(`${baseURL}/players/`, {
            headers: {
                'X-Auth-Token': APIKey
            }
        })
        .then(res => {
            commit('SET_AREA_BY_ID', res.data)
        })
        .catch(error => console.log(error))
}

export function getTeams ({ commit }) {
    axios
        .get(`${baseURL}/teams`, {
            headers: {
                'X-Auth-Token': APIKey
            }
        })
        .then(res => {
            commit('SET_TEAMS', res.data)
        })
        .catch(error => console.log(error))
}

export function getAreaById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/areas/${id}`, {
        headers: {
            'X-Auth-Token': APIKey
        }
    })
    .then((response) => {
        commit('SET_AREA_BY_ID', response.data)
        router.push(`/areas/${id}`)
    })
}
