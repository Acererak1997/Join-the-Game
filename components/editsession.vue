<template>
  <div class="d-flex mt-3">
    <div class="w-50 b">
      <b-img
        class="bd-placeholder-img card-img-top"
        :src="topImage"
        focusable="false"
        role="img"
      />

      <div class="mt-3 mb-3">
        <button type="button" class="btn btn-info" @click="updateSessoin">
          更新する
        </button>
      </div>
    </div>

    <div class="ml-3 w-50">
      <h2>
        <input type="text" v-model="sessionTitle" />
      </h2>
      <table class="table table-striped mt-2">
        <tbody>
          <tr>
            <th scope="row">ゲームマスター：</th>
            <td>
              {{ creator }}
            </td>
          </tr>
          <tr>
            <th scope="row">ゲームシステム：</th>
            <td>
              <b-form-select
                v-model="gameSystems"
                :options="gameSystemOptions"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">開始日：</th>
            <td>
              <b-form-datepicker id="date" v-model="dateValue" class="mb-2" />
            </td>
          </tr>
          <tr>
            <th scope="row">ロケーション：</th>
            <td>
              <input type="text" :value="location" />
            </td>
          </tr>
          <tr>
            <th scope="row">募集人数：</th>
            <td>
              <b-form-input
                v-model="maxPlayers"
                type="number"
                placeholder="募集する人数を選択してください"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h4>セッション詳細</h4>
      <textarea cols="60" rows="10" v-model="sessionsDetail"></textarea>
    </div>
  </div>
</template>

<script scope>
import firebase from "~/plugins/firebase";

export default {
  data() {
    return {
      sessionTitle: this.sessionName,
      gameSystemOptions: [
        { value: 0, text: "ダンジョンズ＆ドラゴンズ" },
        { value: 1, text: "クトゥルフ神話TRPG" },
        { value: 2, text: "ソード・ワールド" },
      ],
      gameSystems: this.gameSystem,
      dateValue: this.date,
      maxPlayers: this.participants,
      sessionsDetail: this.detail,
    };
  },
  props: {
    topImage: {
      type: String,
      default: "No Image",
      required: true,
    },
    sessionName: {
      type: String,
      default: "No title",
      required: true,
    },
    creator: {
      type: String,
      default: "",
      required: true,
    },
    gameSystem: {
      type: Number,
      default: 0,
      required: true,
    },
    date: {
      type: String,
      default: "",
      required: true,
    },
    location: {
      type: String,
      default: "",
      required: true,
    },
    participants: {
      type: Number,
      required: true,
    },
    detail: {
      type: String,
      default: "",
      required: true,
    },
    sessionId: {
      type: String,
    },
  },
  methods: {
    updateSessoin() {
      const refSession = firebase
        .firestore()
        .collection("sessions")
        .doc(this.sessionId);

      return refSession
        .update({
          sessionName: this.sessionTitle,
          gameSystem: Number(this.gameSystem),
          date: this.dateValue,
          participants: Number(this.maxPlayers),
          detail: this.sessionsDetail,
        })
        .then(() => {
          this.$router.push({ path: `/my-page` });
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
  },
};
</script>
