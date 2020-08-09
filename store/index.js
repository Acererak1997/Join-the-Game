import firebase from '~/plugins/firebase'

export const state = () => ({
  userUid: '',
  displayName: '',
})

export const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName
  },
}

export const actions = {
  login({ commit }, { email, password }) {
    console.log('login action')
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user
        console.log('success : ' + user)
        console.log('success : ' + user.uid + ' : ' + user.displayName)
        commit('setUserUid', user.uid)
        commit('setDisplayName', user.displayName)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}

export const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserName(state) {
    return state.displayName
  },
}
