import firebase from "~/plugins/firebase";

export const state = () => ({
  participatingSessions: [],
});

export const mutations = {
  joinSession(state, post) {
    const user = firebase.auth().currentUser;
    firebase
      .firestore()
      .collection("participatingSessions")
      .add({
        user_id: user.uid,
        post_id: post.id,
      })
      .then(() => {
        console.log("参加完了");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  declineSession(state, post) {
    firebase
      .firestore()
      .collection("participatingSessions")
      .where("post_id", "==", post.id)
      .get()
      .then((snap) => {
        snap.forEach((ele) => {
          let decline_good_post = ele.data();
          decline_good_post.id = ele.id;
          if (decline_good_post.post_id === post.id) {
            firebase
              .firestore()
              .collection("participatingSessions")
              .doc(decline_good_post.id)
              .decline()
              .then(() => {
                state.participatingSessions = state.participatingSessions.filter(
                  (participating) => participating.id !== decline_good_post.id
                );
                console.log("参加辞退");
              });
          }
        });
      });
  },
};

export const actions = {
  getSessoins({ commit, state }, post) {
    if (state.participatingSessions.length) {
      state.participatingSessions.forEach((ele) => {
        if (post.id !== ele.id) {
          commit("joinSession", post);
        } else {
          commit("declineSession", post);
        }
      });
    } else {
      commit("joinSession", post);
    }
  },
};

export const getters = {
  getSessoinData(state) {
    return state.participatingSessions;
  },
};
