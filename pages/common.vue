<template>
  <b-container>
    <div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">Join the Game</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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

            <b-navbar-nav
              class="ml-auto"
              v-if="$store.getters.getStatus == null"
            >
              <b-nav-item right>
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-outline-secondary">
                    ログイン
                  </button>
                </nuxt-link>
                <nuxt-link to="/register">
                  <button type="button" class="btn btn-outline-secondary">
                    サインアップ
                  </button>
                </nuxt-link>
              </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav
              class="ml-auto"
              v-if="$store.getters.getStatus !== null"
            >
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>{{ $store.getters.getUserName }}</em>
                </template>
                <b-dropdown-item to="/common/my-page"
                  >マイページ</b-dropdown-item
                >
                <b-dropdown-item @click="logout">サインアウト</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
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
