<template>
  <div class="wrapper">
    <parallax class="h-car">
      <carousel
        :per-page="1"
        loop
        :speed="700"
        :autoplay-timeout="5000"
        :mouse-drag="false"
        navigationEnabled
        navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
        navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
      >
        <slide>
          <div class="carousel-caption">
            <h3 class="title" id="cap">
              <md-icon>chair</md-icon>
             Modern and contemporary furniture <br> to match your style and budget.
            </h3>
            <md-button class="md-primary md-round">desgin your home</md-button>

          </div>
          <img
            :src="carousel1"
            alt="carousel1"
            class="car-img"
            style="height: 100%;"
          />
          <div class="image-wrapper">
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow" />
            
          </div>
        </slide>
        <slide>
          <div class="carousel-caption">
            <h3 class="title" id="cap">
              <md-icon>home</md-icon>
              Desgin your Home and shop for new items
            </h3>
              <md-button class="md-primary md-round">visit store</md-button>

          </div>
          <img :src="carousel2" alt="carousel2" class="car-img" />
          <div class="image-wrapper">
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow" />
          </div>
        </slide>
        <slide>
          <div class="carousel-caption">
            <h3 class="title" id="cap">
              <md-icon>post_add</md-icon>
              Publish your work here as Designer
            </h3>
            <md-button class="md-primary md-round md-dark">add post</md-button>

          </div>
          <img :src="carousel3" alt="carousel3" class="car-img" />
          <div class="image-wrapper">
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow" />
          </div>
        </slide>
      </carousel>
    </parallax>
    <!-- ------------------------------------------------------------------------- -->
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Let's talk product</h2>
              <h4 class="description">
                Home Furniture Store was created for the new ways we live and
                work.We make beautifully designed, sustainable furniture in the
                UK. Human centric furniture, designed for living.
              </h4>
            </div>
          </div>
          <div
            class="md-layout-item md-medium-size-33 md-small-size-100"
            style="display: block;margin-left: auto;margin-right: auto"
          >
            <md-button class="md-primary">Our Collection</md-button>
          </div>
          <!-- ------------------------Sections--------------------------------- -->
          <div class="features text-center">
            <div class="md-layout" style="padding-top: 5%;">
              <div class="info">
                <div class="hovereffect">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0399/1126/0318/collections/hero_eafa3f87-3f78-4352-86ac-139dfef3512a_389x250.jpg?v=1596788896"
                    alt="Rounded Image"
                    class="img-raised rounded img-fluid"
                    style="width: 100%;height: auto;"
                  />
                  <div class="overlay">
                    <h2>
                      <a href="#">Home Office</a>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-66 md-small-size-100">
                <div class="info">
                  <div class="hovereffect">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0399/1126/0318/collections/Boss_atHome_Product_-_Ola2_389x243.jpg?v=1596792348"
                      alt="Rounded Image"
                      class="img-raised rounded img-fluid"
                      style="width: 100%;height: auto;"
                    />
                    <div class="overlay">
                      <h2>
                        <a href="#">Dining Tables and Chairs</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-66 md-small-size-100">
                <div class="info">
                  <div class="hovereffect">
                    <img
                      src="//cdn.shopify.com/s/files/1/0399/1126/0318/collections/Boss_atHome_Product_-_Bodie2_1920x1200.jpg?v=1596792894"
                      alt="Rounded Image"
                      class="img-raised rounded img-fluid"
                      style="width: 100%;height: 225px;"
                    />
                    <div class="overlay">
                      <h2>
                        <a href="#">Lounge</a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- --------------------------Featured products--------------------------------- -->
          <div class="features text-center" style="padding-top: 5%;">
            <h2 class="title text-center" style="margin-bottom: 0px;">
              Featured products
            </h2>

            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          class="im"
                          src="	https://www.ikea.com/eg/en/images/products/strandm…djuparp-dark-green__0531300_pe647255_s5.jpg?f=xxs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      Paloma Chair
                    </h4>
                    <p>EGP 11,150</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          src="https://www.ikea.com/eg/en/images/products/soederh…-end-samsta-orange__0802720_pe768564_s5.jpg?f=xxs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      ÖDERHAMN
                    </h4>
                    <p>EGP 27,285</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          src="	https://www.ikea.com/eg/en/images/products/remsta-…mchair-hakebo-beige__0908599_pe783322_s5.jpg?f=xs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      REMSTA
                    </h4>
                    <p>EGP 3,995</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          src="https://www.ikea.com/eg/en/images/products/stockho…ofa-seglora-natural__0183763_pe334809_s5.jpg?f=xs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      STOCKHOLM
                    </h4>
                    <p>EGP 39,995</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          src="	https://www.ikea.com/eg/en/images/products/poaeng-…neer-hillared-beige__0497125_pe628952_s5.jpg?f=xs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      STRANDMON
                    </h4>
                    <p>EGP 5,750</p>
                  </div>
                </div>
              </div>

              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="cards">
                  <div class="info">
                    <div class="icon">
                      <a href="">
                        <img
                          src="https://www.ikea.com/eg/en/images/products/landskr…ed-light-green-wood__0602122_pe680191_s5.jpg?f=xs"
                          alt=""
                        />
                      </a>
                    </div>
                    <h4 class="info-title" style="font-size: medium;">
                      <hr />
                      LANDSKRONA
                    </h4>
                    <p>EGP 14,745</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="md-layout-item md-medium-size-33 md-small-size-100"
            style="display: block;margin-left: auto;margin-right: auto"
          >
            <md-button class="md-primary">View all</md-button>
          </div>
          <!-- --------------------------Row------------------------------ -->
          <div class="row" style="padding-top:5%;">
            <div class="columnleft">
              <h3 class="info-title" style="margin-bottom:5%">
                Its all in the details
              </h3>
              <p style="font-size: medium;">
                Designed and made in the UK Boss atHome has collaborated with,
                designers, architects and creatives to develop a collection of
                furniture which brings the office to the home or the home to the
                office. <br /><br />
                UK manufacturing facility is a hybrid of twenty first century
                technology with with traditional skills and methods to produce a
                consistently beautiful product.
              </p>
            </div>
            <div class="columnright"></div>
          </div>
          <!-- ---------------------------Row1----------------------------- -->
          <div class="row1">
            <div class="columnleft1">
              <h3 class="info-title" style="margin-bottom:5%">
                Designing your Home Office
              </h3>
              <p style="font-size: medium;">
                Our collections offer all the ergonomic experience of one of the
                UK's leading workplace furniture design and manufactures. We
                understand the science of comfort and are passionate about
                design.<br /><br />
                Our Home Office Collections are about creating the right home
                work balance.
              </p>
            </div>
            <div class="columnright1"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- -----------------------------Header----------------------------------- -->
  </div>
