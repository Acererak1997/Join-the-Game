import firebase from "~/plugins/firebase";

export const state = () => ({
  sessionslist: [],
});

export const mutations = {
  get(state, sessions) {
    state.sessionslist = sessions;
  },
};

export const actions = {
  getSessionslist({ commit }) {
    firebase
      .firestore()
      .collection("sessions")
      .get()
      .then((snapshot) => {
        let get_list = [];
        snapshot.forEach((ele) => {
          let session = ele.data();
          session.id = ele.id;
          get_list.push(session);
        });
        commit("get", get_list);
      });
  },
};

export const getters = {
  getSessoinData(state) {
    return state.sessionslist;
  },
};
