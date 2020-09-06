<template>
  <div>
    <b-img
      class="bd-placeholder-img card-img-top"
      width="100%"
      :src="identifySession.topImage"
      focusable="false"
      role="img"
    />
    {{ identifySession.sessionName }}
    <button
      type="button"
      class="btn btn-info"
      @click.prevent="joinSession(identifySession)"
    >
      {{ sessionMembers.joinStatus }}
      参加する
    </button>
    <button
      type="button"
      class="btn btn-info"
      @click.prevent="declineSession(identifySession)"
    >
      退出する
    </button>
    <p>作成者：{{ identifySession.creator }}</p>
    <p>参加者</p>
    <ul v-for="member in sessionMembers" :key="member.id">
      <li>{{ member.userDisplayName }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
      joinStatus: false,
    };
  },
  computed: {
    identifySession() {
      return this.$store.getters["sessionlist/getSessoinData"].find(
        (session) => session.id === this.$route.params.id
      );
    },
    sessionMembers() {
      return this.$store.getters[
        "progresssessions/getProgressSessoinData"
      ].filter((session) => session.sessionId === this.$route.params.id);
    },
  },
  created: function () {
    this.$store.dispatch("sessionlist/getSessionslist");
    this.$store.dispatch("progresssessions/getProgressSessionslist");
    const user = firebase.auth().currentUser;
    if (user) {
      const confrimJoinStatus = firebase
        .firestore()
        .collection("progressSessions")
        .where("sessionId", "==", this.$route.params.id)
        .where("userId", "==", user.uid);
      const self = this;

      confrimJoinStatus
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            if (doc.exists) {
              self.joinStatus = true;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    joinSession(session) {
      if (!session.members > session.participants) {
        alert("参加人数は既に満員です");
      } else {
        this.$store.commit("progresssessions/joinSession", session);

        const joinSession = firebase
          .firestore()
          .collection("sessions")
          .doc(this.$route.params.id);
        joinSession.update({
          members: firebase.firestore.FieldValue.increment(1),
        });
      }
    },
    declineSession(session) {
      this.$store.commit("progresssessions/declineSession", session);

      const declineSession = firebase
        .firestore()
        .collection("sessions")
        .doc(this.$route.params.id);
      declineSession.update({
        members: firebase.firestore.FieldValue.increment(-1),
      });
    },
  },
};
</script>