</template>

<script>
//import BasicElements from "./components/BasicElementsSection";

export default {
  components: {},
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg"),
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/tab3.png"),
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/ch2.png"),
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/ch1.png"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg"),
    },
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      carousel1: require("@/assets/img/3.jpg"),
      carousel2: require("@/assets/img/1.jpg"),
      carousel3: require("@/assets/img/2.jpg"),
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

#cap {
  color: #fff;
}
.md-round {
  border-block-color: red;
}
// ------------------------------------------------------
* {
  box-sizing: border-box;
}
.row {
  display: flex;

  width: 108%;
}
.columnleft {
  width: 80%;
  height: 100%;
  padding: 15% 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.columnright {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-image: url("//cdn.shopify.com/s/files/1/0399/1126/0318/files/Boss_atHome_Image_-_15_dc722b0d-fea1-43c8-8fa6-0db3c4d03aea.jpg?v=1593730321");
  position: relative;
  background-size: cover;
  background-position: center;
  display: block;
  width: 100%;
  padding: 0 0 50% 0;
  height: 0;
}
.row1 {
  margin-left: -90px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 111.3%;
  flex-direction: row-reverse;
  margin-top: -3.6%;
}
.columnleft1 {
  width: 80%;
  height: 100%;
  padding: 15% 5%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.columnright1 {
  background-image: url("https://cdn.shopify.com/s/files/1/0399/1126/0318/files/Boss_atHome_Product_-_Kruze_Lounge5.jpg?v=1592858026");
  width: 60%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  display: block;
  width: 100%;
  padding: 0 0 50% 0;
  height: 0;
}
// ------------------------------------------------------------
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  width: 90%;
  height: 40%;
  left: 5%;
  top: 25%;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0, 1);
  -ms-transform: scale(0, 1);
  transform: scale(0, 1);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.hovereffect:hover img {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
  filter: brightness(0.7);
  -webkit-filter: brightness(0.7);
}

.hovereffect h2 {
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  color: rgb(255, 255, 255);
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.hovereffect a,
.hovereffect p {
  color: #fff;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.hovereffect:hover a,
.hovereffect:hover p,
.hovereffect:hover h2 {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
// ------------------------------------------------------
.cards:hover {
  opacity: 0.5;
}
//--------------------------------------------------------
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
