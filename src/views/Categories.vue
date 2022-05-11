<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div class="shoptitle"></div>
              <h1 class="shopmain">Categories</h1>
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
    <!-- ----------------------------------------------------------- -->
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="row" style="width:100%;">
            <div
              class="col-lg-4 col-md-6 mb-4"
              style="width:50%"
              v-for="item in list"
              v-bind:key="item.id"
              v-bind:item="item"
            >
              <div class="bg-image">
                <div class="hov">
                  <a href="#">
                    <img :src="img1" alt="Sample" />
                    <div
                      class="mask"
                      style="background-color: rgba(0, 0, 0, 0.5)"
                    >
                      <div
                        class="d-flex justify-content-center align-items-center h-100"
                      >
                        <h4 class="text-white mb-0">
                          {{ item.category_name }}
                        </h4>
                      </div>
                    </div>
                  </a>
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
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  components: {},
  name: "categories",
  bodyClass: "categories-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/categories/categories.jpg"),
    },
    img1: {
      type: String,
      default: require("@/assets/img/leaf5.jpg"),
    },
    img2: {
      type: String,
      default: require("@/assets/img/singleproduct/singleproduct.jpg"),
    },
    img3: {
      type: String,
      default: require("@/assets/img/categories/categories5.jpg"),
    },
    img4: {
      type: String,
      default: require("@/assets/img/categories/categories3.jpg"),
    },
  },
  data() {
    return {
      sliders: {
        simple: 40,
        rangeSlider: [20, 60],
      },
      list: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://homefurniture00.000webhostapp.com/api/categories`
      );
      this.list = response.data;
    } catch (e) {
      this.errors.push(e);
    }
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
.hov:hover {
  opacity: 0.5;
}
</style>
