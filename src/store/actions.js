import axios from 'axios'
const baseURL = 'http://api.football-data.org/v2/'
const APIKey = 'dd47430c4cf447efb59f917dc78eeafa'

export function getAreas ({ commit }) {
    axios
        .get(`${baseURL}/areas`, {
            headers: {
                'X-Auth-Token': APIKey
            }
        })
        .then(res => {
            commit('SETAREAS', res.data.areas)
        })
        .catch(error => console.log(error))
}

export function getAreaById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/teams?areas=${id}`, {
        headers: {
            'X-Auth-Token': APIKey
        }
    })
    .then((response) => {
        console.log(response.data.teams)
        commit('SET_TEAMS', response.data.teams)
        router.push(`/areas/${id}`)
    })
}

export function getTeamById ({commit}, { id, router}) {
    axios
    .get(`${baseURL}/teams/${id}`, {
        headers: {
            'X-Auth-Token': APIKey
        }
    })
    .then((response) => {
        console.log(response.data)
        commit('SET_TEAM', response.data)
        router.push(`/teams/${id}`)
    })
}
