<template>
  <div class="topimagebox">
    <b-img class="img-fluid" src="~/assets/topimage.jpg" fluid />
    <div class="card-img-overlay">
      <nuxt-link to="/login">
        <button
          type="button"
          class="btn btn-outline-primary"
          v-if="$store.getters.getStatus == null"
        >
          ログイン
        </button>
      </nuxt-link>
      <nuxt-link to="/register">
        <button
          type="button"
          class="btn btn-outline-primary"
          v-if="$store.getters.getStatus == null"
        >
          サインアップ
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.topimagebox {
  position: relative;
}
.card-img-overlay {
  padding: 0;
  top: calc(70% - 0.5rem);
  text-align: center;
  font-weight: bold;
}
</style>
