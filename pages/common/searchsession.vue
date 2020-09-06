<template>
  <div>
    <div class="mt-2 border border-secondary p-3">
      <h3>セッション検索</h3>
      <div>
        <label>ゲームシステム</label>
        <b-form-select v-model="gameSystem" :options="gameSystemOptions" />
      </div>
      <div>
        <b-form-checkbox id="forBeginner" class="pb-1" v-model="forBeginner">
          初心者歓迎
        </b-form-checkbox>
        <b-form-checkbox id="onlyOnline" class="pb-1" v-model="onlyOnline">
          オンラインセッションのみ
        </b-form-checkbox>
      </div>
      <button type="button" class="btn btn-info">
        検索
      </button>
    </div>
    <div class="Card decks">
      <div v-for="session in searchSessions" class="mt-3" :key="session.id">
        <sessioncard
          :gameSystem="gameSystemLabels[session.gameSystem]"
          :session-id="session.id"
          :session-title="session.sessionName"
          :sessiontop-image="session.topImage"
          :session-detail="session.detail"
          :session-date="session.date"
          :session-location="session.location"
          :current-players-num="session.members"
          :max-players-num="session.participants"
          :game-master="session.creator"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sessioncard from "@/components/sessioncrad";

export default {
  components: {
    sessioncard,
  },
  data() {
    return {
      gameSystemOptions: [
        { value: -1, text: "すべてのゲームシステム" },
        { value: 0, text: "ダンジョンズ＆ドラゴンズ" },
        { value: 1, text: "クトゥルフ神話TRPG" },
        { value: 2, text: "ソード・ワールド" },
      ],
      gameSystem: -1,
      forBeginner: false,
      onlyOnline: false,
    };
  },
  computed: {
    searchSessions: function () {
      const sessionList = this.$store.getters["sessionlist/getSessoinData"];
      const searchSessionsList = sessionList.filter(function (session) {
        return this.gameSystem < 0
          ? true
          : this.gameSystem === session.gameSystem;
      }, this);
      if (this.forBeginner) {
        return sessionList.filter(function (session) {
          return session.checkedForBeginner == true;
        }, this);
      }
      if (this.onlyOnline) {
        return sessionList.filter(function (session) {
          return session.checkedOnline == true;
        }, this);
      }
      return searchSessionsList;
    },
    gameSystemLabels() {
      return this.gameSystemOptions.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.text });
      });
    },
  },
  created() {
    this.$store.dispatch("sessionlist/getSessionslist");
  },
};
</script>

<style></style>
