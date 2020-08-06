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
  login() {
    firebase.auth().signInWithEmailAndPassword
  },
}

export const getters = {}
