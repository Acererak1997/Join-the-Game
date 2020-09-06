import firebase from "~/plugins/firebase";
import "firebase/auth";

export const state = () => ({
  userUid: "",
  displayName: "",
  status: null,
});

export const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid;
  },
  setDisplayName(state, displayName) {
    state.displayName = displayName;
  },
  setStatus(state, status) {
    state.status = status;
  },
};

export const actions = {
  login({ commit }, { email, password }) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const user = response.user;
        commit("setUserUid", user.uid);
        commit("setDisplayName", user.displayName);
        commit("setStatus", { status });
        localStorage.setItem("userData", user.uid);
        this.$router.replace({ path: "/common/" });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit("setStatus", null);
        this.$router.replace({ path: "/common/" });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

export const getters = {
  getUserUid(state) {
    return state.userUid;
  },
  getUserName(state) {
    return state.displayName;
  },
  getStatus(state) {
    return state.status;
  },
};
