<template>
  <div class="card-group">
    <nuxt-link
      :to="`/common/session/${sessionId}`"
      style="text-decoration: none;"
    >
      <div class="remove">
        <b-card
          img-alt="Image"
          img-top
          :title="sessionTitle"
          :img-src="sessiontopImage"
        >
          <b-card-text class="text-muted">
            {{ sessionDetail }}
          </b-card-text>
          <b-card-text class="small text-muted">
            <font-awesome-icon icon="users" /> {{ currentPlayersNum }}/{{
              maxPlayersNum
            }}
            <font-awesome-icon icon="book-reader" /> {{ gameMaster }}
          </b-card-text>
          <b-card-text class="small text-muted">
            <font-awesome-icon icon="clock" /> {{ sessionDate }}
            <font-awesome-icon icon="map-marker-alt" /> {{ sessionLocation }}
          </b-card-text>
          <!-- 余裕があれば有効化するべき -->
          <!-- <span class="badge badge-primary" v-if="session.checkedForBeginner"
            >初心者歓迎</span
          >
          <span class="badge badge-primary" v-if="session.checkedOnline"
            >オンラインセッション</span
          > -->
        </b-card>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    sessionId: {
      type: String,
      default: "No title",
      required: true,
    },
    sessionTitle: {
      type: String,
      default: "No title",
      required: true,
    },
    sessiontopImage: {
      type: String,
      default: "適当なイメージ",
      required: true,
    },
    sessionDetail: {
      type: String,
      default: "詳細なし",
      required: true,
    },
    sessionDate: {
      type: String,
      default: "詳細なし",
      required: true,
    },
    sessionLocation: {
      type: String,
      default: "詳細なし",
      required: true,
    },
    currentPlayersNum: {
      type: Number,
      default: 0,
      required: true,
    },
    maxPlayersNum: {
      type: Number,
      default: 0,
      required: true,
    },
    gameMaster: {
      type: String,
      default: "ゲームマスター",
      required: true,
    },
  },
};
</script>
