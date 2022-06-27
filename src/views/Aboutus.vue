<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div class="shoptitle"></div>
              <h1 class="shopmain">About us</h1>
              <h3 class="shopmain"></h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <!-- Font Awesome -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
    />
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <!-- MDB -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.css"
      rel="stylesheet"
    />
    <!--  -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY="
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    />

    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div
            class="row"
            style="width:100%;background: rgb(245, 241, 241);align-items: center"
          >
            <div
              class="col-lg-8 col-md-12 left-box"
              style="width: 50%; padding: 0% 3%;"
            >
              <div class="panel-blog-container">
                <div class="panel-body">
                  <h1><img :src="img30" alt="" /></h1>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-12 right-box" style="width:50%;">
              <div class="card1">
                <div class="md-layout">
                  <div class="md-layout-item">
                    <h1>Welcome to Home Furniture Store amazing furniture</h1>
                    <br />
                    <p style="font-size: initial;">
                      We believe in products that are built to last. It makes
                      sense for us and it makes sense for the planet. We have a
                      responsibility to limit the impact on the environment
                      ensuring our products stay relevant and we use
                      responsible, quality materials that will withstand the
                      test of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <!-- Image -->
          <div
            class="row"
            style="width: 1290px;height: 500px;align-self: center;padding-top:9%"
          >
            <img :src="img31" style="max-width: 100%;max-height: 100%;" />
          </div>
          <br />
          <!-- Service -->
          <div class="container bootstrap snippets bootdey">
            <section id="services" class="current">
              <div class="services-top">
                <div class="container bootstrap snippets bootdey">
                  <div class="row">
                    <div
                      class="col-lg-8 col-md-12 left-box"
                      style="width: 70%; padding: 0% 3%;"
                    >
                      <div
                        class="col-md-offset-1 col-sm-12 col-md-12 col-md-10"
                      >
                        <div class="services-list">
                          <div
                            class="row"
                            style="width: 100%;padding-bottom: 3%;"
                          >
                            <div class="col-sm-4 col-md-6 col-md-4">
                              <div
                                class="service-block"
                                style="visibility: visible;"
                              >
                                <div class="ico fa fa-magic highlight"></div>
                                <div class="text-block">
                                  <div class="name">Stylish forever</div>
                                  <div class="text">
                                    As we consider returning to the workplace,
                                    we have a unique opportunity to recalibrate.
                                    Companies and designers are looking to
                                    welcome people back into dynamic spaces that
                                    entice, reassure and inspire – and crucially
                                    are flexible enough to adapt to whatever the
                                    world has to throw at us.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 col-md-6 col-md-4">
                              <div
                                class="service-block"
                                style="visibility: visible;"
                              >
                                <div class="ico fa fa-code highlight"></div>
                                <div class="text-block">
                                  <div class="name">Reducing Consumption</div>
                                  <div class="text">
                                    Consumption and production – ever linked –
                                    are the drivers of the world economy. If we
                                    continue to consume goods using materials
                                    from the natural environment at the current
                                    rate, our survival will be threatened
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="row"
                            style="width: 100%;padding-bottom: 3%;"
                          >
                            <div class="col-sm-4 col-md-6 col-md-4">
                              <div
                                class="service-block"
                                style="visibility: visible;"
                              >
                                <div class="ico fa fa-bullhorn highlight"></div>
                                <div class="text-block">
                                  <div class="name">Workplace</div>
                                  <div class="text">
                                    As we return to the workplace, we have a
                                    unique opportunity to recalibrate. Companies
                                    and designers are looking to welcome people
                                    back into dynamic spaces that entice,
                                    reassure, inspire and – crucially – are
                                    flexible enough to adapt to whatever the
                                    world has to throw at us.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-4 col-md-6 col-md-4">
                              <div
                                class="service-block"
                                style="visibility: visible;"
                              >
                                <div class="ico fa fa-eye highlight"></div>
                                <div class="text-block">
                                  <div class="name">Furniture sustainablty</div>
                                  <div class="text">
                                    At Boss Design our goal is to protect the
                                    environment through sustainable
                                    manufacturing and create a better and more
                                    prosperous society to live in. We do this by
                                    designing products to last, providing
                                    quality jobs and supporting local and global
                                    initiatives.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-lg-8 col-md-12 right-box"
                      style="align-self: center;width: 30%;padding: 0% 0%;"
                    >
                      <h4>
                        Furniture is just another accessory for someone with
                        great style
                      </h4>
                      <!-- <p style="padding-top: 4%;">
                        Focused, hard work is the real key to success. Keep your
                        eyes on the goal, & just keep taking the next step
                        towards completing it. If you aren’t sure which way to
                        do something.
                      </p> -->
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- Image -->
          <div
            class="row"
            style="width: 1110px;height: 500px;align-self: center;padding-top:5%"
          >
            <img :src="img32" style="max-width: 100%;max-height: 100%;" />
          </div>
          <br />
          <!-- Team -->
          <div class="row" style="padding-top: 7%;">
            <div class="col-12">
              <div class="section-title title-left text-center text-lg-left">
                <h2 class="top-sep">Meet Our Teams</h2>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div class="row justify-content-center" style="width:100%">
            <div class="col-md-6 col-lg-3 mb-30">
              <div class="team-item">
                <div class="mb-30 position-relative d-flex align-items-center">
                  <span class="socials d-inline-block">
                    <a href="#" class="zmdi zmdi-facebook"></a>
                    <a href="#" class="zmdi zmdi-twitter"></a>
                    <a href="#" class="zmdi zmdi-google"></a>
                    <a href="#" class="zmdi zmdi-instagram"></a>
                  </span>
                  <span class="img-holder d-inline-block">
                    <img :src="img33" alt="Team" />
                  </span>
                </div>
                <div class="team-content">
                  <h5 class="mb-2">JEREMY DUPONT</h5>
                  <p class="text-uppercase mb-0">Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-30">
              <div class="team-item">
                <div class="mb-30 position-relative d-flex align-items-center">
                  <span class="socials d-inline-block">
                    <a href="#" class="zmdi zmdi-facebook"></a>
                    <a href="#" class="zmdi zmdi-twitter"></a>
                    <a href="#" class="zmdi zmdi-google"></a>
                    <a href="#" class="zmdi zmdi-instagram"></a>
                  </span>
                  <span class="img-holder d-inline-block">
                    <img :src="img34" />
                  </span>
                </div>
                <div class="team-content">
                  <h5 class="mb-2">BRYAN JONHSON</h5>
                  <p class="text-uppercase mb-0">CREATIVE STUDIO</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-30">
              <div class="team-item">
                <div class="mb-30 position-relative d-flex align-items-center">
                  <span class="socials d-inline-block">
                    <a href="#" class="zmdi zmdi-facebook"></a>
                    <a href="#" class="zmdi zmdi-twitter"></a>
                    <a href="#" class="zmdi zmdi-google"></a>
                    <a href="#" class="zmdi zmdi-instagram"></a>
                  </span>
                  <span class="img-holder d-inline-block">
                    <img :src="img35" alt="Team" />
                  </span>
                </div>
                <div class="team-content">
                  <h5 class="mb-2">SARAG GARDNER</h5>
                  <p class="text-uppercase mb-0">UI Designer</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-30">
              <div class="team-item">
                <div class="mb-30 position-relative d-flex align-items-center">
                  <span class="socials d-inline-block">
                    <a href="#" class="zmdi zmdi-facebook"></a>
                    <a href="#" class="zmdi zmdi-twitter"></a>
                    <a href="#" class="zmdi zmdi-google"></a>
                    <a href="#" class="zmdi zmdi-instagram"></a>
                  </span>
                  <span class="img-holder d-inline-block">
                    <img :src="img36" alt="Team" />
                  </span>
                </div>
                <div class="team-content">
                  <h5 class="mb-2">JEREMY WATSON</h5>
                  <p class="text-uppercase mb-0">CO-FOUNDER / DESIGN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.2/mdb.min.js"
