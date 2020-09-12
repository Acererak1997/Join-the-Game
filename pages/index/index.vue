<template>
  <div>
    <main role="main">
      <div class="jumbotron">
        <div class="container text">
          <h2 class="display-3">
            Your Friends.
          </h2>
          <h2 class="display-3">
            Your Games.
          </h2>
          <h2 class="display-3">
            Your Table.
          </h2>
          <p>
            <nuxt-link
              class="btn btn-primary btn-lg"
              to="/searchsession"
              role="button"
            >
              Join a Game &raquo;
            </nuxt-link>
          </p>
        </div>
      </div>
    </main>

    <div class="text-center">
      <h4 class="m-4">How to Use</h4>
      <div class="d-flex bd-highlight">
        <div class="flex-fill bd-highlight w-25 p-2">
          <h5>アカウント作成</h5>
          <font-awesome-icon icon="sign-in-alt" class="fa-4x m-3" />
          <p>無料でアカウントを作成して、ログインしましょう。</p>
        </div>
        <div class="flex-fill bd-highlight w-25 p-2">
          <h5>ゲームを選ぶ</h5>
          <font-awesome-icon icon="search" class="fa-4x m-3" />
          <p>
            Join a
            Gameから募集中のゲームを選んで参加することです。遊びたいゲームとセッションを選んで参加ボタンを押しましょう。
          </p>
        </div>
        <div class="flex-fill bd-highlight w-25 p-2">
          <h5>セッションを作る</h5>
          <font-awesome-icon icon="users" class="fa-4x m-3" />
          <p>
            自分でセッションを募集することも可能です。あなたが選んだゲームでセッションを作成しましょう。友達を誘っても、見知らぬ人とでも遊ぶことができます。
          </p>
        </div>
        <div class="flex-fill bd-highlight w-25 p-2">
          <h5>プレイ！</h5>
          <font-awesome-icon icon="play-circle" class="fa-4x m-3" />
          <p>準備はできました。ゲームをはじめましょう！</p>
        </div>
      </div>
    </div>

    <footer class="container text-center">
      <p>&copy; Join Company 2021</p>
    </footer>
  </div>
</template>

<script></script>

<style>
.jumbotron {
  background-image: url("../../assets/image.jpg");
  background-size: cover;
  background-position: center 60%;
}
.text {
  color: #fff;
}
.image {
  width: 300px;
  height: 300px;
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
