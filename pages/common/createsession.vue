<template>
  <div>
    <div v-if="$store.getters.getStatus == null" class="text-center mt-5">
      <p>
        セッションを作成するには、<nuxt-link to="/login"> ログイン </nuxt-link
        >する必要があります。
      </p>
      <p>
        アカウントをお持ちでない方は<nuxt-link to="/register">
          サインアップ </nuxt-link
        >をしてください
      </p>
    </div>
    <div>
      <h3>セッションの作成</h3>
      <div role="session">
        <label for="input-live">セッション名:</label>
        <b-form-input
          id="input-live"
          v-model="sessionName"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="セッションのタイトルを入力してください"
          trim
        />
        <b-form-invalid-feedback id="input-live-feedback">
          セッション名は最低でも3文字以上である必要があります。
        </b-form-invalid-feedback>

        <div>
          <label for="date">開催日 </label>
          <b-form-datepicker id="date" v-model="dateValue" class="mb-2" />
        </div>

        <div>
          <label for="date">募集人数</label>
          <b-form-input
            v-model="number"
            type="number"
            placeholder="募集する人数を選択してください"
          />
        </div>

        <div>
          <label>開催場所</label>
          <b-form-input
            v-model="location"
            placeholder="住所、またはURLを入力してください"
          />
        </div>

        <div>
          <label>トップ画像</label>
          <b-form-file
            v-model="file"
            class="primary"
            :state="Boolean(file)"
            accept="image"
            placeholder="画像ファイルを選択してください"
            drop-placeholder="Drop file here..."
            @change="uploadFile"
          />
        </div>
      </div>

      <div>
        <label>セッションの詳細</label>
        <b-form-textarea
          id="textarea"
          v-model="detail"
          placeholder="セッションの詳細や補足情報を入力してください"
          rows="3"
          max-rows="6"
        />
      </div>

      <div>
        <b-form-checkbox
          id="beginner"
          v-model="checkedForBeginner"
          class="pb-1"
          name="beginner"
          value="true"
          unchecked-value="false"
        >
          初心者歓迎
        </b-form-checkbox>
        <b-form-checkbox
          id="online"
          v-model="checkedOnline"
          class="pb-1"
          name="online"
          value="true"
          unchecked-value="false"
        >
          オンラインセッション
        </b-form-checkbox>
      </div>

      <button
        type="button"
        class="btn btn-outline-secondary"
        @click="createSession"
      >
        セッションを作成する
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"

export default {
  data() {
    return {
      user: "",
      sessionName: "",
      dateValue: "",
      number: "",
      file: null,
      url: "",
      location: "",
      detail: "",
      checkedForBeginner: false,
      checkedOnline: false,
    }
  },
  computed: {
    nameState() {
      return this.sessionName.length > 2 ? true : false
    },
  },
  mounted() {
    if (this.$store.getters.getStatus !== null) {
      this.user = firebase.auth().currentUser
      console.log(this.user)
      console.log(this.user.uid)
    }
  },
  methods: {
    createSession() {
      const newSession = firebase
        .firestore()
        .collection("sessions")
        .doc(this.user.uid)
      // .database()
      // .ref("sessions")
      // .child(this.user.uid + this.sessionName)

      newSession.set({
        creator: this.user.displayName,
        sessionName: this.sessionName,
        date: this.dateValue,
        participants: this.number,
        location: this.location,
        topImage: this.url,
        detail: this.detail,
        checkedForBeginner: this.checkedForBeginner,
        checkedOnline: this.checkedOnline,
      })
    },
    uploadFile(event) {
      let file = event.target.files[0]
      const storageRef = firebase.storage().ref("images/" + file.name)
      storageRef.put(file).then(() => {
        storageRef
          .getDownloadURL()
          .then((url) => {
            this.url = url
          })
          .catch((error) => {
            console.log(error)
          })
      })
    },
  },
}
</script>
