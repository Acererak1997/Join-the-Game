<template>
  <div>
    <b-img
      class="bd-placeholder-img card-img-top"
      width="100%"
      :src="session.topImage"
      focusable="false"
      role="img"
    />
    {{ session.sessionName }}
    <button
      v-if="!post.participating_status"
      type="button"
      class="btn btn-info"
    >
      参加する
    </button>
    <button v-if="post.participating_status" type="button" class="btn btn-info">
      退出する
    </button>
    <p>作成者：{{ session.creator }}</p>
    <p>参加者：</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      session: [],
    };
  },
  mounted() {
    axios
      .get(
        `https://firestore.googleapis.com/v1/projects/join-the-game-74125/databases/(default)/documents/sessions/${this.id}`
      )
      .then((response) => {
        const sessionField = response.data.fields;
        console.log(response.data);
        this.session = {
          id: sessionField.id,
          creator: sessionField.creator.stringValue,
          date: sessionField.date,
          sessionName: sessionField.sessionName.stringValue,
          gameSystem: sessionField.gameSystem,
          location: sessionField.location,
          participants: sessionField.participants,
          detail: sessionField.detail,
          checkedOnline: sessionField.checkedOnline,
          checkedForBeginner: sessionField.checkedForBeginner,
          topImage: sessionField.topImage.stringValue,
        };
      })
      .catch((response) => console.log(response));
  },
};
</script>
