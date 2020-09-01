import firebase from "~/plugins/firebase";

export const state = () => ({
  progressSessions: [],
});

export const mutations = {
  getProgressSession(state, session) {
    state.progressSessions = session;
  },
  joinSession(state, session) {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("progressSessions")
      .add({
        user_id: user.uid,
        user_displayName: user.displayName,
        session_id: session.id,
      })
      .then(() => {
        console.log("参加完了");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export const actions = {
  getProgressSessionslist({ commit }) {
    firebase
      .firestore()
      .collection("progressSessions")
      .get()
      .then((snapshot) => {
        let get_prog = [];
        snapshot.forEach((ele) => {
          let session = ele.data();
          session.id = ele.id;
          get_prog.push(session);
        });
        commit("getProgressSession", get_prog);
      });
  },
};

export const getters = {
  getProgressSessoinData(state) {
    return state.progressSessions;
  },
};
