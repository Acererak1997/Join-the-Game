<template>
  <div class="col-md-4">
    <h4>{{ title }}</h4>
    <div class="image">
      <img :img-src="topImage" />
      <div class="mask">
        <div class="caption">
          {{ message }}
        </div>
      </div>
    </div>
    <p>
      <nuxt-link
        class="btn btn-secondary"
        to="/common/searchsession"
        role="button"
      >
        募集を見る &raquo;
      </nuxt-link>
    </p>
  </div>
</template>

<script scope>
export default {
  props: {
    title: {
      type: String,
      default: "No title",
      required: true,
    },
    topImage: {
      type: String,
      default: "No Image",
      required: true,
    },
    message: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style>
.image {
  width: 280px;
  height: 188px;
  overflow: hidden;
  position: relative;
}
.image .caption {
  font-size: 130%;
  text-align: center;
  color: #fff;
}
.image .mask {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
}
.image:hover .mask {
  opacity: 1;
  padding-top: 80px;
}
</style>
