import firebase from "~/plugins/firebase";

export const state = () => ({
  progressSessions: [],
  joinStatus: null,
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
        userId: user.uid,
        userDisplayName: user.displayName,
        sessionId: session.id,
        sessionName: session.sessionName,
        joinStatus: true,
      })
      .then(() => {
        console.log("参加完了");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  declineSession(state, session) {
    const user = firebase.auth().currentUser;
    const tmp = firebase
      .firestore()
      .collection("progressSessions")
      .where("sessionId", "==", session.id)
      .where("userId", "==", user.uid);

    tmp
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doc.ref.delete();
        });
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
      .onSnapshot((snapshot) => {
        let getProg = [];
        snapshot.forEach((ele) => {
          let session = ele.data();
          session.id = ele.id;
          getProg.push(session);
        });
        commit("getProgressSession", getProg);
      });
  },
};

export const getters = {
  getProgressSessoinData(state) {
    return state.progressSessions;
  },
};
