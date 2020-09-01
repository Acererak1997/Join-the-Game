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
      参加する
    </button>
    <button
      type="button"
      class="btn btn-info"
      @click.prevent="joinSession(session)"
    >
      退出する
    </button>
    <p>作成者：{{ identifySession.creator }}</p>
    <p>参加者</p>
    <ul v-for="member in sessionMembers" :key="member.id">
      <li>{{ member.user_displayName }}</li>
    </ul>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
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
      ].filter((session) => session.session_id === this.$route.params.id);
    },
  },
  methods: {
    joinSession(session) {
      if (!this.identifySession.members < this.identifySession.particiapnts) {
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
  },
  created: function () {
    this.$store.dispatch("sessionlist/getSessionslist");
    this.$store.dispatch("progresssessions/getProgressSessionslist");
  },
};
</script>
