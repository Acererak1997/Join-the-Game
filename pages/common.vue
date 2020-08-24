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
              セッションへ参加
            </b-nav-item>
            <b-nav-item to="/common/createsession">
              セッションを作成
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <nuxt-link to="/login">
                <button
                  v-if="$store.getters.getStatus == null"
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  ログイン
                </button>
              </nuxt-link>
            </b-nav-item>
            <b-nav-item right>
              <nuxt-link to="/register">
                <button
                  v-if="$store.getters.getStatus == null"
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  サインアップ
                </button>
              </nuxt-link>
              <nuxt-link to="/common/top">
                <button
                  v-if="$store.getters.getStatus !== null"
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="logout"
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
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
