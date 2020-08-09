<template>
  <b-container fluid>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">
          Join the Game
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              ホーム
            </b-nav-item>
            <b-nav-item>
              セッションを探す
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <nuxt-link to="/login">
                <button type="button" class="btn btn-outline-secondary">
                  ログイン
                </button>
              </nuxt-link>
            </b-nav-item>
            <b-nav-item right>
              <nuxt-link to="/register">
                <button type="button" class="btn btn-outline-secondary">
                  サインアップ
                </button>
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt-child />

    <mdb-footer
      color="stylish-color-dark"
      class="page-footer font-small pt-4 mt-4"
    >
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 Copyright:
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </mdb-container>
      </div>
    </mdb-footer>
  </b-container>
</template>

<script>
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    // ログインしたらFontAwesomeから人型アイコンを取得してログインのところに張る
    faMapMarkerAlt() {
      return faMapMarkerAlt
    },
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
