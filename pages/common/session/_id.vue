<template>
  <div>{{ session.sessionName }}</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      session: "",
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
          topImage: sessionField.topImage,
        };
      })
      .catch((response) => console.log(response));
  },
};
</script>
