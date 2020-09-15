<template>
  <div class="mt-3">
    <h3>{{ $store.getters.getUserName }}さんのページ</h3>
    <div>
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="主催しているセッション" active>
            <ul v-for="sessoin in hostingSessions" :key="sessoin.id">
              <li>
                <nuxt-link
                  :to="{
                    name: 'index-session-id',
                    params: { id: sessoin.id },
                  }"
                >
                  {{ sessoin.sessionName }}
                </nuxt-link>
              </li>
            </ul></b-tab
          >
          <b-tab title="参加中のセッション">
            <ul>
              <li v-for="session in participatingSessions" :key="session.id">
                <nuxt-link
                  v-bind:to="{
                    name: 'index-session-id',
                    params: { id: session.id },
                  }"
                >
                  {{ session.sessionName }}
                </nuxt-link>
              </li>
            </ul></b-tab
          >
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
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
      return participatingSessions;
    },
  },
  mounted() {
    firebase.auth().currentUser;
  },
  created() {
    this.$store.dispatch("sessionlist/getSessionslist");
  },
};
</script>
