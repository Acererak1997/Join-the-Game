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

    <div v-if="$store.getters.getStatus !== null" class="mt-3">
      <validation-observer v-slot="{ invalid }">
        <validation-provider
          v-slot="{ errors }"
          rules="required"
          name="セッション名"
        >
          <h3>セッションの作成</h3>
          <p>
            セッション項目を入力してください（<span class="text-danger">※</span
            >は必須項目です）
          </p>
          <h5 for="input-live" class="mt-3">
            <span class="text-danger">※</span>セッション名:
          </h5>
          <b-form-input
            id="input-live"
            v-model="sessionName"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="セッションのタイトルを入力してください"
            trim
          />
          <p v-show="errors.length" class="help is-danger text-danger">
            {{ errors[0] }}
          </p>
        </validation-provider>
        <div role="session">
          <b-form-invalid-feedback id="input-live-feedback">
            セッション名は最低でも3文字以上である必要があります。
          </b-form-invalid-feedback>

          <div class="mt-3">
            <h5><span class="text-danger">※</span>ゲームシステム</h5>
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="ゲームシステム"
            >
              <b-form-select
                v-model="gameSystem"
                :options="gameSystemOptions"
              />
              <p v-show="errors.length" class="help is-danger text-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
          </div>

          <div class="mt-3">
            <h5 for="date"><span class="text-danger">※</span>開催日</h5>
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="開催日"
            >
              <b-form-datepicker id="date" v-model="dateValue" class="mb-2" />
              <p v-show="errors.length" class="help is-danger text-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
          </div>

          <div class="mt-3">
            <h5 for="date"><span class="text-danger">※</span>募集人数</h5>
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="募集人数"
            >
              <b-form-input
                v-model="number"
                type="number"
                placeholder="募集する人数を選択してください"
              />
              <p v-show="errors.length" class="help is-danger text-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
          </div>

          <div class="mt-3">
            <h5><span class="text-danger">※</span>開催地</h5>
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="開催地"
            >
              <b-form-input
                v-model="location"
                placeholder="住所、またはURLを入力してください"
              />
              <p v-show="errors.length" class="help is-danger text-danger">
                {{ errors[0] }}
              </p>
            </validation-provider>
          </div>

          <div class="mt-3">
            <h5>トップ画像</h5>
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

        <div class="mt-3">
          <h5>セッションの詳細</h5>
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

        <div>
          <p class="text-danger" v-show="invalid">
            必須項目を全て入力してください
          </p>
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="createSession"
            :disabled="invalid"
          >
            セッションを作成する
          </button>
        </div>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

export default {
  data() {
    return {
      user: "",
      sessionName: "",
      gameSystemOptions: [
        { value: 0, text: "ダンジョンズ＆ドラゴンズ" },
        { value: 1, text: "クトゥルフ神話TRPG" },
        { value: 2, text: "ソード・ワールド" },
      ],
      gameSystem: null,
      dateValue: "",
      number: "",
      file: null,
      url: "",
      location: "",
      detail: "",
      checkedForBeginner: false,
      checkedOnline: false,
    };
  },
  computed: {
    nameState() {
      return this.sessionName.length > 2 ? true : false;
    },
  },
  mounted() {
    if (this.$store.getters.getStatus !== null) {
      this.user = firebase.auth().currentUser;
    }
  },
  methods: {
    createSession() {
      const newSession = firebase.firestore().collection("sessions").doc();
      newSession
        .set({
          creatorId: this.user.uid,
          creator: this.user.displayName,
          sessionName: this.sessionName,
          gameSystem: this.gameSystem,
          date: this.dateValue,
          participants: Number(this.number),
          members: 0,
          location: this.location,
          topImage: this.url,
          detail: this.detail,
          checkedForBeginner: Boolean(this.checkedForBeginner),
          checkedOnline: Boolean(this.checkedOnline),
        })
        .then(() => {
          this.$router.push({ name: "common-my-page" });
        })
        .catch(function (error) {
          console.error("Error adding Session: ", error);
        });
    },
    uploadFile(event) {
      let file = event.target.files[0];
      const storageRef = firebase.storage().ref("images/" + file.name);
      storageRef.put(file).then(() => {
        storageRef
          .getDownloadURL()
          .then((url) => {
            this.url = url;
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
  },
};
</script>
