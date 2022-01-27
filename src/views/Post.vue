<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <div class="shoptitle"></div>
              <h1 class="shopmain">Posts</h1>
              <h3 class="shopmain">
                The real journey of discovery does not require going to a new
                land, but <br />
                rather it requires seeing with new eyes.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <!-- ----------------------------------------------------------- -->
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div class="container bootstrap snippets bootdey">
            <div class="row">
              <!------------- Post1 ------------->
              <div
                class="col-lg-8 col-md-12 left-box"
                style="width: 80%; padding: 0% 1%;"
              >
                <div class="card">
                  <div class="panel-blog-container">
                    <div class="panel-body">
                      <div class="image-wrapper">
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
                        </carousel>
                      </div>
                      <div class="widget-blog-author">
                        <div class="widget-blog-author-image">
                          <img
                            src="https://biographyspy.com/images/profile/1588827914_1_Katie%20Cullen%20&%20Katie.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <h4>Shiny Living Room</h4>
                      <div class="text">
                        <small class="text-muted"
                          >By <a href="#"><strong>Emy Tony</strong></a> | Post
                          on July 22, 2021 | 70 comments</small
                        >
                        <p class="m-top-sm m-bottom-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam eros nibh, viverra a dui a, gravida
                          varius velit. Nunc vel tempor nisi. Aenean id
                          pellentesque mi, non placerat mi. Integer luctus
                          accumsan tellus. Vivamus quis elit sit amet nibh
                          lacinia suscipit eu quis purus. Vivamus tristique est
                          non ipsum dapibus lacinia sed nec metus.
                        </p>
                        <a href="single_post.html"
                          ><i class="fa fa-angle-double-right"></i> Continue
                          reading</a
                        >
                        <span
                          class="post-like text-muted tooltip-test"
                          data-toggle="tooltip"
                          data-original-title="I like this post!"
                        >
                          <i class="fa fa-heart"></i>
                          <span class="like-count">43</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!------------- Post2 ------------->
                <div class="card">
                  <div class="panel-blog-container">
                    <div class="panel-body">
                      <div class="image-wrapper">
                        <video width="800" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                      <div class="widget-blog-author">
                        <div class="widget-blog-author-image">
                          <img
                            src="https://th.bing.com/th/id/R.81ac444299f5b87481f37afd49227cf7?rik=6EwkKdvRW8U7hw&pid=ImgRaw&r=0"
                            alt=""
                          />
                        </div>
                      </div>
                      <h4>Meeting Room interior dedign</h4>
                      <div class="text">
                        <small class="text-muted"
                          >By <a href="#"><strong> John Doe</strong></a> | Post
                          on Dec 10, 2021 | 32 comments</small
                        >
                        <p class="m-top-sm m-bottom-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam eros nibh, viverra a dui a, gravida
                          varius velit. Nunc vel tempor nisi. Aenean id
                          pellentesque mi, non placerat mi. Integer luctus
                          accumsan tellus. Vivamus quis elit sit amet nibh
                          lacinia suscipit eu quis purus. Vivamus tristique est
                          non ipsum dapibus lacinia sed nec metus.
                        </p>
                        <a href="single_post.html">
                          <i class="fa fa-angle-double-right"></i> Continue
                          reading</a
                        >
                        <span
                          class="post-like text-muted tooltip-test"
                          data-toggle="tooltip"
                          data-original-title="I like this post!"
                        >
                          <i class="fa fa-heart"></i>
                          <span class="like-count">68</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!------------- Post3 ------------->
                <div class="card">
                  <div class="panel-blog-container">
                    <div class="panel-body">
                      <div class="image-wrapper">
                        <img
                          src="https://images.pexels.com/photos/7045920/pexels-photo-7045920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                        />
                      </div>
                      <div class="widget-blog-author">
                        <div class="widget-blog-author-image">
                          <img
                            src="https://taylor.tulane.edu/wp-content/uploads/2018/08/myron-e1535568315324.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <h4>Modern Living Sofa</h4>
                      <div class="text">
                        <small class="text-muted"
                          >By <a href="#"><strong> Devid lio</strong></a> | Post
                          on Oct 30, 2021 | 58 comments</small
                        >
                        <p class="m-top-sm m-bottom-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam eros nibh, viverra a dui a, gravida
                          varius velit. Nunc vel tempor nisi. Aenean id
                          pellentesque mi, non placerat mi. Integer luctus
                          accumsan tellus. Vivamus quis elit sit amet nibh
                          lacinia suscipit eu quis purus. Vivamus tristique est
                          non ipsum dapibus lacinia sed nec metus.
                        </p>
                        <a href="single_post.html">
                          <i class="fa fa-angle-double-right"></i> Continue
                          reading</a
                        >
                        <span
                          class="post-like text-muted tooltip-test"
                          data-toggle="tooltip"
                          data-original-title="I like this post!"
                        >
                          <i class="fa fa-heart"></i>
                          <span class="like-count">25</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- -------------------Right Sidebar---------------------- -->
              <div
                class="col-lg-8 col-md-12 right-box"
                style="padding: 0% 1%; width:31%;"
              >
                <div class="card">
                  <!------------- Search ------------->
                  <div class="body search">
                    <div class="search-container">
                      <form action="">
                        <button type="submit">
                          <i class="fa fa-search"></i>
                        </button>
                        <input
                          type="text"
                          placeholder="Search..."
                          name="search"
                          style="padding: 5px 25px;font-size: medium;"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <!-------------Categories Cloud------------->
                <div class="card">
                  <h2 style="padding: 5% 5% 0% 5%;">
                    Categories Clouds
                  </h2>
                  <div class="body widget">
                    <ul class="list-unstyled categories-clouds m-b-0">
                      <li><a href="javascript:void(0);">Modern</a></li>
                      <li>
                        <a href="javascript:void(0);">Classic</a>
                      </li>
                      <li><a href="javascript:void(0);">Livingroom</a></li>
                      <li><a href="javascript:void(0);">Bedroom</a></li>
                      <li><a href="javascript:void(0);">Officeroom</a></li>
                    </ul>
                  </div>
                </div>
                <!-------------Popular Post------------->
                <h4 class="headline text-muted">
                  POPULAR POST
                  <span class="line"></span>
                </h4>
                <div class="media-popular-post">
                  <a class="pull-left" href="#">
                    <img
                      width="60"
                      height="60"
                      src="https://images.pexels.com/photos/271676/pexels-photo-271676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Popular Post"
                    />
                  </a>
                  <div class="media-body">
                    I design to make women feel confident and fashion
                  </div>
                </div>

                <div class="media-popular-post">
                  <a class="pull-left" href="#">
                    <img
                      width="60"
                      height="60"
                      src="https://images.pexels.com/photos/6284238/pexels-photo-6284238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt="Popular Post"
                    />
                  </a>
                  <div class="media-body">
                    My inspiration for interior design is more historical than
                    traditional
                  </div>
                </div>

                <div class="media-popular-post">
                  <a class="pull-left" href="#">
                    <img
                      width="60"
                      height="60"
                      src="https://images.pexels.com/photos/4635231/pexels-photo-4635231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Popular Post"
                    />
                  </a>
                  <div class="media-body">
                    Recognizing the need is the primary condition for design
                  </div>
                </div>

                <div class="media-popular-post">
                  <a class="pull-left" href="#">
                    <img
                      width="60"
                      height="60"
                      src="https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="Popular Post"
                    />
                  </a>
                  <div class="media-body">
                    Best accessories to add into your wardrobe summer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- --------------------Pagination------------------------- -->
          <ul
            class="pagination pagination-primary"
            style=" margin-left: auto; margin-right: auto; width: 60%;"
          >
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Previous</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="javascript:void(0);">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">....</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="javascript:void(0);">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "post",
  bodyClass: "post-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/leaf7.jpg"),
    },
  },
  data() {
    return {
      carousel1: require("@/assets/img/c1.jpeg"),
      carousel2: require("@/assets/img/c2.jpeg"),
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

<style>
body {
  padding-top: 0;
  font-size: 12px;
  color: #777;
  background: #f9f9f9;
  font-family: "Open Sans", sans-serif;
  margin-top: 20px;
}

.panel {
  position: relative;
  background: #fff;
}

.image-wrapper {
  position: relative;
  display: block;
  overflow: hidden;
}

.blog-container a:not(.btn) {
  color: #999;
  transition: all 0.2s linear;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
}

.image-wrapper img {
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 0.9;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transform: translateX(0%);
  -webkit-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -ms-transform: translateX(0%);
  -o-transform: translateX(0%);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 99%;
  height: 100%;
  opacity: 0;
  background-color: #3c8dbc;
  background-image: -moz-linear-gradient(top, #5fa4cc, #3c8dbc);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#5fa4cc),
    to(#3c8dbc)
  );
  background-image: -webkit-linear-gradient(top, #5fa4cc, #3c8dbc);
  background-image: -o-linear-gradient(top, #5fa4cc, #3c8dbc);
  background-image: linear-gradient(to bottom, #5fa4cc, #3c8dbc);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#5fa4cc, endColorstr=#3c8dbc, GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  border: 6px solid #296282;
  transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
}

.post-like {
  float: right;
  cursor: pointer;
}

.headline {
  margin: 20px 0;
  padding: 5px 0 10px;
  border-bottom: 1px solid #eee;
  font-weight: 500;
}

h4,
.h4 {
  font-size: 18px;
}
/* ---------------------------------- */
.media,
.media-body {
  overflow: hidden;
  zoom: 1;
}
.row {
  width: 100%;
}
.media-body {
  padding-left: 5%;
  font-size: small;
}
.media-popular-post {
  padding-bottom: 10%;
}
.panel-blog-container {
  padding-bottom: 3%;
  padding-right: 5%;
}
.widget-blog-author {
  margin: -20px -20px 0;
  padding: 10px 20px;
}

.widget-blog-author-image {
  float: left;
  margin-top: -30px;
  padding: 5px;
  border-radius: 70px;
  width: 70px;
  height: 70px;
  background: #fff;
  position: relative;
}

.widget-blog-author-image img {
  max-width: 100%;
  border-radius: 70px;
}

/* ------------------------------------ */
.si-border-round {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}

.social-icon-sm {
  margin: 0 5px 5px 0;
  width: 30px;
  height: 30px;
  font-size: 18px;
  line-height: 30px !important;
  color: #555;
  text-shadow: none;
  border-radius: 3px;
  overflow: hidden;
  display: block;
  float: left;
  text-align: center;
  border: 1px solid #aaa;
}

/* ------------------------------------- */
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
}
.card .body {
  color: #444;
  padding: 7%;
  font-weight: 400;
}
.card .header {
  color: #444;
  padding: 20px;
  position: relative;
  box-shadow: none;
}
.right-box .categories-clouds li {
  display: inline-block;
  margin-bottom: 5px;
}

.right-box .categories-clouds li a {
  display: block;
  border: 1px solid;
  padding: 6px 10px;
  border-radius: 3px;
}

/* -------------------------------------- */
.search-container form {
  position: relative;
}
.search-container form button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 50px;
  background: transparent;
  border: transparent;
  font-size: 20px;
  color: #4b00ff;
  cursor: pointer;
  outline: 0;
}

/* --------------------------------------- */
.text {
  padding-left: 2%;
}
</style>
