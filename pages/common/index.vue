<template>
  <div>
    <main role="main">
      <div class="jumbotron">
        <div class="container">
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
              to="/common/searchsession"
              role="button"
            >
              Join a Game &raquo;
            </nuxt-link>
          </p>
        </div>
      </div>

      <!-- <div class="container">
        <h3>レコメンド</h3>
        <div class="row">
          <div class="col-md-4">
            <h4>ダンジョンズ＆ドラゴンズ</h4>
            <nuxt-link to="/common/searchsession" role="button">
              <div class="image">
                <img src="~/assets/DnDimage.jpg" />
                <div class="mask">
                  <div class="caption"></div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <h4>コール・オヴ・クトゥルフ</h4>
            <nuxt-link to="/common/searchsession" role="button">
              <div class="image">
                <img src="~/assets/CoC.jpg" />
                <div class="mask">
                  <div class="caption"></div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-md-4">
            <h4>ソード・ワールド</h4>
            <nuxt-link to="/common/searchsession" role="button">
              <div class="image">
                <img src="~/assets/SW.jpg" />
                <div class="mask">
                  <div class="caption"></div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>

        <hr />
      </div> -->
    </main>

    <footer class="container">
      <p>&copy; Join Company 2021</p>
    </footer>
  </div>
</template>

<script></script>

<style>
.jumbotron {
  /* background-image: url("../../assets/image.jpg"); */
  background-size: cover;
  background-position: center 60%;
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
