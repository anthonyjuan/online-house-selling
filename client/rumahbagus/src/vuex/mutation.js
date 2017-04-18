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
  }
}

export const actions = {
  getHouses({commit},houses) {
    axios.get('http://localhost:3000/houses')
         .then(function(res) {
           console.log(res.data);
           commit('GET_HOUSES',res.data)
         })
    // commit('GET_HOUSES')
  },
  postHouse({commit},house) {
    axios.post('http://localhost:3000/houses', state.newHouse)
         .then(function(res) {
           if(res.data.success) {
             commit('POST_HOUSE', res.data.data)
           }
         })
    // commit('POST_HOUSE',house)
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