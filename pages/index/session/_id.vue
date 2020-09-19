<template>
  <div>
    <div class="d-flex mt-3" v-if="!this.editStatus">
      <div class="w-50">
        <b-img
          class="bd-placeholder-img card-img-top"
          :src="identifySession.topImage"
          focusable="false"
          role="img"
        />
        <div v-if="$store.getters.getStatus == null" class="text-center">
          <p class="mb-2 mt-2">
            セッションに参加するには、<nuxt-link to="/login">
              ログイン </nuxt-link
            >する必要があります。
          </p>
          <p>
            アカウントをお持ちでない方は<nuxt-link to="/register">
              サインアップ </nuxt-link
            >をしてください
          </p>
        </div>

        <div
          class="mt-3 mb-3"
          v-if="
            $store.getters.getStatus !== null &&
            identifySession.creatorId !== $store.getters.getUserUid
          "
        >
          <button
            type="button"
            class="btn btn-info"
            @click.prevent="joinSession(identifySession)"
            v-if="!confrimJoinStatus"
          >
            参加する
          </button>
          <button
            type="button"
            class="btn btn-info"
            @click.prevent="declineSession(identifySession)"
            v-else
          >
            退出する
          </button>
        </div>
        <div
          v-if="
            $store.getters.getStatus !== null &&
            identifySession.creatorId === $store.getters.getUserUid
          "
        >
          <button
            type="button"
            class="btn btn-info"
            @click="deleteSession(identifySession.id)"
          >
            削除
          </button>
          <button type="button" class="btn btn-info" @click="activeEdit()">
            編集
          </button>
        </div>

        <div class="mt-3">
          <h5>参加者</h5>
          <ul v-for="member in sessionMembers" :key="member.id">
            <li>{{ member.userDisplayName }}</li>
          </ul>
        </div>
      </div>

      <div class="ml-3 w-50">
        <h2>
          {{ identifySession.sessionName }}
        </h2>
        <table class="table table-striped mt-2">
          <tbody>
            <tr>
              <th scope="row">ゲームマスター：</th>
              <td>{{ identifySession.creator }}</td>
            </tr>
            <tr>
              <th scope="row">ゲームシステム：</th>
              <td>{{ gameSystemLabels[identifySession.gameSystem] }}</td>
            </tr>
            <tr>
              <th scope="row">開始日：</th>
              <td>{{ identifySession.date }}</td>
            </tr>
            <tr>
              <th scope="row">ロケーション：</th>
              <td>{{ identifySession.location }}</td>
            </tr>
            <tr>
              <th scope="row">募集人数：</th>
              <td>{{ identifySession.participants }}人</td>
            </tr>
          </tbody>
        </table>
        <h4>セッション詳細</h4>
        <p>{{ identifySession.detail }}</p>
      </div>
    </div>
    <editSession
      v-if="this.editStatus"
      :topImage="identifySession.topImage"
      :sessionName="identifySession.sessionName"
      :creator="identifySession.creator"
      :gameSystem="gameSystemLabels[identifySession.gameSystem]"
      :date="identifySession.date"
      :location="identifySession.location"
      :participants="identifySession.participants"
      :detail="identifySession.detail"
    >
    </editSession>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import editSession from "~/components/editsession.vue";

export default {
  components: {
    editSession,
  },
  data() {
    return {
      id: this.$route.params.id,
      joinStatus: false,
      gameSystemOptions: [
        { value: -1, text: "すべてのゲームシステム" },
        { value: 0, text: "ダンジョンズ＆ドラゴンズ" },
        { value: 1, text: "クトゥルフ神話TRPG" },
        { value: 2, text: "ソード・ワールド" },
      ],
      editStatus: false,
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
    gameSystemLabels() {
      return this.gameSystemOptions.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.text });
      });
    },
    confrimJoinStatus() {
      return this.$store.getters[
        "progresssessions/getProgressSessoinData"
      ].some(
        (session) =>
          session.sessionId === this.$route.params.id &&
          session.userId === this.$store.getters.getUserUid
      );
    },
  },
  created: function () {
    this.$store.dispatch("sessionlist/getSessionslist");
    this.$store.dispatch("progresssessions/getProgressSessionslist");
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
    deleteSession(sessionId) {
      if (!confirm("セッションを削除してよろしいですか？")) {
        return;
      }
      firebase.firestore().collection("sessions").doc(sessionId).delete();
      this.$router.push({ name: "common-my-page" });
    },
    activeEdit() {
      this.editStatus = !this.editStatus;
    },
  },
};
</script>
