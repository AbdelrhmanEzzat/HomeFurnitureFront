<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Abdelrahman Ezzat</h3>
                  <h6>Designer</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Work', 'My Posts', 'Add post']"
              :tab-icon="['palette', 'library_books', 'post_add']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img
                      src="https://images.pexels.com/photos/6636287/pexels-photo-6636287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      class="rounded"
                    />
                    <img
                      src="https://images.pexels.com/photos/6843246/pexels-photo-6843246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      class="rounded"
                    />
                    <img
                      src="https://images.pexels.com/photos/6394545/pexels-photo-6394545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      class="rounded"
                    />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img
                      src="https://images.pexels.com/photos/6843254/pexels-photo-6843254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      class="rounded"
                    />
                    <img
                      src="https://images.pexels.com/photos/5490907/pexels-photo-5490907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      class="rounded"
                    />
                  </div>
                </div>
              </template>

              <template slot="tab-pane-2">
                <!-- Here we add the posts for profile -->
                <div class="container">
                  <div class="team" style="width: 45%;margin: 0 auto;">
                    <div class="md-layout">
                      <!-- Card1 -->
                      <div class="team-player">
                        <md-card
                          class="md-card-plain"
                          style="border: 1.5px solid #e8e8e8;margin-bottom: 10%;"
                        >
                          <div class="md-layout md-size-50 mx-auto">
                            <div class="hovereffect">
                              <a href="#/Post">
                                <img
                                  src="/img/c1.103b8e23.jpeg"
                                  alt=""
                                  class=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="desc" style="margin: 0% 4%;">
                            <h5
                              style="font-weight: bold;margin-top: -5px;margin-bottom: -5px;"
                            >
                              SÖDERHAMN Living Room
                            </h5>
                            <md-card-content>
                              <h7
                                class="card-description"
                                style="font-weight: bolder;"
                              >
                                Inspired by refined comfort and the minimalist
                                aesthetic of Scandinavian Modernism, Bodie has
                                been created to provide practical luxury in a
                                softer space....
                              </h7>
                              <a href="#/SinglePost">Read More</a>
                              <div
                                class="row"
                                style="width:100%; padding-top: 2%;"
                              >
                                <div
                                  class="col-sm-3"
                                  style="width:15%;padding:1%"
                                >
                                  <img
                                    :src="img"
                                    alt="Circle Image"
                                    class="rounded-circle"
                                    style=""
                                  />
                                </div>
                                <div class="col-sm-9" style="margin-left: 2%;">
                                  <h6 style="font-weight: 700;color: darkred;">
                                    Abdelrahman Ezzat
                                  </h6>
                                  <p>
                                    January 20,2022
                                  </p>
                                </div>
                              </div>
                            </md-card-content>
                          </div>
                        </md-card>
                      </div>

                      <!-- Card2 -->
                      <div class="team-player">
                        <md-card
                          class="md-card-plain"
                          style="border: 1.5px solid #e8e8e8;margin-bottom: 10%;"
                        >
                          <div class="md-layout md-size-50 mx-auto">
                            <div class="hovereffect">
                              <a href="#/Post">
                                <img
                                  src="https://hongo.b-cdn.net/wp-content/uploads/2018/09/blog-details-img25.jpg.webp"
                                  alt=""
                                  class=""
                                />
                              </a>
                            </div>
                          </div>
                          <div class="desc" style="margin: 0% 4%;">
                            <h5
                              style="font-weight: bold;margin-top: -5px;margin-bottom: -5px;"
                            >
                              WOODEN DISH
                            </h5>
                            <md-card-content>
                              <h7
                                class="card-description"
                                style="font-weight: bolder;"
                              >
                                This versatile offering is ideally suited to the
                                home, perfect for an office, dining and lounge
                                environment. To achieve the comfort..
                              </h7>
                              <a href="#/SinglePost">Read More</a>
                              <div
                                class="row"
                                style="width:100%; padding-top: 2%;"
                              >
                                <div
                                  class="col-sm-3"
                                  style="width:15%;padding:1%"
                                >
                                  <img
                                    :src="img"
                                    alt="Circle Image"
                                    class="rounded-circle"
                                    style=""
                                  />
                                </div>
                                <div class="col-sm-9" style="margin-left: 2%;">
                                  <h6 style="font-weight: 700;color: darkred;">
                                    Abdelrahman Ezzat
                                  </h6>
                                  <p>
                                    February 1,2022
                                  </p>
                                </div>
                              </div>
                            </md-card-content>
                          </div>
                        </md-card>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <template slot="tab-pane-3">
                <form>
                  <md-field>
                    <label>Title</label>
                    <md-input v-model="regular" md-counter="30"></md-input>
                  </md-field>

                  <div class="row-address">
                    <div class="col-auto-address">
                      <md-field>
                        <label>Upload files</label>
                        <md-file
                          v-model="placeholder"
                          placeholder="1st image"
                        />
                      </md-field>
                    </div>

                    <div class="col-auto-address">
                      <md-field>
                        <label>Upload files</label>
                        <md-file
                          v-model="placeholder"
                          placeholder="2nd image"
                        />
                      </md-field>
                    </div>

                    <div class="col-auto-address">
                      <md-field>
                        <label>Upload files</label>
                        <md-file
                          v-model="placeholder"
                          placeholder="3rd image"
                        />
                      </md-field>
                    </div>

                    <div class="col-auto-address">
                      <md-field>
                        <label>Upload files</label>
                        <md-file
                          v-model="placeholder"
                          placeholder="1st Vedio"
                        />
                      </md-field>
                    </div>
                  </div>

                  <md-field>
                    <label>Post Content</label>
                    <md-textarea
                      v-model="textarea"
                      md-counter="80"
                    ></md-textarea>
                    <md-icon>description</md-icon>
                  </md-field>

                  <br /><md-button class="md-success" type="reset"
                    >RESET</md-button
                  >
                  <md-button
                    class="md-success"
                    type="reset"
                    style="float: right;"
                    >Post</md-button
                  >
                </form>
                <div class="md-layout"></div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  name: "Counters",
  data: () => ({
    regular: null,
    maxLength: null,
    disabled: null,
    autogrow: null,
    textarea: null,
  }),
  components: {
    Tabs,
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") },
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") },
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") },
      ],
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/car5.webp"),
    },
    img: {
      type: String,
      default: require("@/assets/img/00.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;

  .col-auto-address {
    display: inline-block;
    width: 50%;
  }
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
