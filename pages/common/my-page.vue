<template>
  <div class="jumbotron">
    <h3>{{ $store.getters.getUserName }}さんのページ</h3>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link">あなたが主催しているセッション</a>
        <ul v-for="sessoin in hostingSessions" :key="sessoin.id">
          <!-- <nuxt-link :to="`/common/session/${session.id}`"> -->
          <li>{{ sessoin.sessionName }}</li>
          <!-- </nuxt-link> -->
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link active">あなたが参加中のセッション</a>
        <ul>
          <li v-for="session in participatingSessions" :key="session.id">
            {{ session }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  mounted() {
    firebase.auth().currentUser;
  },
  computed: {
    hostingSessions: function () {
      const sessionList = this.$store.getters["sessionlist/getSessoinData"];
      const hostUid = this.$store.getters.getUserUid;
      const hostingSession = sessionList.filter((hostingSession) => {
        return hostingSession.creatorId === hostUid;
      }, this);
      return hostingSession;
    },
    participatingSessions: function () {
      const progSessionList = this.$store.getters[
        "progresssessions/getProgressSessoinData"
      ];
      const userUid = this.$store.getters.getUserUid;
      const participatingSessions = progSessionList.filter(
        (participatingSession) => {
          return participatingSession.userId === userUid;
        },
        this
      );

      // const sessionList = this.$store.getters["sessionlist/getSessoinData"];
      // const joiningSessoins = sessionList.filter((joiningSession) => {
      //   return joiningSession.id === participatingSessions;
      // }, this);
      // console.log(joiningSessoins);
      return participatingSessions;
    },
  },
  created() {
    this.$store.dispatch("sessionlist/getSessionslist");
  },
};
</script>
