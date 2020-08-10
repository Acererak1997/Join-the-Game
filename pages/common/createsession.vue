<template>
  <div>
    <div class="text-center mt-5" v-if="$store.getters.getStatus == null">
      <p>
        セッションを作成するには、<nuxt-link to="/login">ログイン</nuxt-link
        >する必要があります。
      </p>
      <p>
        アカウントをお持ちでない方は<nuxt-link to="/register"
          >サインアップ</nuxt-link
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
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback">
          セッション名は最低でも3文字以上である必要があります。
        </b-form-invalid-feedback>

        <div>
          <label for="date">開催日 </label>
          <b-form-datepicker
            id="date"
            v-model="dateValue"
            class="mb-2"
          ></b-form-datepicker>
        </div>

        <div>
          <label for="date">募集人数</label>
          <b-form-input
            v-model="number"
            type="number"
            placeholder="募集する人数を選択してください"
          ></b-form-input>
        </div>

        <div>
          <label>開催場所</label>
          <b-form-input
            v-model="location"
            placeholder="住所、またはURLを入力してください"
          ></b-form-input>
        </div>

        <div>
          <label>トップ画像</label>
          <b-form-file
            class="primary"
            v-model="file"
            :state="Boolean(file)"
            placeholder="画像ファイルを選択してください"
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ file ? file.name : "" }}</div>
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
        ></b-form-textarea>
      </div>

      <div>
        <b-form-checkbox
          id="beginner"
          v-model="checkedForBeginner"
          class="pb-1"
          name="beginner"
          value="accepted"
          unchecked-value="not_accepted"
        >
          初心者歓迎
        </b-form-checkbox>
        <b-form-checkbox
          id="online"
          v-model="status"
          class="pb-1"
          name="online"
          value="accepted"
          unchecked-value="not_accepted"
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
export default {
  computed: {
    nameState() {
      return this.sessionName.length > 2 ? true : false
    },
  },
  data() {
    return {
      sessionName: "",
      dateValue: "",
      number: "",
      file: null,
      location: "",
      detail: "",
    }
  },
}
</script>
