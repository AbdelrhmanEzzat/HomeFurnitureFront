<!--<template lang="html">
  <div class="post" v-if="post">
    <h1 class="posttitle">{{ post.prod_id }}</h1>
    <p class="postbody">{{ post.product_name }}</p>
    <p class="postid">{{ post.cost }}</p>
  </div>
</template>-->

<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div style=" text-align: center; color: Black;">
                <h1 class="smain">{{ post.product_name }}</h1>
              </div>
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
    <!-- ------------------------------------------ -->
    <div class="main main-raised">
      <div class="section section-basic" style="background-color: #EDECE8;">
        <div class="container">
          <div class="row" style="width:100%">
            <div class="col-sm-8" style="width:60%">
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
                  <div class="carousel-caption"></div>
                  <img :src="carousel1" alt="carousel1" />
                </slide>
                <slide>
                  <div class="carousel-caption"></div>
                  <img :src="carousel2" alt="carousel2" />
                </slide>
                <slide>
                  <div class="carousel-caption"></div>
                  <img :src="carousel3" alt="carousel3" />
                </slide>
                <slide>
                  <div class="carousel-caption"></div>
                  <img :src="carousel4" alt="carousel4" />
                </slide>
              </carousel>
            </div>
            <div
              class="col-sm-8"
              style="width:40%;align-self: center;"
              v-if="post"
            >
              <span class="title">
                <h2 class="text-success">{{ post.product_name }}</h2>
                <!-- <small>70 Available</small> -->
              </span>
              <h2 class="mt-5">
                {{ post.cost }}<small class="text-success"></small>
              </h2>

              <hr />
              <h5 style="font-size: initial;">
                {{ post.details }}
              </h5>

              <hr />
              <button
                class="btn btn-dark btn-rounded mr-1"
                data-toggle="tooltip"
                title=""
                data-original-title="Add to cart"
              >
                <i class="fa fa-shopping-cart"></i>
              </button>
              <button class="btn btn-primary btn-rounded">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-basic" style="    padding: 0;">
        <div class="row" style="width:100%">
          <div class="col-sm-8" style="width:50%;text-align:center">
            <div class="titleSP">
              <p style="padding-top: 3%;">
                {{ post.extradetails }}
              </p>
            </div>
          </div>

          <div class="col-sm-8" style="width:50%">
            <img :src="img1" alt="img1" />
          </div>
        </div>
      </div>
      <div
        class="section section-basic"
        style="background-color: #EDECE8;    padding: 20px;"
      >
        <div class="features text-center" style="">
          <h2 class="title text-center" style="margin-bottom: 0px;">
            Related Products
          </h2>

          <div class="md-layout" style="padding: 0% 5%;">
            <div class="md-layout-item md-medium-size-33 md-small-size">
              <div class="cards">
                <div class="info">
                  <div class="icon">
                    <a href="">
                      <img class="im" :src="img2" alt="" />
                    </a>
                  </div>
                  <h4 class="info-title" style="font-size: medium;">
                    <hr />
                    Paloma Chair
                  </h4>
                  <p>
                    £1,760.00
                  </p>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="cards">
                <div class="info">
                  <div class="icon">
                    <a href="">
                      <img :src="img10" alt="" />
                    </a>
                  </div>
                  <h4 class="info-title" style="font-size: medium;">
                    <hr />
                    Orten Lounge
                  </h4>
                  <p>£1,630.00</p>
                </div>
              </div>
            </div>

            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="cards">
                <div class="info">
                  <div class="icon">
                    <a href="">
                      <img :src="img11" alt="" />
                    </a>
                  </div>
                  <h4 class="info-title" style="font-size: medium;">
                    <hr />
                    Fairfax Lounge
                  </h4>
                  <p>£1,600.00</p>
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
import axios from "axios";
export default {
  props: ["id"],

  data() {
    return {
      post: [],
      endpoint: "https://homefurniture00.000webhostapp.com/api/products/",
      carousel1: require("@/assets/img/singleproduct/1.jpg"),
      carousel2: require("@/assets/img/singleproduct/01.jpg"),
      carousel3: require("@/assets/img/singleproduct/001.jpg"),
      carousel4: require("@/assets/img/singleproduct/0001.jpg"),
    };
  },

  methods: {
    getPost(id) {
      axios(this.endpoint + id)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getPost(this.id);
  },
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
.titleSP {
  padding-top: 35%;
  padding-bottom: 35%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
