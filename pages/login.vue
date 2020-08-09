<template>
  <section
    class="login-form d-flex flex-solumn justify-content-center align-items-center w-100 text-center"
  >
    <div class="login-form__field card rounded-0 pt-5 pb-3">
      <i
        class="login-form__budge fas fa-user-circle text-primary bg-white rounded-circle"
      />
      <div class="card-body">
        <h1
          class="login-form__heading card-title text-primary font-weight-bold mb-0"
        >
          ログイン
        </h1>

        <hr class="bg-primary mt-0 mb-4" />

        <p class="card-text text-muted mb-4">
          メールアドレスとパスワードを入力してください。
        </p>

        <div class="input-group mx-auto mb-4">
          <div class="input-group-prepend">
            <span
              id="basic-addon1"
              class="input-group-text bg-primary text-white"
            >
              <i class="fas fa-user" />
            </span>
          </div>
          <input
            v-model="email"
            class="form-control"
            type="text"
            placeholder="Username"
          />
        </div>

        <div class="input-group mx-auto mb-4">
          <div class="input-group-prepend">
            <span
              id="basic-addon1"
              class="input-group-text bg-primary text-white"
            >
              <i class="fas fa-key" />
            </span>
          </div>
          <input
            v-model="password"
            class="form-control rouded-0"
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          class="login-form__button btn btn-primary w-75 mb-4"
          type="button"
          :disabled="checkInput"
          @click="login"
        >
          Login
        </button>

        <div
          class="login-form__attention d-flex justify-content-between my-o mx-auto"
        >
          <div class="custom-control custom-checkbox">
            <label class="custom-control-label" for="remember-me"
              >情報を記憶する</label
            >
          </div>
          <a class="card-link" href="#">
            <u>パスワードを忘れた方はこちら</u>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style></style>
