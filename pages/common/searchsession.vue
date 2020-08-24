<template>
  <div>
    <div class="mt-2 border border-secondary p-3">
      <h3>セッション検索</h3>
      <div>
        <label>ゲームシステム</label>
        <b-form-select
          v-model="gameSystem"
          :options="gameSystemOptions"
        ></b-form-select>
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

    <div class="card-group">
      <div v-for="session in searchSessions" class="mt-3" :key="session.id">
        <div class="card" style="width: 18rem;">
          <b-img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="180"
            :src="session.topImage"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: Image cap"
          >
          </b-img>
          <div class="card-body">
            <nuxt-link :to="`/common/session/${session.id}`">
              <h5 class="card-title">
                {{ session.sessionName }}
              </h5>
            </nuxt-link>
            <p class="card-text">
              {{ session.detail }}
            </p>
          </div>
          <ul class="sessionList-group sessionList-group-flush">
            <li class="sessionList-group-item">
              <span>0</span>/<span>{{ session.participants }}</span
              >名が参加中
            </li>
            <li class="sessionList-group-item">{{ session.location }}</li>
            <li class="sessionList-group-item">{{ session.date }}</li>
            <li class="sessionList-group-item">{{ session.creator }}</li>
          </ul>
          <div class="card-body">
            <span class="badge badge-primary" v-if="session.checkedForBeginner"
              >初心者歓迎</span
            >
            <span class="badge badge-primary" v-if="session.checkedOnline"
              >オンラインセッション</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      sessions: [],
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
      const sessionList = this.sessions.filter(function (session) {
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
      return sessionList;
    },
  },
  mounted() {
    firebase
      .firestore()
      .collection("sessions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const sessionData = {
            id: doc.id,
            creator: doc.data().creator,
            date: doc.data().date,
            sessionName: doc.data().sessionName,
            gameSystem: doc.data().gameSystem,
            location: doc.data().location,
            participants: doc.data().participants,
            detail: doc.data().detail,
            checkedOnline: doc.data().checkedOnline,
            checkedForBeginner: doc.data().checkedForBeginner,
            topImage: doc.data().topImage,
          };
          this.sessions.push(sessionData);
        });
      });
  },
};
</script>

<style></style>
