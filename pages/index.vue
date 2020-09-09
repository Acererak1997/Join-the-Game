<template>
  <div>
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="dark"
        class="p4 navbar-expand-lg"
      >
        <b-container>
          <b-navbar-brand to="/">
            Let's Join!
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">
                Home
              </b-nav-item>
              <b-nav-item to="/searchsession">
                Join a Game
              </b-nav-item>
              <b-nav-item to="/createsession">
                Create Your Game
              </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav
              v-if="$store.getters.getStatus == null"
              class="ml-auto"
            >
              <b-nav-item right>
                <nuxt-link to="/login">
                  <button type="button" class="btn btn-outline-secondary">
                    Login
                  </button>
                </nuxt-link>
                <nuxt-link to="/register">
                  <button type="button" class="btn btn-outline-secondary">
                    Create Account
                  </button>
                </nuxt-link>
              </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav
              v-if="$store.getters.getStatus !== null"
              class="ml-auto"
            >
              <b-nav-item-dropdown right>
                <template v-slot:button-content>
                  <em>{{ $store.getters.getUserName }}</em>
                </template>
                <b-dropdown-item to="/my-page">
                  Mypage
                </b-dropdown-item>
                <b-dropdown-item @click="logout">
                  Logout
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <div class="container">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
