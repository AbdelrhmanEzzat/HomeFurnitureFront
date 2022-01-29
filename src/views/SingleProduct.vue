<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div class="shoptitle"></div>
              <h1 class="shopmain">Product</h1>
              <h3 class="shopmain">
                Contemporary Seating Collection - Sustainably made in the UK
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <!-- ------------------------------------------ -->
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="row" style="width:100%">
            <div class="col-sm-8">
              <img
                src="https://cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-KruzeLounge2.jpg?v=1593703097.webp"
                alt=""
              />
            </div>
            <div class="col-sm-8" style="margin-left: 4%;">
              <h3 style="font-weight: 600;">Designing Folding Chair</h3>
              <h5 style="font-size: larger;">$250</h5>
              <hr />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                ut officia ab aliquid tempora eius, mollitia repellendus
                voluptate laboriosam, tempore porro amet magni quasi laudantium
                error officiis voluptas aut. Autem?
              </p>
              <br />
              <hr />
              <!-- Add to cart -->
              <div class="col-sm-4">
                <div class="cart-op" style="padding-top:3%">
                  <span class="letter">-</span>
                  <span class="letter" style="font-weight:300;font-size:20px"
                    >1</span
                  >
                  <span class="letter">+</span>
                </div>
              </div>
              <div class="col-sm-4">
                <md-button
                  class=""
                  style="width: 30%;float: right;margin-top: auto;"
                  >ADD TO CART</md-button
                >
              </div>
              <!-- Wisthlist -->
              <div style="padding: 12% 1%;">
                <span
                  class="post-like text-muted tooltip-test"
                  data-toggle="tooltip"
                  data-original-title="I like this post!"
                >
                  <a href="">
                    <i
                      class="fa fa-heart"
                      style="color: #e31c1c;float: left;"
                    ></i>
                    <p style="margin: -1%;color:black">ADD TO WISHLIST</p>
                  </a>
                </span>
              </div>
              <!-- Categories -->
              <div class="row" style="width:100%">
                <div class="col-sm-4">
                  <p>
                    <span style="font-weight:bold">CATEGORIES: </span>
                    <a href=""> ACCESSORIES COLLECTION</a>,
                    <a href=""
                      >COMBINED <br />
                      MINI DRESS</a
                    >, <a href="">DESIGNER CHAIR </a>, <br />
                    <a href="">SHOP MODERN</a>, <a href="">STUDENT chair</a>
                  </p>
                </div>
                <div class="col-sm-4">
                  <!-- Social icon -->
                  <div
                    class="social-icon"
                    style="float:left;padding: 0% 30%;margin: -13% 30%;"
                  >
                    <md-list-item
                      style="float:left"
                      href="https://twitter.com/CreativeTim"
                      target="_blank"
                    >
                      <i class="fab fa-twitter"></i>
                      <p class="hidden-lg">Twitter</p>
                      <md-tooltip md-direction="bottom"
                        >Follow us on Twitter</md-tooltip
                      >
                    </md-list-item>
                    <md-list-item
                      style="float:inherit"
                      href="https://www.facebook.com/CreativeTim"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-square"></i>
                      <p class="hidden-lg">Facebook</p>
                      <md-tooltip md-direction="bottom"
                        >Like us on Facebook</md-tooltip
                      >
                    </md-list-item>
                    <md-list-item
                      style="float:inherit;"
                      href="https://www.instagram.com/CreativeTimOfficial"
                      target="_blank"
                    >
                      <i class="fab fa-instagram"></i>
                      <p class="hidden-lg">Instagram</p>
                      <md-tooltip md-direction="bottom"
                        >Follow us on Instagram</md-tooltip
                      >
                    </md-list-item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "singleproduct",
  bodyClass: "singleproduct-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/leaf5.jpg"),
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.letter {
  border-radius: 4px;
  border: 1px solid #e2e2e2;
  float: left;
  font-size: 46px;
  margin: 0 2px 0 0;
  text-align: center;
  font-size: 24px;
  height: 41px;
  line-height: 8px;
  padding: 15px 0;
  width: 47px;
  font-weight: 600;
}
.textcenter {
  text-align: center;
  padding-bottom: 6%;
  padding-top: 2%;
}
</style>
