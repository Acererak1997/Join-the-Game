<template>
  <div>
    <b-img
      class="bd-placeholder-img card-img-top"
      width="100%"
      :src="identifySession.topImage"
      focusable="false"
      role="img"
    />
    {{ identifySession.sessionName }}
    <button type="button" class="btn btn-info">
      参加する
    </button>
    <button type="button" class="btn btn-info">
      退出する
    </button>
    <p>作成者：{{ identifySession.creator }}</p>
    <p>参加者：</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      session: [],
    };
  },
  computed: {
    identifySession() {
      return this.$store.getters["sessionlist/getSessoinData"].find(
        (session) => session.id === this.$route.params.id
      );
    },
  },
  created: function () {
    this.$store.dispatch("sessionlist/getSessionslist");
  },
};
</script>
