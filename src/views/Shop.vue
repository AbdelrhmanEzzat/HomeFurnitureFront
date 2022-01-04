<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div class="shoptitle"></div>
              <h1 class="shopmain">Chairs</h1>
              <h3 class="shopmain">
                Contemporary Seating Collection - Sustainably made in the UK
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <!-- ----------------------------Filter---------------------------------- -->
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="grid-container">
            <div class="filter">
              <div class="filter-categories">
                <div id="checkRadios">
                  <div
                    class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
                  >
                    <h5 style="width: 590%;">Filter By Categories</h5>
                    <div class="flex-column">
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox1"
                        >Classic chair</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox2"
                        >Modern chair</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox3"
                        >Simple chair</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox4"
                        >Flat chair</md-checkbox
                      >
                    </div>
                  </div>
                </div>
                <hr style="width: 100%; margin-top: 10%; margin-bottom:15%;" />
                <!-- ------------------------Filter-------------------------- -->
                <div id="checkRadios">
                  <div
                    class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
                  >
                    <h5 style="width: 423%;">Filter By Color</h5>
                    <div class="flex-column">
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox5"
                        >Black</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox6"
                        >Green</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox7"
                        >Blue</md-checkbox
                      >
                      <md-checkbox
                        style="  margin: 30% 30% 0% 0px;"
                        v-model="checkbox8"
                        >Red</md-checkbox
                      >
                    </div>
                  </div>
                </div>
                <hr style="width: 100%; margin-top: 10%; margin-bottom:15%;" />
                <!------------------------ Sliders --------------------------->
                <div id="sliders">
                  <div
                    class="md-layout-item md-size-150 md-xsmall-size-200"
                    style="width: 100%;height:50%;"
                  >
                    <h5 style="width: 55%;">Filter By Price</h5>

                    <slider
                      v-model="sliders.rangeSlider"
                      type="info"
                      :connect="true"
                    >
                    </slider>
                    <h6 style=" padding-right: 43%;">
                      Price: £0 — £4,000
                    </h6>
                  </div>
                </div>
                <!-- end sliders -->
                <hr style="width: 100%; margin-top: 10%; margin-bottom:15%;" />
              </div>
            </div>
            <!-- --------------------------Gallery Products---------------------------- -->
            <div>
              <div class="gallery">
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Maysa7.jpg?v=1593722446"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Bodie14.jpg?v=1593608579"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Mr_Mrs3.jpg?v=1593618756"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/paloma3.jpg?v=1593594684"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-KruzeLounge2.jpg?v=1593703097"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-DNA6.jpg?v=1594214952"
                    alt="Img"
                  />

                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Fairfax7.jpg?v=1594227183"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Mango5.jpg?v=1598272528"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="gallery__item">
                  <img
                    src="//cdn.shopify.com/s/files/1/0399/1126/0318/products/BossatHomeProduct-Kruze10.jpg?v=1593445099"
                    alt="Img"
                  />
                  <div>
                    <a
                      href="https://hongo.themezaa.com/furniture/product/wood-finish-chair/"
                      class="hongo-LoopProduct-link"
                      ><h5 class="woocommerce-loop-product__title">
                        Wood Finish Chair
                      </h5>
                    </a>
                    <div>
                      <span class="price">
                        <del aria-hidden="true">
                          <span>
                            <bdi style="padding-right:5%"
                              ><span>£</span>150.00</bdi
                            ></span
                          >
                        </del>
                        <ins>
                          <span>
                            <bdi><span>£</span>120.00</bdi></span
                          >
                        </ins>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- --------------------Pagination------------------------ -->
              <pagination
                class="pagination-info"
                style="margin-left: auto;margin-right: auto; width: 30%;"
                v-model="infoPagination"
                with-text
                :page-count="5"
              >
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Slider } from "@/components";
import { Pagination } from "@/components";

export default {
  components: { Slider, Pagination },
  name: "shop",
  bodyClass: "shop-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/leaf5.jpg"),
    },
  },
  data() {
    return {
      initial: null,
      checkbox1: null,
      checkbox2: null,
      checkbox3: null,
      checkbox4: null,
      checkbox5: null,
      checkbox6: null,
      checkbox7: null,
      checkbox8: null,

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
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}
// ---------------------------Title--------------------------
.shoptitle {
  color: white;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 10;
  width: 90%;
}
.shopmain {
  align-items: center;
  text-align: center;
  color: white;
  font-family: -webkit-body;
}
// ----------------------------Container---------------------------------
.container-fluid-with-padding {
  //   padding-left: 15px;
  //   padding-right: 15px;
  margin-left: 0px;
  margin-right: 0px;
}
.grid-container {
  display: grid;
  grid-template-columns: 20% auto;
  grid-gap: 20px;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: auto auto;
  font-size: 30px;
}
/* Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #345645;
  background: #e3e3e3;
}
// ------------------------------Gallery Products-----------------------------------
/* Container Flex */
.gallery {
  display: flex;
  flex-wrap: wrap;
  /* Flex-wrap: quebrar a linha quando um item não puder mais compactar o seu conteúdo */
  max-width: 499px;
}

/* Flex Item */
.gallery__item {
  width: 100%;
  margin-bottom: 7%;
}

.gallery__item > img {
  display: block;
  margin: 0 auto;
  width: 100%;
  //   border-radius: 0.25rem;
  //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.75);
}

.gallery__item > img:hover {
  cursor: pointer;
}

/* Responsive */
@media only screen and (min-width: 500px) {
  .gallery {
    max-width: 719px;
  }

  .gallery__item {
    width: calc((100% / 2) - 10px);
    /* Cada item terá o seu valor máximo disponível,
		divido por 2, menos 10px, cada item terá menos 10px,
		ou seja, 2 itens por linha, 10px + 10px = 20px,
		estes 20px serão usados como margin-left abaixo */
  }

  .gallery__item:nth-child(even) {
    margin-left: 20px;
    /* Cada item par, terá uma margem esquerda de 20px,
		os 20px foram os que sobraram da .gallery__item */
  }
}

@media only screen and (min-width: 720px) {
  .gallery {
    max-width: 100%;
    /* Agora sem padding-left */
  }

  .gallery__item {
    width: calc((100% / 3) - 20px);
    /* Agora que o container .gallery não possui
		mais padding-left, e os item ímpares serão os
		que ficaram na lateral esquerda, retiro 20px
		de cada item, e adiciono como margin-left
		nos ímpares abaixo */
  }

  .gallery__item:nth-child(odd) {
    margin-left: 20px;
    /* Cada item ímpar, terá uma
		margem esquerda de 20px */
  }
}
.price {
  font-size: initial;
}
.woocommerce-loop-product__title {
  margin-bottom: 1%;
  margin-top: 7%;
}
// --------------------CheckBox----------------------------
.md-radio {
  display: flex;
  margin-bottom: 0.5rem;
}
.md-checkbox-label {
  width: 95px;
}
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
