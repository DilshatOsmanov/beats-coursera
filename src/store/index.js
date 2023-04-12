import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    artist: []
  },
  mutations: {
    SET_ARTIST_TO_STATE: (state, artist) => {
      state.artist = artist
    },
    EDIT_ARTIST: (state, artist) => {
      state.artist = {...state.artist, ...artist}
    },
  },
  actions: {
    GET_ARTIST_FROM_API({commit}) {
      return axios('http://localhost:8001/api/v1/auth/login', {
        method: 'POST',
        headers: {
          "Authorization" : `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyLHVzZXIiLCJpc3MiOiJmdWNodWsuZ2FsYW1hdC5iaXoiLCJpYXQiOjE2MjkzNjQ3MDcsImV4cCI6MTYyOTk2OTUwNywidXNlcm5hbWUiOiJub3QgcHJvbXB0Iiwicm9sZSI6IlJPTEVfQkVBVE1BS0VSIn0.Ey60Pi-RKfjMN6Um_I20889mu19EaagMNQuwh1o4fqemq14rFSMoO9GEy6-jcPOxx-EBLCTogG5GwJml-k7euw`,
          "x-profile-type" : "admin",
          "Content-Type" : "application/json",
          "Accept" : "*/*",
          "Connection" : "keep-alive",
        }, 
        data: {
          "email" : "dilshat",
          "password" : "dilshat123"
        }
      })
        .then((artist) => {
          commit('SET_ARTIST_TO_STATE', artist.data)
          return artist
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    EDIT_ARTIST: async({commit, state}, artist) => {
      return axios.post('http://localhost:3000/artist', {...state.artist, ...artist})
        .then((artist) => {
          commit('EDIT_ARTIST', artist.data)
          return artist
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    } 
  },
  getters: {
    ARTIST(state) {
      return state.artist
    }
  }
})

export default store