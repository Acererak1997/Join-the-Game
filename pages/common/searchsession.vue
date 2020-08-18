<template>
  <div>
    <div class="mt-2 border border-secondary p-3">
      <h3>セッション検索</h3>
      <div>
        <b-dropdown id="dropdown-1" text="ゲームシステム" class="m-md-2">
          <b-dropdown-item>ダンジョンズ＆ドラゴンズ</b-dropdown-item>
          <b-dropdown-item>クトゥルフ神話TRPG</b-dropdown-item>
          <b-dropdown-item>ソードワールド</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-form-checkbox
          id="forBeginner"
          class="pb-1"
          name="forBeginner"
          value="accepted"
          unchecked-value="not_accepted"
        >
          初心者歓迎
        </b-form-checkbox>
        <b-form-checkbox
          id="onlyOnline"
          class="pb-1"
          name="onlyOnline"
          value="accepted"
          unchecked-value="not_accepted"
        >
          オンラインセッションのみ
        </b-form-checkbox>
      </div>
      <button type="button" class="btn btn-info">
        検索
      </button>
    </div>

    <div class="card-group">
      <div v-for="session in sessions" class="mt-3" :key="session.id">
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
            <title>Placeholder</title>
            <rect fill="#868e96" width="100%" height="100%" />
            <text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text>
          </b-img>
          <div class="card-body">
            <h5 class="card-title">{{ session.sessionName }}</h5>
            <p class="card-text">
              {{ session.detail }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              参加人数：<span>0</span>/<span>{{ session.participants }}</span
              >名が参加中
            </li>
            <li class="list-group-item">{{ session.location }}</li>
            <li class="list-group-item">{{ session.date }}</li>
            <li class="list-group-item">{{ session.creator }}</li>
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
    };
  },
  mounted() {
    firebase
      .firestore()
      .collection("sessions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const sessionData = {
            creator: doc.data().creator,
            date: doc.data().date,
            sessionName: doc.data().sessionName,
            location: doc.data().location,
            participants: doc.data().participants,
            detail: doc.data().detail,
            checkedOnline: doc.data().checkedOnline,
            checkedForBeginner: doc.data().checkedForBeginner,
            topImage: doc.data().topImage,
          };
          this.sessions.push(sessionData);
          const session = doc.data();
          session.id = doc.id;
        });
      });
  },
};
</script>

<style></style>
