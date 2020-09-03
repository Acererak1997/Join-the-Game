<template>
  <div>
    <main role="main">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Let's Join!</h1>
          <p>
            このサイトはオンラインでのテーブルトップゲームの素晴らしい体験をあなたに提供します
          </p>
          <p>
            <a
              class="btn btn-primary btn-lg"
              to="@/common/searchsession"
              role="button"
              >セッションへ参加する &raquo;</a
            >
          </p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <a
                class="btn btn-secondary"
                to="/common/searchsession"
                role="button"
                >View details &raquo;</a
              >
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.
            </p>
            <p>
              <a
                class="btn btn-secondary"
                to="/common/searchsession"
                role="button"
                >View details &raquo;</a
              >
            </p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <a
                class="btn btn-secondary"
                to="/common/searchsession"
                role="button"
                >View details &raquo;</a
              >
            </p>
          </div>
        </div>

        <hr />
      </div>
    </main>

    <footer class="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jumbotron {
  background-image: url("https://picsum.photos/600/400/?image=94");
  background-size: cover;
  background-position: center 60%;
}
</style>
