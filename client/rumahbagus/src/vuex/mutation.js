import axios from 'axios'

export const state = {
  houses: [],
  newHouse: {
    title: '',
    description: '',
    address:'',
    price:'',
    owner:'',
    image:'',
    loc: {
      lng: '',
      lat: ''
    }
  }
}

export const mutations = {
  GET_HOUSES(state, payload) {
    state.houses = payload
  },
  POST_HOUSE(state, payload) {
    state.houses.push(payload)
  },
  DELETE_HOUSE(state,payload) {
    let index = state.houses.findIndex(val => val._id == payload)
    state.houses.splice(index,1)
  }
}

export const actions = {
  getHouses({commit}) {
    axios.get('http://localhost:3000/houses')
         .then(function(res) {
           console.log(res.data);
           commit('GET_HOUSES',res.data)
         })
    // commit('GET_HOUSES')
  },
  postHouse({commit}) {
    axios.post('http://localhost:3000/houses', state.newHouse)
         .then(function(res) {
           if(res.data.success) {
             commit('POST_HOUSE', res.data.data)
           }
         })
    // commit('POST_HOUSE',house)
  },
  deleteHouse({commit},id) {
    let self = this
    axios.delete(`http://localhost:3000/houses/${id}`)
         .then(function(res) {
           commit('DELETE_HOUSE',id)
         })
  }
}

export const getters = {
  houses(state) {
    return state.houses
  },
  newHouse(state) {
    return state.newHouse
  }
}