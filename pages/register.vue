<template>
  <div class="container">
    <div>
      <div class="wrapper">
        <form class="form-register">
          <h2 class="form-register-heading text-center">サインアップ</h2>
          <div>
            <input
              class="form-control"
              type="email"
              placeholder="email"
              v-model="email"
              required
            />
          </div>
          <div>
            <input
              class="form-control"
              type="password"
              placeholder="パスワード"
              v-model="password"
              required
            />
          </div>
          <div>
            <input
              class="form-control"
              type="text"
              placeholder="ニックネーム"
              v-model="displayName"
              required
            />
          </div>
          <button
            type="submit"
            @click.prevent="registerUser"
            class="btn btn-lg btn-primary btn-block"
          >
            新規登録
          </button>
          <p class="small">
            アカウントをお持ちの方は
            <nuxt-link to="login">ログイン</nuxt-link>へ
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      displayName: '',
    }
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log(response)
          response.user.updateProfile({
            displayName: this.displayName,
          })
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped>
.wrapper {
  margin: 80px;
}

.form-register {
  max-width: 300px;
  margin: 0 auto;
  background: #fff;
  padding: 15px 40px 50px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
}

.form-register-heading {
  margin-bottom: 15px;
}

input {
  margin-bottom: 20px;
}
</style>
