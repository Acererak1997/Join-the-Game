<template>
  <b-container>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          Join the Game
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/common/top">
              ホーム
            </b-nav-item>
            <b-nav-item to="/common/searchsession">
              セッションを探す
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <nuxt-link to="/login">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  v-if="$store.getters.getStatus == null"
                >
                  ログイン
                </button>
              </nuxt-link>
            </b-nav-item>
            <b-nav-item right>
              <nuxt-link to="/register">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  v-if="$store.getters.getStatus == null"
                >
                  サインアップ
                </button>
              </nuxt-link>
              <nuxt-link to="/common/top">
                <button
                  @click="logout"
                  type="button"
                  class="btn btn-outline-secondary"
                  v-if="$store.getters.getStatus !== null"
                >
                  ログアウト
                </button>
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <nuxt-child />

    <div color="stylish-color-dark" class="page-footer font-small pt-4 mt-4">
      <div class="footer-copyright text-center py-3">
        &copy; 2020 Copyright:
        <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </div>
    </div>
  </b-container>
</template>

<script>
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  computed: {
    // ログインしたらFontAwesomeから人型アイコンを取得してログインのところに張る
    faMapMarkerAlt() {
      return faMapMarkerAlt
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
    },
  },
}
</script>

<style></style>
