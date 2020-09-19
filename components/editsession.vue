<template>
  <div class="d-flex mt-3">
    <div class="w-50 b">
      <b-img
        class="bd-placeholder-img card-img-top"
        :src="topImage"
        focusable="false"
        role="img"
      />

      <div class="mt-3 mb-3">
        <button type="button" class="btn btn-info">
          更新する
        </button>
      </div>
    </div>

    <div class="ml-3 w-50">
      <h2>
        <input type="text" :value="sessionName" />
      </h2>
      <table class="table table-striped mt-2">
        <tbody>
          <tr>
            <th scope="row">ゲームマスター：</th>
            <td>
              <input type="text" :value="creator" />
            </td>
          </tr>
          <tr>
            <th scope="row">ゲームシステム：</th>
            <td>
              <input type="text" :value="gameSystem" />
            </td>
          </tr>
          <tr>
            <th scope="row">開始日：</th>
            <td>
              <input type="text" :value="date" />
            </td>
          </tr>
          <tr>
            <th scope="row">ロケーション：</th>
            <td>
              <input type="text" :value="location" />
            </td>
          </tr>
          <tr>
            <th scope="row">募集人数：</th>
            <td>
              <input type="text" :value="participants" />
            </td>
          </tr>
        </tbody>
      </table>
      <h4>セッション詳細</h4>
      <textarea cols="60" rows="10" :value="detail"></textarea>
    </div>
  </div>
</template>

<script scope>
export default {
  props: {
    topImage: {
      type: String,
      default: "No Image",
      required: true,
    },
    sessionName: {
      type: String,
      default: "No title",
      required: true,
    },
    creator: {
      type: String,
      default: "",
      required: true,
    },
    gameSystem: {
      type: String,
      default: "",
      required: true,
    },
    date: {
      type: String,
      default: "",
      required: true,
    },
    location: {
      type: String,
      default: "",
      required: true,
    },
    participants: {
      type: Number,
      required: true,
    },
    detail: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>
