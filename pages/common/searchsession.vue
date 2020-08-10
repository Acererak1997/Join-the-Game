<template>
  <div>
    <div class="mt-2 border border-secondary p-3">
      <h3>セッション検索</h3>
      <div>
        <b-dropdown id="dropdown-1" text="ゲームシステム" class="m-md-2">
          <b-dropdown-item>ダンジョンズ＆ドラゴンズ</b-dropdown-item>
          <b-dropdown-item>クトゥルフ神話TRPG</b-dropdown-item>
          <b-dropdown-item>ソードワールド</b-dropdown-item>
        </b-dropdown>
      </div>
      <div>
        <b-form-checkbox
          id="forBeginner"
          class="pb-1"
          name="forBeginner"
          value="accepted"
          unchecked-value="not_accepted"
        >
          初心者歓迎
        </b-form-checkbox>
        <b-form-checkbox
          id="onlyOnline"
          class="pb-1"
          name="onlyOnline"
          value="accepted"
          unchecked-value="not_accepted"
        >
          オンラインセッションのみ
        </b-form-checkbox>
      </div>
      <button type="button" class="btn btn-info">
        検索
      </button>
    </div>

    <div class="mt-3">
      <div class="d-flex align-items-center p-2 border mt-1">
        <div class="thumbnail">
          <b-img style="width: 140px;" src="~/assets/topimage.jpg" />
        </div>
        <div class="ml-3">
          <h5>セッションタイトル</h5>
          <div class="d-flex">
            <p class="mb-0 pr-2">
              参加人数：<span>0</span>/<span>5</span>名が参加中
            </p>
            <p class="mb-0p pr-2">
              日時：<span>2020年</span><span>11月</span><span>21日</span>
            </p>
            <p class="mb-0">開催場所：<span>世田谷区民ホール</span></p>
          </div>
          <div>
            <p>作成者：</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
