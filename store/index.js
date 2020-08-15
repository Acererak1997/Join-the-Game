import firebase from "~/plugins/firebase"
import "firebase/auth"

export const state = () => ({
  userUid: "",
  displayName: "",
  status: null,
})

export const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName
  },
  setStatus(state, status) {
    state.status = status
  },
}

export const actions = {
  login({ commit }, { email, password }) {
    console.log("login action")
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user
        commit("setUserUid", user.uid)
        commit("setDisplayName", user.displayName)
        commit("setStatus", { status })
        this.$router.replace({ path: "/common/top" })
      })
      .catch((e) => {
        console.log(e)
      })
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setStatus", null)
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
  getStatus(state) {
    return state.status
  },
}
