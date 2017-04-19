import axios from 'axios'

export const state = {
  center: {
    lat: -6.260923,
    lng: 106.781435
  },
  houses: [],
  newHouse: {
    title: '',
    description: '',
    address:'',
    price:'',
    owner:'',
    image:'',
    lat: '',
    lng: ''
  },
  houseDialog: {
    title: '',
    description: '',
    address:'',
    price:'',
    owner:'',
    image:'',
    loc: {
      lat: '',
      lng: ''
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
  },
  EDIT_HOUSE(state) {
    let index = state.houses.findIndex(val => val._id == state.houseDialog._id)
    state.houses.splice(index,1)
    state.houses.push(state.houseDialog)
  },
  ADD_HOUSE_DIALOG(state, payload) {
    state.houseDialog = payload
  }
}

export const actions = {
  addHouseDialog({commit}, data) {
    commit('ADD_HOUSE_DIALOG', data)
  },
  getHouses({commit}) {
    axios.get('http://localhost:3000/houses')
         .then(function(res) {
           console.log(res.data);
           commit('GET_HOUSES',res.data)
         })
    // commit('GET_HOUSES')
  },
  postHouse({commit}) {
    let rumah = {

    }
    axios.post('http://localhost:3000/houses', state.newHouse)
         .then(function(res) {
           if(res.data.success) {
             commit('POST_HOUSE', res.data.data)
           }
         })
    // commit('POST_HOUSE',house)
  },
  deleteHouse({commit},id) {
    axios.delete(`http://localhost:3000/houses/${id}`)
         .then(function(res) {
           commit('DELETE_HOUSE',id)
         })
  },
  editHouse({commit}) {
    axios.put(`http://localhost:3000/houses/${state.houseDialog._id}`, state.houseDialog)
         .then(function(res) {
           console.log(res.data);
          //  commit('EDIT_HOUSE')
         })
  }
}

export const getters = {
  houses(state) {
    return state.houses
  },
  newHouse(state) {
    return state.newHouse
  },
  houseDialog(state) {
    return state.houseDialog
  },
  center(state) {
    return state.center
  }
}