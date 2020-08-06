<template>
  <div class="container">
    <div>
      <h2>ログイン</h2>
      <form>
        <div>
          <input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <input type="password" placeholder="パスワード" />
        </div>
        <button type="submit" @click.prevent="login" class="btn btn-primary">
          ログイン
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log('login')
      this.$store.dispatch('login')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
