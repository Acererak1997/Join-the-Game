<template>
  <div class="jumbotron">
    <h3>{{ $store.getters.getUserName }}さんのページ</h3>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link">あなたが主催しているセッション</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active">あなたが参加中のセッション</a>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";

export default {
  data() {
    return {};
  },
  mounted() {
    firebase.auth().currentUser;
  },
  computed:{
    hostSessions: function(){
      
    }
  },
  created() {
    this.$store.dispatch("sessionlist/getSessionslist");
  },
};
</script>
