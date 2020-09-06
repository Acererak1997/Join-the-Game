<template>
  <div>
    <nuxt-link
      :to="`/common/session/${sessionId}`"
      style="text-decoration: none;"
    >
      <div class="col-md-5">
        <div class="card flex-md-row mb-4 shadow-sm h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary">{{
              gameSystem
            }}</strong>
            <h5 class="mb-0 text-dark">{{ sessionTitle }}</h5>
            <div class="mb-1 text-muted small">
              <font-awesome-icon icon="clock" /> {{ sessionDate }}
            </div>
            <p class="card-text mb-auto text-dark h6">
              {{ sessionDetail }}
            </p>
            <b-card-text class="small text-muted">
              <font-awesome-icon class="icon" icon="users" />
              {{ currentPlayersNum }}/{{ maxPlayersNum }}
              <font-awesome-icon icon="book-reader" /> {{ gameMaster }}
              <font-awesome-icon icon="map-marker-alt" />
              {{ sessionLocation }}
            </b-card-text>
            <a
              class="btn btn-outline-primary btn-sm"
              role="button"
              href="`/common/session/${sessionId}`"
              >Continue reading</a
            >
          </div>
          <img
            class="card-img-right flex-auto d-none d-lg-block"
            alt="Thumbnail [200x250]"
            :src="sessiontopImage"
            style="width: 400px; height: 250px;"
          />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    gameSystem: {
      type: String,
      default: "No GameSystem",
      required: true,
    },
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

<style>
.card-body {
  padding: 1rem;
}

.col-md-5 {
  max-width: 100%;
  padding: 0;
}
.text-muted {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.h6 {
  line-height: 1.5;
  /* height: 49px; */
  overflow: hidden;
}

.small {
  margin: 4px １px;
}

.icon {
  margin: 0 5px;
}
</style>