></script>

<script>
import Vue from "vue";
import { Slider } from "@/components";

export default {
  components: { Slider },
  name: "aboutus",
  bodyClass: "aboutus-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/about.jpg"),
    },
    img30: {
      type: String,
      default: require("@/assets/img/about1.jpg"),
    },
    img31: {
      type: String,
      default: require("@/assets/img/about5.jpg"),
    },
    img32: {
      type: String,
      default: require("@/assets/img/about6.jpg"),
    },
    img33: {
      type: String,
      default: require("@/assets/img/person1.png"),
    },
    img34: {
      type: String,
      default: require("@/assets/img/person2.png"),
    },
    img35: {
      type: String,
      default: require("@/assets/img/person3.png"),
    },
    img36: {
      type: String,
      default: require("@/assets/img/person4.png"),
    },
  },
  data() {
    return {
      sliders: {
        simple: 40,
        rangeSlider: [20, 60],
      },
    };
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
body {
  margin-top: 20px;
  background: #eee;
}

/* ===== ABOUT PAGE ===== */
.team-item {
  padding: 35px;
  padding-right: 0;
  position: relative;
}

.team-item:after,
.team-item:before {
  content: "";
  position: absolute;
  -webkit-box-shadow: 0 5px 30px 0 rgba(39, 39, 39, 0.15);
  box-shadow: 0 5px 30px 0 rgba(39, 39, 39, 0.15);
  border-radius: 10px;
  z-index: -1;
}

.team-item:before {
  height: 100%;
  background-color: #fff;
  left: 0;
  top: 0;
  right: 30px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.team-item:after {
  height: 6px;
  width: calc(100% - 30px);
  background-color: #43a2cb;
  left: 0;
  bottom: 0;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.team-item:hover:after {
  height: 100%;
}

.team-item .img-holder {
  box-shadow: 0 0 20px 0 rgba(51, 51, 51, 0.2);
  border-radius: 10px;
  width: calc(100% - 70px);
  margin-left: 70px;
  overflow: hidden;
}

.team-item .socials {
  position: absolute;
}

.team-item .socials a {
  display: block;
  margin-right: 0;
  margin-bottom: 15px;
}

.team-item .team-content {
  margin-right: 70px;
  text-align: center;
}

.team-item .team-content h5 {
  color: #060504;
}

.team-item .team-content p {
  color: #0c0a09;
  font-weight: 600;
  font-size: 14px;
}

.socials a {
  width: 35px;
  height: 35px;
  background-color: #6897ab;
  border-radius: 50%;
  box-shadow: 0 3px 2px 0 #232d30;
  text-align: center;
  padding-top: 10px;
  font-size: 16px;
  margin-right: 10px;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

h5 {
  font-size: 21px;
}

.mb-30 {
  margin-bottom: 30px;
}
// --------------------------------

#services {
}
#services .services-top {
  padding: 70px 0 50px;
}
#services .services-list {
  padding-top: 50px;
}
.services-list .service-block {
  margin-bottom: 25px;
}
.services-list .service-block .ico {
  font-size: 38px;
  float: left;
}
.services-list .service-block .text-block {
  margin-left: 58px;
}
.services-list .service-block .text-block .name {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 5px;
}

.services-list .service-block .text-block .text {
  font-size: 14px;
  line-height: normal;
  font-weight: 300;
}
.highlight {
  color: #43a2cb;
  font-weight: bold;
}
</style>
